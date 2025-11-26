import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

import BreadCrumbs from "../components/BreadCrumbs.jsx";
import Button from "../components/Button.jsx";

import {EnvelopeIcon, XLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import ImageComponent from "../components/ImageComponent.jsx";

const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
);

export default function Team() {
	
	const [teamMembers, setTeamMembers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	
	useEffect(() => {
		fetchTeamMembers();
	}, []);
	
	const fetchTeamMembers = async () => {
		try {
			const { data, error: err } = await supabase
				.from("TeamMembers")
				.select("id, name, role, linkedin, twitter, email")
				.order("id", { ascending: true });
			
			if (err) {
				setError(err.message);
				return;
			}
			
			setTeamMembers(data || []);
		} catch (err) {
			console.error("Error fetching team members:", err);
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};
	
	return (
		<>
			<section className="hero">
				<div className="hero-content flex flex-col justify-start items-start">
					<BreadCrumbs />
					<div className='hero-content-title flex flex-col justify-start items-start'>
						<h1 className="h2">SANCTUM&reg; is built by a collective of strategists, innovators, and creators who believe in Africa’s potential and are committed to shaping its future.</h1>
					</div>
					
					
					<div className="team-container flex flex-col justify-start items-start">
						
						{loading && <p className="t-copy t-pending">Loading team members...</p>}
						
						{error && <p className="t-copy t-error">Error: {error}</p>}
						
						{!loading && teamMembers.length === 0 && <p className="t-copy t-error">Our teams members can't be loaded right now.</p>}
						
						{!loading && teamMembers.length > 0 && (
							<>
								<p className="t-highlights">Together, we build structure, unlock opportunity, and power ventures that transform industries.</p>
								<div className="team-grid grid">
									{teamMembers.map((member) => (
										<div key={member.id} className="team-member-card flex flex-col justify-start items-start">
											<div className="team-member-image">
												<ImageComponent src={`/images/team/${(member.name).toLowerCase().replace(/\s+/g, "")}.jpg`} alt={member.author} className=""/>
											</div>
											
											<div className="team-member-info flex flex-col justify-start items-start">
												<div className={'flex flex-col justify-center items-start'}>
													<h3 className="h5">{member.name}</h3>
													<p className="t-highlights">{member.role}</p>
												</div>
												
												<div className="team-member-socials flex flex-row justify-start items-start">
													{member.linkedin && (
														<Button
															href={member.linkedin}
															target="_blank"
															rel="noopener noreferrer"
															title="LinkedIn"
														>
															<LinkedinLogoIcon/>
														</Button>
													)}
													{member.twitter && (
														<Button
															to={member.twitter}
															target="_blank"
															rel="noopener noreferrer"
															title="Twitter"
														>
															<XLogoIcon/>
														</Button>
													)}
													{member.email && (
														<Button
															to={`mailto:${member.email}`}
															title="Email"
														>
															<EnvelopeIcon/>
														</Button>
													)}
												</div>
											</div>
										</div>
									))}
								</div>
							</>
						)}
					</div>
				</div>
			</section>
		</>
	);
}