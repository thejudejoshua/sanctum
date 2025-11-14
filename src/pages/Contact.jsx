import Button from "../components/Button.jsx";

export default function Contact() {
	return (
		<section className="hero">
			<div className="hero-content flex flex-col justify-start items-start">
				<p className="t-highlights breadcrumbs flex flex-row justify-center items-start"><Button to={`home`} label={'home'}/> <span> Contact</span></p>
				<h1 className="h1">We’re always open to new partnerships, ventures, and conversations that move Africa forward. Whether you’re an investor, founder, or creative mind, SANCTUM® is ready to connect.</h1>
			</div>
		</section>
	);
}
