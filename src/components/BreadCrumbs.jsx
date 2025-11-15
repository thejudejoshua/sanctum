import { Link, useLocation } from "react-router-dom";

export default function BreadCrumbs() {
	const location = useLocation();
	
	// Split URL: "/portfolio/user" → ["portfolio", "user"]
	const segments = location.pathname
		.split("/")
		.filter((seg) => seg !== "");
	
	// Build cumulative paths with segments
	const breadcrumbs = segments.map((segment, index) => {
		const cumulativePath = "/" + segments.slice(0, index + 1).join("/");
		const label = segment.charAt(0).toUpperCase() + segment.slice(1);
		
		return { path: cumulativePath, label };
	});
	
	return (
		<div className="t-highlights breadcrumbs flex flex-row items-center">
			
			<Link to="/" className="t-links">home</Link>
			
			{breadcrumbs.map((crumb, index) => (
				<>
					<span key={index} className="t-links arrow flex flex-row items-center">
						&gt;
					</span>
					<span key={index} className="t-highlights flex flex-row items-center">
						{crumb.label}
					</span>
				</>
			))}
		</div>
	);
}