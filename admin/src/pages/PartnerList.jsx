import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Button from "../components/Button";

const BUCKET = "team-avatars";

export default function PartnersList() {
	const [partners, setPartners] = useState([]);
	const [industries, setIndustries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	
	const fetchData = async () => {
		setLoading(true);
		setError("");
		
		const [{ data: sectors, error: sectorsError }, { data: partnersData, error: partnersError }] =
			await Promise.all([
				supabase.from("InvestmentSectors").select("id, name").order("name", { ascending: true }),
				supabase.from("Partners").select("*").order("id", { ascending: true })
			]);
		
		if (sectorsError) console.error("Error fetching sectors:", sectorsError);
		if (partnersError) setError(partnersError.message);
		
		setIndustries(sectors || []);
		setPartners(partnersData || []);
		setLoading(false);
	};
	
	useEffect(() => {
		fetchData();
	}, []);
	
	const getSectorName = (industry_id) =>
		industries.find((i) => i.id === industry_id)?.name || "-";
	
	const deleteImageIfExists = async (publicUrl) => {
		if (!publicUrl) return;
		
		try {
			const parts = publicUrl.split(`${BUCKET}/`);
			const filePath = parts[1];
			if (!filePath) return;
			
			const { error } = await supabase.storage.from(BUCKET).remove([filePath]);
			if (error) console.error("Error deleting storage object:", error);
		} catch (err) {
			console.error("Error resolving file path for delete:", err);
		}
	};
	
	const handleDelete = async (id, imageUrl) => {
		if (!window.confirm("Delete this partner?")) return;
		
		try {
			if (imageUrl) {
				await deleteImageIfExists(imageUrl);
			}
			
			const { error } = await supabase.from("Partners").delete().eq("id", id);
			if (error) throw error;
			
			await fetchData();
		} catch (err) {
			console.error(err);
			setError(err.message || "Error deleting partner.");
		}
	};
	
	return (
		<section className="admin-section flex flex-col gap-lg">
			<header className="admin-section-header flex flex-row justify-between items-center">
				<div>
					<h1 className="h3">Partners</h1>
					<p className="t-copy">
						Manage the companies and ventures featured on the portfolio page.
					</p>
				</div>
				<Button
					hierarchy="primary"
					direction="partners/new"
					label="Add Partner"
				/>
			</header>
			
			<div className="admin-card content-card">
				<h2 className="h5">Current partners</h2>
				
				{error && <p className="t-copy t-error">Error: {error}</p>}
				
				{loading ? (
					<p className="t-copy t-pending">Loading partners…</p>
				) : partners.length === 0 ? (
					<p className="t-copy">No partners added yet.</p>
				) : (
					<table className="admin-table">
						<thead>
						<tr>
							<th>Logo</th>
							<th>Name</th>
							<th>Website</th>
							<th>Industry</th>
							<th></th>
						</tr>
						</thead>
						<tbody>
						{partners.map((p) => (
							<tr key={p.id}>
								<td>
									{p.partner_image && (
										<img
											src={p.partner_image}
											alt={p.name}
											style={{
												width: "48px",
												height: "48px",
												borderRadius: "0.75rem",
												objectFit: "contain"
											}}
										/>
									)}
								</td>
								<td>{p.name}</td>
								<td>{p.website}</td>
								<td>{getSectorName(p.industry_id)}</td>
								<td className="admin-table-actions">
									<Button
										type="button"
										direction={`partners/${p.id}`}
										className="t-links"
									>
										Edit
									</Button>
									<button
										type="button"
										className="t-links t-error"
										onClick={() => handleDelete(p.id, p.partner_image)}
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
