import { Link } from 'react-router-dom';

export default function Button ({label, direction, hierarchy, children}) {
	
	const classes = `t-links button flex flex-row justify-center items-center ${hierarchy}`;
	
	if (direction !== '') {
		return (
			<Link to={`/${direction}`} className={classes}>
				{label}
				{children}
			</Link>
		);
	}else{
		return (
			<button className={classes}>
				{label}
				{children}
			</button>
		);
	}
	
}