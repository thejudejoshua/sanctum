import BreadCrumbs from "../components/BreadCrumbs.jsx";

export default function PrivacyPolicy() {
	return (
		<>
			<section className="hero flex flex-col">
				<div className="hero-content flex flex-col justify-start items-start">
					<BreadCrumbs />
					<h1 className="h1">Our Privacy Policy</h1>
				</div>
				<div className="legal-section flex flex-col justify-start items-start">
					<div className={'legal-section-content flex flex-col'}>
						<h2 className="h4">1. Introduction</h2>
						<p className="t-copy">Sanctum ("we" or "us" or "our") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website and the choices you have associated with that data.</p>
					</div>
					
					<div className={'legal-section-content flex flex-col'}>
						<h2 className="h4">2. Information Collection and Use</h2>
						<p className="t-copy">We collect several different types of information for various purposes to provide and improve our service to you.</p>
						<div className="legal-section-content-info flex flex-col">
							<div className='legal-section-content-info-title flex flex-col'>
								<h3 className="h6">Personal Data:</h3>
								<p className="t-copy">While using our website, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to:</p>
							</div>
							<ul className="legal-section-content-info-list">
								<li className="t-copy">Email address</li>
								<li className="t-copy">First name and last name</li>
								<li className="t-copy">Phone number</li>
								<li className="t-copy">Address, State, Province, ZIP/Postal code, City</li>
								<li className="t-copy">Cookies and Usage Data</li>
							</ul>
						</div>
					</div>
					
					<div className={'legal-section-content flex flex-col'}>
						<div className='legal-section-content-info-title flex flex-col'>
							<h2 className="h4">3. Use of Data</h2>
							<p className="t-copy">Sanctum uses the collected data for various purposes:</p>
						</div>
						<ul className="legal-section-content-info-list">
							<li className="t-copy">To provide and maintain our website</li>
							<li className="t-copy">To notify you about changes to our website</li>
							<li className="t-copy">To allow you to participate in interactive features of our website</li>
							<li className="t-copy">To provide customer support</li>
							<li className="t-copy">To gather analysis or valuable information so that we can improve our website</li>
							<li className="t-copy">To monitor the usage of our website</li>
							<li className="t-copy">To detect, prevent and address technical issues</li>
						</ul>
					</div>
					
					<div className={'legal-section-content flex flex-col'}>
						<h2 className="h4">4. Security of Data</h2>
						<p className="t-copy">The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
					</div>
					
					<div className={'legal-section-content flex flex-col'}>
						<h2 className="h4">5. Changes to This Privacy Policy</h2>
						<p className="t-copy">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.</p>
					</div>
					
					<div className={'legal-section-content flex flex-col'}>
						<h2 className="h4">6. Contact Us</h2>
						<p className="t-copy">If you have any questions about this Privacy Policy, please contact us at privacy@sanctumafrica.com</p>
					</div>
				</div>
			</section>
		</>
	);
}