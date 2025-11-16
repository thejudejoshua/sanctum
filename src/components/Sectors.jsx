import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import ImageComponent from "./ImageComponent.jsx";

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';


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
	
	if (loading) return <p>Loading sectors...</p>;
	if (error) return <p>Error: {error}</p>;
	
	return (
		<>
			<Swiper
				modules={[FreeMode]}
				freeMode={true}
				spaceBetween={30}
				slidesPerView={2.4}
				grabCursor={true}
				className="sectors-swiper"
			>
				{sectors.map((sector) => (
					<SwiperSlide key={sector.id}>
						<div className="content-card sector-card flex flex-col justify-bottom items-center">
						<ImageComponent
							src={`/images/sectors/icons/${(sector.name).toLowerCase().replace(/\s+/g, "")}.svg`}
							alt={sector.name}
							className="sector-card-icon"
						/>
						<p className="h6 text-center">{sector.bio}</p>
						<div className={`sector-card-highlight flex justify-center items-center ${(sector.name).toLowerCase().replace(/\s+/g, "")}`}>
							<p className="t-copy text-center">{sector.name}</p>
						</div>
					</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}