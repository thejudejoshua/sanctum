import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavbarLink from "./NavbarLink.jsx";
import Logo from "../assets/images/logo-default.svg?react";

const Links = ["home", "team", "portfolio", "contact"];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();
	
	// Close menu whenever the route changes
	useEffect(() => {
		setIsOpen(false);
	}, [location.pathname]);
	
	return (
		<nav
			className={`navbar flex flex-row justify-between ${
				isOpen ? "is-open" : ""
			}`}
		>
			<div className="navbar-logo">
				<Logo />
			</div>
			
			{/* Hamburger toggle (mobile) */}
			<button
				type="button"
				className="navbar-toggle"
				aria-label={isOpen ? "Close navigation" : "Open navigation"}
				aria-expanded={isOpen}
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<span />
			</button>
			
			{/* Nav links */}
			<NavbarLink navLinks={Links} onLinkClick={() => setIsOpen(false)} />
		</nav>
	);
}
