import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Button from "../components/Button";

const BUCKET = "team-avatars";

export default function TeamList() {
	const [members, setMembers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	
	const fetchMembers = async () => {
		setLoading(true);
		setError("");
		
		const { data, error } = await supabase
			.from("TeamMembers")
			.select("*")
			.order("id", { ascending: true });
		
		if (error) setError(error.message);
		setMembers(data || []);
		setLoading(false);
	};
	
	useEffect(() => {
		fetchMembers();
	}, []);
	
	const handleDelete = async (id) => {
		if (!window.confirm("Remove this team member?")) return;
		
		// 1. Fetch the member to get avatar_url
		const { data: memberData, error: fetchError } = await supabase
			.from("TeamMembers")
			.select("avatar_url")
			.eq("id", id)
			.single();
		
		if (fetchError) {
			setError(fetchError.message);
			return;
		}
		
		// 2. Delete avatar from storage if exists
		if (memberData?.avatar_url) {
			try {
				const fullUrl = memberData.avatar_url;
				const parts = fullUrl.split(`/${BUCKET}/`);
				const filePath = parts[1]; // everything after the bucket name
				
				if (filePath) {
					const { error: storageError } = await supabase.storage
						.from(BUCKET)
						.remove([filePath]);
					
					if (storageError) {
						console.error("Storage delete error:", storageError);
					}
				}
			} catch (err) {
				console.error("Avatar delete failure", err);
			}
		}
		
		// 3. Delete the database row
		const { error } = await supabase
			.from("TeamMembers")
			.delete()
			.eq("id", id);
		
		if (error) setError(error.message);
		else fetchMembers();
	};
	
	return (
		<section className="admin-section flex flex-col gap-lg">
			<header className="admin-section-header flex flex-row justify-between items-center">
				<div>
					<h1 className="h3">Team</h1>
					<p className="t-copy">
						Manage the people displayed on the public team page.
					</p>
				</div>
				
				<Button
					hierarchy="primary"
					direction="team/new"
					label="Add Team Member"
				/>
			</header>
			
			<div className="admin-card content-card">
				<h2 className="h5">Current team</h2>
				
				{error && <p className="t-copy t-error">Error: {error}</p>}
				
				{loading ? (
					<p className="t-copy t-pending">Loading team members…</p>
				) : members.length === 0 ? (
					<p className="t-copy">No team members added yet.</p>
				) : (
					<table className="admin-table">
						<thead>
						<tr>
							<th>Image</th>
							<th>Name</th>
							<th>Role</th>
							<th></th>
						</tr>
						</thead>
						<tbody>
						{members.map((m) => (
							<tr key={m.id}>
								<td>
									{m.avatar_url && (
										<img
											src={m.avatar_url}
											alt={m.name}
											style={{
												width: "40px",
												height: "40px",
												borderRadius: "999px",
												objectFit: "cover"
											}}
										/>
									)}
								</td>
								<td>{m.name}</td>
								<td>{m.role}</td>
								<td className="admin-table-actions">
									<Button
										type="button"
										direction={`team/${m.id}`}
										className="t-links"
									>
										Edit
									</Button>
									<button
										type="button"
										className="t-links t-error"
										onClick={() => handleDelete(m.id)}
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