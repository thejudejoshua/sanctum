import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
);

export function getTestimonials(id = null) {
	const [data, setData] = useState(id ? null : []);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	
	useEffect(() => {
		async function fetch() {
			try {
				setLoading(true);
				let query = supabase
					.from("Testimonials")
					.select("*")
					.order("id", { ascending: true });
				
				if (id) {
					query = query.eq("id", id).single();
				}
				
				const { data: result, error: err } = await query;
				
				if (err) {
					setError(err.message);
					return;
				}
				
				setData(result);
			} catch (err) {
				console.error("Error fetching testimonials:", err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}
		
		fetch();
	}, [id]);
	
	return { data, loading, error };
}