// admin/src/pages/PartnerForm.jsx

import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

import Button from "../../../src/components/Button.jsx";
import InputComponent from "../../../src/components/InputComponent.jsx";

const BUCKET = "partner-logos";

const emptyForm = {
	name: "",
	milestones: "",
	team: "",
	partner_why: "",
	partner_bio: "",
	linkedin: "",
	instagram: "",
	twitter: "",
	website: "",
	industry_id: null,
	partner_image: ""
};

export default function PartnerForm() {
	const [form, setForm] = useState(emptyForm);
	const [industries, setIndustries] = useState([]);
	const [imageFile, setImageFile] = useState(null);
	const [loading, setLoading] = useState(true);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState("");

	const fileInputRef = useRef(null);
	const navigate = useNavigate();
	const { id } = useParams(); // if present → edit mode

	const isEditing = Boolean(id);

	// Fetch industries + (if editing) the partner
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError("");

			try {
				const { data: sectors, error: sectorsError } = await supabase
					.from("InvestmentSectors")
					.select("id, name")
					.order("name", { ascending: true });

				if (sectorsError) throw sectorsError;
				setIndustries(sectors || []);

				if (isEditing) {
					const { data, error } = await supabase
						.from("Partners")
						.select("*")
						.eq("id", id)
						.single();

					if (error) throw error;

					setForm({
						name: data.name || "",
						milestones: data.milestones || "",
						team: data.team || "",
						partner_why: data.partner_why || "",
						partner_bio: data.partner_bio || "",
						linkedin: data.linkedin || "",
						instagram: data.instagram || "",
						twitter: data.twitter || "",
						website: data.website || "",
						industry_id: data.industry_id || null,
						partner_image: data.partner_image || ""
					});
				}
			} catch (err) {
				console.error(err);
				setError(err.message || "Error loading partner.");
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [id, isEditing]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const uploadImageIfNeeded = async () => {
		if (!imageFile) {
			return form.partner_image || "";
		}

		const fileExt = imageFile.name.split(".").pop();
		const safeName = form.name || "partner";
		const fileName = `${safeName.toLowerCase().replace(/\s+/g, "")}.${fileExt}`;
		const filePath = `${safeName.toLowerCase().replace(/\s+/g, "-")}/${fileName}`;

		const { error: uploadError } = await supabase.storage
			.from(BUCKET)
			.upload(filePath, imageFile, {
				cacheControl: "3600",
				upsert: false
			});

		if (uploadError) {
			console.error("Upload error:", uploadError);
			throw uploadError;
		}

		const { data } = supabase.storage.from(BUCKET).getPublicUrl(filePath);

		return data.publicUrl;
	};

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

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		setError("");

		try {
			let partner_image = form.partner_image;

			// new image uploaded?
			if (imageFile) {
				if (form.partner_image) {
					await deleteImageIfExists(form.partner_image);
				}
				partner_image = await uploadImageIfNeeded();
			}

			const payload = {
				...form,
				industry_id: form.industry_id ? Number(form.industry_id) : null,
				partner_image
			};

			if (isEditing) {
				const { error } = await supabase
					.from("Partners")
					.update(payload)
					.eq("id", id);

				if (error) throw error;
			} else {
				const { error } = await supabase
					.from("Partners")
					.insert([payload]);

				if (error) throw error;
			}

			navigate("/partners"); // back to list
		} catch (err) {
			console.error(err);
			setError(err.message || "Something went wrong while saving the partner.");
		} finally {
			setSubmitting(false);
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
					{isEditing ? "Edit Partner" : "Add New Partner"}
				</h1>
				<p className="t-copy">
					{isEditing
						? "Update this partner's details."
						: "Create a new partner entry for the portfolio."}
				</p>
			</header>

			<div className="admin-card content-card">
				<form onSubmit={handleSubmit} className="admin-form partner flex flex-col">
					<div className="form-input-holder flex flex-col">
						<InputComponent
							type="text"
							name="name"
							value={form.name}
							required
							placeholder="Company name"
							onChange={handleChange}
						/>

						<InputComponent
							type="text"
							name="website"
							value={form.website}
							required
							placeholder="https://company.com"
							onChange={handleChange}
						/>

						<InputComponent
							type="select"
							name="industry"
							placeholder="Select industry / sector"
							options={industries.map((i) => i.name)}
							required
							onChange={(e) => {
								const sectorName = e.target.value;
								const sector = industries.find((s) => s.name === sectorName);
								setForm((prev) => ({
									...prev,
									industry_id: sector ? sector.id : null
								}));
							}}
						/>

						<InputComponent
							type="textarea"
							name="partner_bio"
							placeholder="Company bio / overview"
							required
							value={form.partner_bio}
							onChange={handleChange}
						/>

						<InputComponent
							type="textarea"
							name="partner_why"
							placeholder="Why they partnered with Sanctum"
							required
							value={form.partner_why}
							onChange={handleChange}
						/>

						<InputComponent
							type="textarea"
							name="milestones"
							placeholder="Enter their Key milestones and achievements (each seperated by comma)"
							required
							value={form.milestones}
							onChange={handleChange}
						/>

						<InputComponent
							type="textarea"
							name="team"
							placeholder="Enter the Founding team / leadership summary (each seperated by comma)"
							required
							value={form.team}
							onChange={handleChange}
						/>

						<div className="grid grid-cols-3">
							<InputComponent
								type="url"
								name="linkedin"
								placeholder="LinkedIn URL"
								required
								value={form.linkedin}
								onChange={handleChange}
							/>
							<InputComponent
								type="url"
								name="instagram"
								placeholder="Instagram URL"
								value={form.instagram}
								onChange={handleChange}
							/>
							<InputComponent
								type="url"
								name="twitter"
								placeholder="X (Twitter) URL"
								value={form.twitter}
								onChange={handleChange}
							/>
						</div>

						<div className="partner-image-upload flex flex-col">
							<label className="t-copy">
								Partner logo / image
								<input
									ref={fileInputRef}
									type="file"
									accept="image/*"
									onChange={(e) => setImageFile(e.target.files?.[0] || null)}
									className="input"
								/>
							</label>

							{form.partner_image && !imageFile && (
								<div className="partner-image-preview">
									<img
										src={form.partner_image}
										alt={form.name || "Partner"}
										style={{
											maxWidth: "140px",
											marginTop: "0.5rem",
											borderRadius: "0.75rem"
										}}
									/>
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
							label={submitting ? "Saving…" : isEditing ? "Save changes" : "Create partner"}
							disabled={submitting}
						/>
						<Button
							type="button"
							hierarchy="secondary"
							direction="partners"
							label="Cancel"
						/>
					</div>
				</form>
			</div>
		</section>
	);
}
