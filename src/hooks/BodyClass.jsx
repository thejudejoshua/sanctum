import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function BodyClass() {
	const location = useLocation();
	
	useEffect(() => {
		// Remove all previous route classes
		document.body.className = "";
		
		// Get the current path and convert to a class-friendly string
		let routeClass = location.pathname === "/" ? "home" : location.pathname.slice(1);
		
		document.body.classList.add(routeClass);
		
		// Optional cleanup if you want to remove the class on unmount
		return () => {
			document.body.classList.remove(routeClass);
		};
	}, [location.pathname]);
}
