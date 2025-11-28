import BreadCrumbs from "../components/BreadCrumbs.jsx";

export default function CookiePolicy() {
	return (
		<>
			<section className="hero flex flex-col">
				<div className="hero-content flex flex-col justify-start items-start">
					<BreadCrumbs />
					<h1 className="h1">Our Cookie Policy</h1>
				</div>
				
				<div className="legal-section flex flex-col justify-start items-start">
					<div className={'legal-section-content flex flex-col justify-start items-start'}>
						<h2 className="h4">1. What Are Cookies?</h2>
						<p className="t-copy">Cookies are small text files that are stored on your device (computer, mobile phone, or tablet) when you visit our website. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
					</div>
					
					<div className={'legal-section-content flex flex-col justify-start items-start'}>
						<h2 className="h4">2. How We Use Cookies</h2>
						<p className="t-copy">Sanctum uses cookies for the following purposes:</p>
						<ul className="legal-section-content-info-list">
							<li className="t-copy"><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and allow you to navigate and use its features.</li>
							<li className="t-copy"><strong>Performance Cookies:</strong> These cookies help us understand how visitors use our website by collecting and reporting information anonymously.</li>
							<li className="t-copy"><strong>Functional Cookies:</strong> These cookies enable personalized features such as remembering your preferences and settings.</li>
							<li className="t-copy"><strong>Marketing Cookies:</strong> These cookies track your online activity to help display relevant advertisements on other websites.</li>
						</ul>
					</div>
					
					<div className={'legal-section-content flex flex-col justify-start items-start'}>
						<h2 className="h4">3. Types of Cookies We Use</h2>
						<div className="space-y-4">
							<div>
								<h3 className="font-bold mb-2">Session Cookies:</h3>
								<p className="t-copy">These cookies are deleted when you close your browser and are used to manage user sessions.</p>
							</div>
							<div>
								<h3 className="font-bold mb-2">Persistent Cookies:</h3>
								<p className="t-copy">These cookies remain on your device for a longer period and help us recognize you on your next visit.</p>
							</div>
						</div>
					</div>
					
					<div className={'legal-section-content flex flex-col justify-start items-start'}>
						<h2 className="h4">4. Your Choices</h2>
						<p className="t-copy">Most web browsers allow you to control cookies through your browser settings. You can choose to accept or reject cookies, and you can delete cookies that have already been set. However, disabling cookies may affect your ability to use certain features of our website.</p>
					</div>
					
					<div className={'legal-section-content flex flex-col justify-start items-start'}>
						<h2 className="h4">5. Third-Party Cookies</h2>
						<p className="t-copy">We may also use third-party services that set cookies on your device for analytics, advertising, and other purposes. These third parties have their own privacy policies, and we recommend reviewing them.</p>
					</div>
					
					<div className={'legal-section-content flex flex-col justify-start items-start'}>
						<h2 className="h4">6. Changes to This Cookie Policy</h2>
						<p className="t-copy">We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.</p>
					</div>
					
					<div className={'legal-section-content flex flex-col justify-start items-start'}>
						<h2 className="h4">7. Contact Us</h2>
						<p className="t-copy">If you have any questions about our use of cookies, please contact us at cookies@sanctumafrica.com</p>
					</div>
				</div>
			</section>
		</>
	);
}