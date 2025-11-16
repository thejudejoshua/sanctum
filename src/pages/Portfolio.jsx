import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

import BreadCrumbs from "../components/BreadCrumbs.jsx";
import ImageComponent from "../components/ImageComponent.jsx";
import Button from "../components/Button.jsx";

import {ArrowRightIcon, GlobeSimpleXIcon} from "@phosphor-icons/react";


// Supabase client
const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
);


export default function Portfolio() {
	
	const [partners, setPartners] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	
	// Fetch partners data from Supabase
	useEffect(() => {
		async function fetchPartners() {
			try {
				setLoading(true);
				const { data, error } = await supabase
					.from("Partners")
					.select("*, InvestmentSectors(name)");
				
				if (error) {
					setError(error.message);
					return;
				}
				
				setPartners(data || []);
			} catch (err) {
				console.error("Error fetching partners:", err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}
		
		fetchPartners();
	}, []);
	
	
	
	return (
		<>
			<section className="hero">
				<div className="hero-content flex flex-col justify-start items-start">
					
					<BreadCrumbs />
					
					{loading &&
						<div className="partner-list flex flex-col justify-center items-center">
							<h5 className="h5 text-center">Loading partners...</h5>
						</div>
					}
				
					{!loading && error &&
						<div className="partner-list flex flex-col justify-center items-center">
							<h5 className="h5 text-center text-red-400">Error: {error}</h5>
						</div>
					}
				
					{!loading && !error && partners.length === 0 &&
						<div className="partner-list flex flex-col justify-center incomplete items-center">
							<GlobeSimpleXIcon weight={'thin'}/>
							<h5 className="h5 text-center">Every great story starts with a spark and ours are just beginning to unfold. We’re currently curating a portfolio of ventures that reflect SANCTUM’s vision of innovation, integrity, and lasting impact across Africa’s growth sectors.</h5>
						</div>
					}
				
					{!loading && !error && partners.length > 0 && (
						<>
							<h1 className="h1">Illuminating Africa’s future through Ventures that bridge Vision, Creativity, and Capital.</h1>
							<div className="partner-list complete grid grid-cols-3">
								{partners.map((partner) => (
									<div key={partner.id} className="partner-list-card flex flex-col col-span-1 items-start">
										{/* Partner logo */}
										<ImageComponent
											src={`/images/portfolio/${(partner.name).toLowerCase().replace(/\s+/g, "")}/${partner.partner_image}`}
											alt={`${partner.name} logo`}
											className="partner-logo"
										/>
										
										<div className={'partner-list-card-bottom flex flex-col items-start'}>
											{/* Partner bio */}
											<p className="partner-bio t-copy">{partner.partner_bio}</p>
											
											<Button direction={`portfolio/${encodeURIComponent(partner.name)}`} hierarchy={'tertiary'} label={'view profile'}>
												<ArrowRightIcon weight={'regular'}/>
											</Button>
										</div>
										
										{/* Sector image */}
										<ImageComponent
											src={`/images/sectors/marks/${(partner.InvestmentSectors.name).toLowerCase().replace(/\s+/g, "")}.svg`}
											alt={`${partner.InvestmentSectors.name} icon`}
											className="sector-logo"
										/>
									</div>
								))}
							</div>
						</>
					)}
					
				</div>
			</section>
		</>
	);
}