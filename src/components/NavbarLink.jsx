import { Link, useLocation } from 'react-router-dom';

export default function NavbarLink ({navLinks}) {
	const location = useLocation();
	
	return(
		<div className='navbar-links flex flex-row'>

			{navLinks.map((link, index) => {
				const isActive = location.pathname === `/${link === 'home' ? '' : link}`;
				
				return(
					<Link
						to={`/${link === 'home' ? '' : link}`}
						key={index}
						className={`t-links ${isActive ? 'active' : ''}`}
					>
						{link}
					</Link>
				)
			})}
		</div>
	)
}