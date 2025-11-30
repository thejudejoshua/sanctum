import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import Button from "../../../src/components/Button.jsx";
import InputComponent from "../../../src/components/InputComponent.jsx";

const BUCKET = "team-avatars";

const emptyForm = {
	name: "",
	role: "",
	linkedin: "",
	twitter: "",
	email: "",
	avatar_url: "",
};

export default function TeamForm() {
	const [form, setForm] = useState(emptyForm);
	const [avatarFile, setAvatarFile] = useState(null);
	const [avatarPreview, setAvatarPreview] = useState("");
	const [loading, setLoading] = useState(true);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState("");
	
	const fileInputRef = useRef(null);
	const navigate = useNavigate();
	const { id } = useParams();
	
	const isEditing = Boolean(id);
	
	// Fetch existing member if editing
	useEffect(() => {
		const fetchMember = async () => {
			if (!isEditing) {
				setLoading(false);
				return;
			}
			
			setLoading(true);
			setError("");
			
			const { data, error } = await supabase
				.from("TeamMembers")
				.select("*")
				.eq("id", id)
				.single();
			
			if (error) {
				setError(error.message);
			} else if (data) {
				setForm({
					name: data.name || "",
					role: data.role || "",
					linkedin: data.linkedin || "",
					twitter: data.twitter || "",
					email: data.email || "",
					avatar_url: data.avatar_url || "",
				});
				setAvatarPreview(data.avatar_url || "");
			}
			
			setLoading(false);
		};
		
		fetchMember();
	}, [id, isEditing]);
	
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};
	
	const handleAvatarChange = (e) => {
		const file = e.target.files?.[0];
		setAvatarFile(file || null);
		
		if (file) {
			const url = URL.createObjectURL(file);
			setAvatarPreview(url);
		} else {
			setAvatarPreview(form.avatar_url || "");
		}
	};
	
	const uploadAvatarIfNeeded = async () => {
		if (!avatarFile) {
			return form.avatar_url || "";
		}
		
		const fileExt = avatarFile.name.split(".").pop();
		const safeName = form.name || "team-member";
		const fileName = `${safeName.toLowerCase().replace(/\s+/g, "")}.${fileExt}`;
		const filePath = `/${fileName}`; // match your existing pattern
		
		const { error: uploadError } = await supabase.storage
			.from(BUCKET)
			.upload(filePath, avatarFile, {
				cacheControl: "3600",
				upsert: false,
			});
		
		if (uploadError) {
			throw uploadError;
		}
		
		const { data } = supabase.storage
			.from(BUCKET)
			.getPublicUrl(filePath);
		
		return data.publicUrl;
	};
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		setError("");
		
		try {
			const avatar_url = await uploadAvatarIfNeeded();
			
			const payload = {
				...form,
				avatar_url,
			};
			
			if (isEditing) {
				const { error } = await supabase
					.from("TeamMembers")
					.update(payload)
					.eq("id", id);
				
				if (error) throw error;
			} else {
				const { error } = await supabase
					.from("TeamMembers")
					.insert([payload]);
				
				if (error) throw error;
			}
			
			navigate("/team");
		} catch (err) {
			console.error(err);
			setError(err.message || "Something went wrong while saving the team member.");
		} finally {
			setSubmitting(false);
		}
	};
	
	const resetAvatarInput = () => {
		setAvatarFile(null);
		setAvatarPreview(form.avatar_url || "");
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
					{isEditing ? "Edit Team Member" : "Add New Team Member"}
				</h1>
				<p className="t-copy">
					{isEditing
						? "Update this team member’s details."
						: "Create a new team member for the public team page."}
				</p>
			</header>
			
			<div className="admin-card content-card">
				<form
					onSubmit={handleSubmit}
					className="admin-form team flex flex-col"
				>
					<div className="form-input-holder flex flex-col">
						
						<InputComponent
							type="text"
							name="name"
							value={form.name}
							placeholder={isEditing ? "Edit name" : "Enter team member name"}
							required={true}
							onChange={handleChange}
						/>
						
						<InputComponent
							type="text"
							name="role"
							value={form.role}
							placeholder={isEditing ? "Edit role" : "Enter team member role"}
							required={true}
							onChange={handleChange}
						/>
						
						<div className="team-avatar-upload flex flex-col">
							<label className="t-copy">
								Profile Image
								<input
									ref={fileInputRef}
									type="file"
									accept="image/*"
									onChange={handleAvatarChange}
									className="input"
								/>
							</label>
							
							{avatarPreview && (
								<div className="team-avatar-preview">
									<p className="t-highlights">Preview</p>
									<img
										src={avatarPreview}
										alt={form.name || "Team member"}
										style={{
											maxWidth: "120px",
											borderRadius: "999px",
											marginTop: "0.5rem",
											objectFit: "cover",
										}}
									/>
									{form.avatar_url && (
										<button
											type="button"
											className="t-links"
											onClick={resetAvatarInput}
										>
											Reset to saved
										</button>
									)}
								</div>
							)}
						</div>
						
						<div className="grid grid-cols-3">
							<InputComponent
								type="url"
								name="linkedin"
								value={form.linkedin}
								placeholder={isEditing ? "Edit Linkedin" : "https://linkedin.com/in/…"}
								required={true}
								onChange={handleChange}
							/>
							<InputComponent
								type="url"
								name="twitter"
								value={form.twitter}
								placeholder={isEditing ? "Edit X" : "https://x.com/…"}
								required={true}
								onChange={handleChange}
							/>
							<InputComponent
								type="email"
								name="email"
								value={form.email}
								placeholder={isEditing ? "Edit email" : "Enter team member email"}
								required={true}
								onChange={handleChange}
							/>
						</div>
					</div>
					
					{error && <p className="t-copy t-error">Error: {error}</p>}
					
					<div className="admin-form-actions flex">
						<Button
							type="submit"
							hierarchy="primary"
							direction=""
							label={submitting ? "Saving…" : isEditing ? "Save changes" : "Add member"}
							disabled={submitting}
						/>
						<Button
							type="button"
							hierarchy="secondary"
							direction="team"
							label="Cancel"
						/>
					</div>
				</form>
			</div>
		</section>
	);
}
