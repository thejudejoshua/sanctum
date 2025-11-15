import { Link, useLocation } from "react-router-dom";
import React from 'react';

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
				<React.Fragment key={index}>
					<span className="t-links arrow flex flex-row items-center">
						&gt;
					</span>
					{index === breadcrumbs.length - 1 ? (
						<span className="t-highlights flex flex-row items-center">
							{decodeURIComponent(crumb.label)}
						</span>
					) : (
						<Link to={crumb.path} className="t-links flex flex-row items-center">
							{decodeURIComponent(crumb.label)}
						</Link>
					)}
				</React.Fragment>
			))}
		</div>
	);
}