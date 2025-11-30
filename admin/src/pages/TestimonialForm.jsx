import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import Button from "../components/Button";
import InputComponent from "../components/InputComponent";

const BUCKET = "testimonials";

const emptyForm = {
	quote: "",
	author: "",
	title: "",
	image: "",
};

export default function TestimonialForm() {
	const [form, setForm] = useState(emptyForm);
	const [imageFile, setImageFile] = useState(null);
	const [imagePreview, setImagePreview] = useState("");
	const [loading, setLoading] = useState(true);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState("");
	
	const fileInputRef = useRef(null);
	const navigate = useNavigate();
	const { id } = useParams();
	const isEditing = Boolean(id);
	
	useEffect(() => {
		const fetchTestimonial = async () => {
			if (!isEditing) {
				setLoading(false);
				return;
			}
			
			setLoading(true);
			setError("");
			
			const { data, error } = await supabase
				.from("Testimonials")
				.select("*")
				.eq("id", id)
				.single();
			
			if (error) {
				setError(error.message);
				setLoading(false);
				return;
			}
			
			setForm({
				quote: data.quote || "",
				author: data.author || "",
				title: data.title || "",
				image: data.image || "",
			});
			setImagePreview(data.image || "");
			setLoading(false);
		};
		
		fetchTestimonial();
	}, [id, isEditing]);
	
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};
	
	const handleImageChange = (e) => {
		const file = e.target.files?.[0] || null;
		setImageFile(file);
		
		if (file) {
			const url = URL.createObjectURL(file);
			setImagePreview(url);
		} else {
			setImagePreview(form.image || "");
		}
	};
	
	const uploadImageIfNeeded = async () => {
		if (!imageFile) {
			return form.image || "";
		}
		
		const fileExt = imageFile.name.split(".").pop();
		const safeName = form.author || "testimonial";
		const fileName = `${safeName.toLowerCase().replace(/\s+/g, "-")}.${fileExt}`;
		const filePath = `/${fileName}`;
		
		const { error } = await supabase.storage
			.from(BUCKET)
			.upload(filePath, imageFile, {
				cacheControl: "3600",
				upsert: false,
			});
		
		if (error) {
			setError(error.message);
			return form.image || "";
		}
		
		const { data } = await supabase.storage
			.from(BUCKET)
			.getPublicUrl(filePath);
		
		return data.publicUrl;
	};
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		setError("");
		
		const image = await uploadImageIfNeeded();
		
		const payload = {
			...form,
			image,
		};
		
		if (isEditing) {
			const { error } = await supabase
				.from("Testimonials")
				.update(payload)
				.eq("id", id);
			
			if (error) {
				setError(error.message);
				setSubmitting(false);
				return;
			}
		} else {
			const { error } = await supabase
				.from("Testimonials")
				.insert([payload]);
			
			if (error) {
				setError(error.message);
				setSubmitting(false);
				return;
			}
		}
		
		navigate("/testimonials");
	};
	
	const resetImageInput = () => {
		setImageFile(null);
		setImagePreview(form.image || "");
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};
	
	if (loading) {
		return (
			<section className="admin-section">
				<p className="t-copy t-pending">Loading…</p>
			</section>
		);
	}
	
	return (
		<section className="admin-section flex flex-col gap-lg">
			<header className="admin-section-header">
				<h1 className="h3">
					{isEditing ? "Edit Testimonial" : "Add New Testimonial"}
				</h1>
				<p className="t-copy">
					{isEditing
						? "Update this testimonial."
						: "Create a new testimonial for Sanctum."}
				</p>
			</header>
			
			<div className="admin-card content-card">
				<form
					onSubmit={handleSubmit}
					className="admin-form testimonial flex flex-col"
				>
					<div className="form-input-holder flex flex-col">
						<InputComponent
							type="textarea"
							name="quote"
							value={form.quote}
							required={true}
							placeholder={isEditing ? "Edit quote" : "What did they say about Sanctum?"}
							onChange={handleChange}
						/>
						
						<InputComponent
							type="text"
							name="author"
							value={form.author}
							required={true}
							placeholder={isEditing ? "Edit author" : "Author name"}
							onChange={handleChange}
						/>
						
						<InputComponent
							type="text"
							name="title"
							value={form.title}
							required={true}
							placeholder={isEditing ? "Edit title" : "Author title (e.g. Founder, CEO)"}
							onChange={handleChange}
						/>
						
						<div className="testimonial-image-upload flex flex-col">
							<label className="t-copy">
								Author Image
								<input
									ref={fileInputRef}
									type="file"
									accept="image/*"
									onChange={handleImageChange}
									className="input"
								/>
							</label>
							
							{imagePreview && (
								<div className="testimonial-image-preview">
									<p className="t-highlights">Preview</p>
									<img
										src={imagePreview}
										alt={form.author || "Testimonial author"}
										style={{
											maxWidth: "120px",
											borderRadius: "999px",
											marginTop: "0.5rem",
											objectFit: "cover",
										}}
									/>
									{form.image && (
										<button
											type="button"
											className="t-links"
											onClick={resetImageInput}
										>
											Reset to saved
										</button>
									)}
								</div>
							)}
						</div>
					</div>
					
					{error && <p className="t-copy t-error">Error: {error}</p>}
					
					<div className="admin-form-actions flex">
						<Button
							type="submit"
							hierarchy="primary"
							direction=""
							label={submitting ? "Saving…" : isEditing ? "Save changes" : "Add testimonial"}
							disabled={submitting}
						/>
						<Button
							type="button"
							hierarchy="secondary"
							direction="testimonials"
							label="Cancel"
						/>
					</div>
				</form>
			</div>
		</section>
	);
}
