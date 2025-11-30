import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import Button from "../../../src/components/Button.jsx";

import Logo from "../../../src/assets/images/logo-default.svg?react"; // reuse same logo

export default function AdminLayout({ children }) {
	const navigate = useNavigate();
	
	const handleLogout = async () => {
		await supabase.auth.signOut();
		navigate("/login");
	};
	
	return (
		<div className="admin-layout flex flex-col min-h-screen">
			<aside className="admin-sidebar flex flex-col justify-between items-start">
				<div className="admin-sidebar-header flex items-start justify-start">
					<Logo />
				</div>
				
				<nav className="admin-sidebar-nav flex flex-col">
					<NavLink to="/" end className="t-links">
						Overview
					</NavLink>
					<NavLink to="/team" className="t-links">
						Team
					</NavLink>
					<NavLink to="/partners" className="t-links">
						Partners
					</NavLink>
					<NavLink to="/testimonials" className="t-links">
						Testimonials
					</NavLink>
				</nav>
				
				<div className="admin-sidebar-footer flex fle-col">
					<Button hierarchy="secondary" direction={''} label="Sign out" onClick={handleLogout} />
				</div>
			</aside>
			
			<main className="admin-main flex flex-col justify-start items-start">
				<div className="admin-main-inner flex flex-col justify-start items-start">{children}</div>
			</main>
		</div>
	);
}
