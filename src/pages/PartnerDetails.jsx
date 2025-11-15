import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import BreadCrumbs from "../components/BreadCrumbs.jsx";
import Button from "../components/Button.jsx";

import { createClient } from "@supabase/supabase-js";
import {ArrowLeftIcon, ArrowUpRightIcon} from "@phosphor-icons/react";

// Supabase client
const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
);

export default function PartnerDetails() {
	const { partnerName } = useParams();
	const navigate = useNavigate();
	
	const [partner, setPartner] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	
	// Fetch partner data by name
	useEffect(() => {
		async function fetchPartner() {
			try {
				setLoading(true);
				const { data, error } = await supabase
					.from("Partners")
					.select("*, InvestmentSectors(name)")
					.eq("name", partnerName)
					.single();
				
				if (error) {
					setError(error.message);
					return;
				}
				
				if (!data) {
					setError("Partner not found");
					setLoading(false);
					return;
				}
				
				setPartner(data);
			} catch (err) {
				console.error("Error fetching partner:", err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}
		
		fetchPartner();
	}, [partnerName]);
	
	if (loading) {
		return (
			<section className="hero">
				<div className="hero-content flex flex-col justify-start items-start">
					<BreadCrumbs />
					<p className="t-copy">Loading partner details...</p>
				</div>
			</section>
		);
	}
	
	if (!loading && error) {
		return (
			<section className="hero">
				<div className="hero-content flex flex-col justify-start items-start">
					<BreadCrumbs />
					<p className="t-copy text-red-500">Error: {error}</p>
					<button
						onClick={() => navigate("/portfolio")}
						className="cta-button mt-4"
					>
						Back to Portfolio
					</button>
				</div>
			</section>
		);
	}
	
	if (!loading && !error && !partner) {
		return (
			<section className="hero">
				<div className="hero-content flex flex-col justify-start items-start">
					<BreadCrumbs />
					<p className="t-copy">Partner not found.</p>
					<Button
						label={''}
						direction={'portfolio'}
						hierarchy={'tertiary'}
					>
						<ArrowLeftIcon weight={'bold'}/>
						Back to Portfolio
					</Button>
				</div>
			</section>
		);
	}
	
	return (
		<>
			<section className="hero flex flex-col">
				<div className="hero-content flex flex-col justify-start items-start">
					<BreadCrumbs />
				</div>
				
				<div className="partner-details-container flex flex-col">
					<div className="partner-details-container-section name flex flex-col">
						<h3 className="h3">{partner.name}</h3>
					</div>
					
					<div className="partner-details-container-section bio flex flex-col">
						<p className="t-copy">{partner.partner_bio}</p>
					</div>
					
					<div className="partner-details-container-section info flex flex-row">
						<div className='partner-details-container-section-inner flex flex-col'>
							<p className="t-highlights">Milestones</p>
							<div className="flex flex-col">
								{partner.milestones
									.split(",")
									.map((name, index) => (
										<p key={index} className="t-copy">
											{name.trim()}
										</p>
									))}
							</div>
						</div>
						<div className='partner-details-container-section-inner flex flex-col'>
							<p className="t-highlights">Team</p>
							<div className="flex flex-col">
								{partner.team
									.split(",")
									.map((name, index) => (
										<p key={index} className="t-copy">
											{name.trim()}
										</p>
									))}
							</div>
						</div>
						<div className='partner-details-container-section-inner flex flex-col'>
							<p className="t-highlights">Industry</p>
							<div className="flex flex-row">
								<span className="t-copy">{partner.InvestmentSectors.name}</span>
							</div>
						</div>
					</div>
					
					<div className="partner-details-container-section why flex flex-col">
						<p className="t-highlights">Why we partnered</p>
						<p className="t-copy">{partner.partner_why}</p>
					</div>
					
					<div className="partner-details-container-section socials flex flex-col">
						<p className="t-highlights">Social Media</p>
						<div className="flex flex-row">
							<span className="t-copy">{partner.industry}</span>
						</div>
					</div>
					
					{partner.website && (
						<div className="partner-details-container-section flex flex-col">
							<p className="t-highlights">Website</p>
							<Button	label={partner.website} target="_blank" rel="noopener noreferrer" direction={partner.website} hierarchy={'tertiary'}>
								<ArrowUpRightIcon weight={'bold'}/>
							</Button>
						</div>
					)}
				</div>
				
				{/* Back Button */}
				<Button	label={''} direction={'portfolio'} hierarchy={'tertiary'}>
					<ArrowLeftIcon weight={'bold'}/>
					Back to Portfolio list
				</Button>
			</section>
		</>
	);
}