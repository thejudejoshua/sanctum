import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Button from "../components/Button";

const BUCKET = "testimonials";

export default function TestimonialsList() {
	const [testimonials, setTestimonials] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	
	const fetchTestimonials = async () => {
		setLoading(true);
		setError("");
		
		const { data, error } = await supabase
			.from("Testimonials")
			.select("*")
			.order("id", { ascending: true });
		
		if (error) {
			setError(error.message);
			setLoading(false);
			return;
		}
		
		setTestimonials(data || []);
		setLoading(false);
	};
	
	useEffect(() => {
		fetchTestimonials();
	}, []);
	
	const deleteImageIfExists = async (publicUrl) => {
		if (!publicUrl) return;
		
		const parts = publicUrl.split(`/${BUCKET}/`);
		const filePath = parts[1];
		
		if (!filePath) return;
		
		const { error } = await supabase.storage
			.from(BUCKET)
			.remove([filePath]);
		
		if (error) {
			console.error("Error deleting testimonial image:", error.message);
		}
	};
	
	const handleDelete = async (id, imageUrl) => {
		if (!window.confirm("Delete this testimonial?")) return;
		
		// delete image from storage (if any)
		if (imageUrl) {
			await deleteImageIfExists(imageUrl);
		}
		
		// delete DB row
		const { error } = await supabase
			.from("Testimonials")
			.delete()
			.eq("id", id);
		
		if (error) {
			setError(error.message);
			return;
		}
		
		fetchTestimonials();
	};
	
	return (
		<section className="admin-section flex flex-col gap-lg">
			<header className="admin-section-header flex flex-row justify-between items-center">
				<div>
					<h1 className="h3">Testimonials</h1>
					<p className="t-copy">
						Manage the testimonials displayed on the Sanctum site.
					</p>
				</div>
				
				<Button
					hierarchy="primary"
					label="Add Testimonial"
					direction={`testimonials/new`}
				/>
			</header>
			
			<div className="admin-card content-card">
				<h2 className="h5">Current testimonials</h2>
				
				{error && <p className="t-copy t-error">Error: {error}</p>}
				
				{loading ? (
					<p className="t-copy t-pending">Loading testimonials…</p>
				) : testimonials.length === 0 ? (
					<p className="t-copy">No testimonials added yet.</p>
				) : (
					<table className="admin-table">
						<thead>
						<tr>
							<th>Image</th>
							<th>Author</th>
							<th>Quote</th>
							<th></th>
						</tr>
						</thead>
						<tbody>
						{testimonials.map((t) => (
							<tr key={t.id}>
								<td>
									{t.image && (
										<img
											src={t.image}
											alt={t.author}
											style={{
												width: "40px",
												height: "40px",
												borderRadius: "999px",
												objectFit: "cover"
											}}
										/>
									)}
								</td>
								<td>{t.author}</td>
								<td>
									<span className="t-copy">
										{t.quote?.length > 80
											? `${t.quote.slice(0, 80)}…`
											: t.quote}
									</span>
								</td>
								<td className="admin-table-actions">
									<Button
										type="button"
										direction={`testimonials/${t.id}`}
										className="t-links"
									>
										Edit
									</Button>
									<button
										type="button"
										className="t-links t-error"
										onClick={() => handleDelete(t.id, t.image)}
									>
										Delete
									</button>
								</td>
							</tr>
						))}
						</tbody>
					</table>
				)}
			</div>
		</section>
	);
}
