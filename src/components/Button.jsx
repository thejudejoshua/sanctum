import { Link } from 'react-router-dom';

export default function Button ({label, direction, hierarchy, children, ...props}) {
	
	const classes = `t-links button flex flex-row justify-center items-center ${hierarchy}`;
	
	if (direction !== '') {
		return (
			<Link to={`/${direction}`} className={classes} {...props}>
				<span>{label}</span>
				{children}
			</Link>
		);
	}else{
		return (
			<button className={classes} {...props}>
				<span>{label}</span>
				{children}
			</button>
		);
	}
	
}