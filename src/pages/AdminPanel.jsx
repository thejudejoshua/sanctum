import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import {PencilIcon, PlusIcon, TrashIcon, XIcon} from "@phosphor-icons/react";

const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
);

export default function AdminPanel() {
	const [activeTab, setActiveTab] = useState('testimonials');
	const [testimonials, setTestimonials] = useState([]);
	const [partners, setPartners] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [editingId, setEditingId] = useState(null);
	const [sectors, setSectors] = useState([]);
	
	const [formData, setFormData] = useState({
		quote: '',
		author: '',
		title: '',
		image: '',
		name: '',
		logo: '',
		bio: '',
		industry_id: '',
		website: ''
	});
	
	const [imageFile, setImageFile] = useState(null);
	
	useEffect(() => {
		fetchTestimonials();
		fetchPartners();
		fetchSectors();
	}, []);
	
	const fetchTestimonials = async () => {
		try {
			const { data, error } = await supabase
				.from('Testimonials')
				.select('*')
				.order('id', { ascending: true });
			if (error) throw error;
			setTestimonials(data || []);
		} catch (err) {
			setError(err.message);
		}
	};
	
	const fetchPartners = async () => {
		try {
			const { data, error } = await supabase
				.from('Partners')
				.select('*, InvestmentSectors(name)')
				.order('id', { ascending: true });
			if (error) throw error;
			setPartners(data || []);
		} catch (err) {
			setError(err.message);
		}
	};
	
	const fetchSectors = async () => {
		try {
			const { data, error } = await supabase
				.from('InvestmentSectors')
				.select('id, name')
				.order('id', { ascending: true });
			if (error) throw error;
			setSectors(data || []);
		} catch (err) {
			setError(err.message);
		}
	};
	
	const handleImageUpload = async (file) => {
		try {
			const fileName = `${Date.now()}_${file.name}`;
			const { error } = await supabase.storage
				.from('sanctum-uploads')
				.upload(`images/${fileName}`, file);
			
			if (error) throw error;
			
			const { data } = supabase.storage
				.from('sanctum-uploads')
				.getPublicUrl(`images/${fileName}`);
			
			return data.publicUrl;
		} catch (err) {
			setError(err.message);
			return null;
		}
	};
	
	const handleImageChange = (e) => {
		setImageFile(e.target.files[0]);
	};
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		
		try {
			let imageUrl = formData.image;
			
			if (imageFile) {
				imageUrl = await handleImageUpload(imageFile);
				if (!imageUrl) throw new Error('Image upload failed');
			}
			
			const dataToSave = activeTab === 'testimonials'
				? { quote: formData.quote, author: formData.author, title: formData.title, image: imageUrl }
				: { name: formData.name, logo: imageUrl || formData.logo, bio: formData.bio, industry_id: formData.industry_id, website: formData.website };
			
			if (editingId) {
				const { error } = await supabase
					.from(activeTab === 'testimonials' ? 'Testimonials' : 'Partners')
					.update(dataToSave)
					.eq('id', editingId);
				
				if (error) throw error;
			} else {
				const { error } = await supabase
					.from(activeTab === 'testimonials' ? 'Testimonials' : 'Partners')
					.insert([dataToSave]);
				
				if (error) throw error;
			}
			
			setFormData(activeTab === 'testimonials'
				? { quote: '', author: '', title: '', image: '' }
				: { name: '', logo: '', bio: '', industry_id: '', website: '' });
			setImageFile(null);
			setEditingId(null);
			setShowModal(false);
			
			activeTab === 'testimonials' ? fetchTestimonials() : fetchPartners();
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};
	
	const handleEdit = (item) => {
		if (activeTab === 'testimonials') {
			setFormData({ quote: item.quote, author: item.author, title: item.title, image: item.image });
		} else {
			setFormData({ name: item.name, logo: item.logo, bio: item.bio, industry_id: item.industry_id, website: item.website });
		}
		setEditingId(item.id);
		setShowModal(true);
	};
	
	const handleDelete = async (id) => {
		if (!confirm('Are you sure?')) return;
		
		try {
			const { error } = await supabase
				.from(activeTab === 'testimonials' ? 'Testimonials' : 'Partners')
				.delete()
				.eq('id', id);
			
			if (error) throw error;
			
			activeTab === 'testimonials' ? fetchTestimonials() : fetchPartners();
		} catch (err) {
			setError(err.message);
		}
	};
	
	const openModal = () => {
		setEditingId(null);
		setImageFile(null);
		setFormData(activeTab === 'testimonials'
			? { quote: '', author: '', title: '', image: '' }
			: { name: '', logo: '', bio: '', industry_id: '', website: '' });
		setShowModal(true);
	};
	
	return (
		<div className="min-h-screen bg-gray-900 text-white p-8">
			<div className="max-w-6xl mx-auto">
				<h1 className="text-4xl font-bold mb-8">Admin Panel</h1>
				
				{error && <div className="bg-red-500 p-4 rounded mb-4">{error}</div>}
				
				<div className="flex gap-4 mb-8">
					<button
						onClick={() => setActiveTab('testimonials')}
						className={`px-6 py-2 rounded ${activeTab === 'testimonials' ? 'bg-blue-600' : 'bg-gray-700'}`}
					>
						Testimonials
					</button>
					<button
						onClick={() => setActiveTab('partners')}
						className={`px-6 py-2 rounded ${activeTab === 'partners' ? 'bg-blue-600' : 'bg-gray-700'}`}
					>
						Partners
					</button>
				</div>
				
				<button
					onClick={openModal}
					className="flex items-center gap-2 bg-green-600 px-6 py-2 rounded mb-8 hover:bg-green-700"
				>
					<PlusIcon size={20} /> Add {activeTab === 'testimonials' ? 'Testimonial' : 'Partner'}
				</button>
				
				{/* Testimonials Table */}
				{activeTab === 'testimonials' && (
					<div className="bg-gray-800 rounded-lg overflow-hidden">
						<table className="w-full">
							<thead className="bg-gray-700">
							<tr>
								<th className="p-4 text-left">Author</th>
								<th className="p-4 text-left">Title</th>
								<th className="p-4 text-left">Quote</th>
								<th className="p-4 text-left">Image</th>
								<th className="p-4 text-center">Actions</th>
							</tr>
							</thead>
							<tbody>
							{testimonials.map((t) => (
								<tr key={t.id} className="border-t border-gray-700">
									<td className="p-4">{t.author}</td>
									<td className="p-4">{t.title}</td>
									<td className="p-4 truncate">{t.quote.substring(0, 50)}...</td>
									<td className="p-4">{t.image ? '✓' : '-'}</td>
									<td className="p-4 flex gap-2 justify-center">
										<button onClick={() => handleEdit(t)} className="text-blue-400 hover:text-blue-300">
											<PencilIcon />
										</button>
										<button onClick={() => handleDelete(t.id)} className="text-red-400 hover:text-red-300">
											<TrashIcon/>
										</button>
									</td>
								</tr>
							))}
							</tbody>
						</table>
					</div>
				)}
				
				{/* Partners Table */}
				{activeTab === 'partners' && (
					<div className="bg-gray-800 rounded-lg overflow-hidden">
						<table className="w-full">
							<thead className="bg-gray-700">
							<tr>
								<th className="p-4 text-left">Name</th>
								<th className="p-4 text-left">Industry</th>
								<th className="p-4 text-left">Bio</th>
								<th className="p-4 text-left">Logo</th>
								<th className="p-4 text-center">Actions</th>
							</tr>
							</thead>
							<tbody>
							{partners.map((p) => (
								<tr key={p.id} className="border-t border-gray-700">
									<td className="p-4">{p.name}</td>
									<td className="p-4">{p.InvestmentSectors?.name || '-'}</td>
									<td className="p-4 truncate">{p.bio.substring(0, 50)}...</td>
									<td className="p-4">{p.logo ? '✓' : '-'}</td>
									<td className="p-4 flex gap-2 justify-center">
										<button onClick={() => handleEdit(p)} className="text-blue-400 hover:text-blue-300">
											<PencilIcon/>
										</button>
										<button onClick={() => handleDelete(p.id)} className="text-red-400 hover:text-red-300">
											<TrashIcon />
										</button>
									</td>
								</tr>
							))}
							</tbody>
						</table>
					</div>
				)}
				
				{/* Modal */}
				{showModal && (
					<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
						<div className="bg-gray-800 rounded-lg p-8 max-w-md w-full max-h-96 overflow-y-auto">
							<div className="flex justify-between items-center mb-4">
								<h2 className="text-2xl font-bold">
									{editingId ? 'Edit' : 'Add'} {activeTab === 'testimonials' ? 'Testimonial' : 'Partner'}
								</h2>
								<button onClick={() => setShowModal(false)}>
									<XIcon size={24} />
								</button>
							</div>
							
							<div className="space-y-4">
								{activeTab === 'testimonials' ? (
									<>
										<input
											type="text"
											placeholder="Author"
											value={formData.author}
											onChange={(e) => setFormData({ ...formData, author: e.target.value })}
											className="w-full bg-gray-700 p-2 rounded text-white"
											required
										/>
										<input
											type="text"
											placeholder="Title"
											value={formData.title}
											onChange={(e) => setFormData({ ...formData, title: e.target.value })}
											className="w-full bg-gray-700 p-2 rounded text-white"
											required
										/>
										<textarea
											placeholder="Quote"
											value={formData.quote}
											onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
											className="w-full bg-gray-700 p-2 rounded text-white"
											required
										/>
									</>
								) : (
									<>
										<input
											type="text"
											placeholder="Partner Name"
											value={formData.name}
											onChange={(e) => setFormData({ ...formData, name: e.target.value })}
											className="w-full bg-gray-700 p-2 rounded text-white"
											required
										/>
										<textarea
											placeholder="Bio"
											value={formData.bio}
											onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
											className="w-full bg-gray-700 p-2 rounded text-white"
											required
										/>
										<select
											value={formData.industry_id}
											onChange={(e) => setFormData({ ...formData, industry_id: e.target.value })}
											className="w-full bg-gray-700 p-2 rounded text-white"
											required
										>
											<option value="">Select Industry</option>
											{sectors.map((s) => (
												<option key={s.id} value={s.id}>{s.name}</option>
											))}
										</select>
										<input
											type="url"
											placeholder="Website URL"
											value={formData.website}
											onChange={(e) => setFormData({ ...formData, website: e.target.value })}
											className="w-full bg-gray-700 p-2 rounded text-white"
										/>
									</>
								)}
								
								<input
									type="file"
									accept="image/*"
									onChange={handleImageChange}
									className="w-full bg-gray-700 p-2 rounded text-white"
								/>
								
								<button
									onClick={handleSubmit}
									disabled={loading}
									className="w-full bg-blue-600 p-2 rounded font-bold hover:bg-blue-700 disabled:opacity-50"
								>
									{loading ? 'Saving...' : editingId ? 'Update' : 'Add'}
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}