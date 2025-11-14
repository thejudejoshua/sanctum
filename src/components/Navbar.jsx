import NavbarLink from "./NavbarLink.jsx";
import Logo from "../assets/images/logo-default.svg";
import ImageComponent from "./ImageComponent.jsx";


const Links = ['home', 'portfolio', 'contact']
export default function Navbar () {
	return(
		<nav className="navbar flex flex-row justify-between ">
			<div className={'navbar-logo'}>
				<ImageComponent src={Logo}/>
			</div>
			<NavbarLink navLinks={Links}/>
		</nav>
	)
}