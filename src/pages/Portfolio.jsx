import Button from "../components/Button.jsx";

export default function Portfolio() {
	console.log("Portfolio component rendered!");
	return (
		<section className="hero">
			<div className="hero-content flex flex-col justify-start items-start">
				<p className="t-highlights breadcrumbs flex flex-row justify-center items-start"><Button to={`home`} label={'home'}/> <span> Portfolio</span></p>
				<h1 className="h1">Illuminating Africa’s future through Ventures that bridge Vision, Creativity, and Capital.</h1>
			</div>
		</section>
	);
}
