import NavbarLink from "./NavbarLink.jsx";
import Logo from "../assets/images/logo-default.svg?react";


const Links = ['home', 'portfolio', 'contact']
export default function Navbar () {
	return(
		<nav className="navbar flex flex-row justify-between ">
			<div className={'navbar-logo'}>
				<Logo/>
			</div>
			<NavbarLink navLinks={Links}/>
		</nav>
	)
}