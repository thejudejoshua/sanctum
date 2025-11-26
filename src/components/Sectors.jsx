import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import ImageComponent from "./ImageComponent.jsx";

const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
);

export default function Sectors() {
	const [sectors, setSectors] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	
	useEffect(() => {
		async function fetchSectors() {
			try {
				setLoading(true);
				const { data, error } = await supabase
					.from("InvestmentSectors")
					.select("*")
					.order("id", { ascending: true });
				
				if (error) {
					setError(error.message);
					return;
				}
				
				setSectors(data || []);
			} catch (err) {
				console.error("Error fetching sectors:", err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}
		
		fetchSectors();
	}, []);
	
	if (loading && !error) return (
		<>
			<p className={'t-copy t-pending text-center'}>Loading sectors...</p>
		</>
	);
	
	if (error && !loading) return (
		<>
			<p className={'t-copy t-error text-center'}>Error: {error}</p>
		</>
	);
	
	return (
		<>
			{sectors.map((sector) => (
				<div className="content-card sector-card col-span-1 flex flex-col justify-bottom items-center" key={sector.id}>
					<ImageComponent
						src={`/images/sectors/icons/${(sector.name).toLowerCase().replace(/\s+/g, "")}.svg`}
						alt={sector.name}
						className="sector-card-icon"
					/>
					<p className="t-copy text-center">{sector.bio}</p>
					<div className={`sector-card-highlight flex justify-center items-center ${(sector.name).toLowerCase().replace(/\s+/g, "")}`}>
						<p className="t-copy text-center">{sector.name}</p>
					</div>
				</div>
			))}
		</>
	);
}