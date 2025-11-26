import BreadCrumbs from "../components/BreadCrumbs.jsx";

export default function TermsOfUse() {
	return (
		<>
			<section className="hero">
				<div className="hero-content flex flex-col justify-start items-start">
					<BreadCrumbs />
					<h1 className="h1">Terms of Use</h1>
				</div>
			</section>
			
			<section className="legal-section py-16 max-w-4xl mx-auto">
				<div className="space-y-8">
					<div>
						<h2 className="h2 mb-4">1. Agreement to Terms</h2>
						<p className="t-copy">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
					</div>
					
					<div>
						<h2 className="h2 mb-4">2. Use License</h2>
						<p className="t-copy">Permission is granted to temporarily download one copy of the materials (information or software) on Sanctum's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
						<ul className="list-disc list-inside space-y-2 mt-4">
							<li className="t-copy">Modifying or copying the materials</li>
							<li className="t-copy">Using the materials for any commercial purpose or for any public display</li>
							<li className="t-copy">Attempting to decompile or reverse engineer any software contained on the website</li>
							<li className="t-copy">Removing any copyright or other proprietary notations from the materials</li>
							<li className="t-copy">Transferring the materials to another person or "mirroring" the materials on any other server</li>
						</ul>
					</div>
					
					<div>
						<h2 className="h2 mb-4">3. Disclaimer</h2>
						<p className="t-copy">The materials on Sanctum's website are provided on an 'as is' basis. Sanctum makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
					</div>
					
					<div>
						<h2 className="h2 mb-4">4. Limitations</h2>
						<p className="t-copy">In no event shall Sanctum or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Sanctum's website.</p>
					</div>
					
					<div>
						<h2 className="h2 mb-4">5. Accuracy of Materials</h2>
						<p className="t-copy">The materials appearing on Sanctum's website could include technical, typographical, or photographic errors. Sanctum does not warrant that any of the materials on its website are accurate, complete, or current.</p>
					</div>
					
					<div>
						<h2 className="h2 mb-4">6. Links</h2>
						<p className="t-copy">Sanctum has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Sanctum of the site. Use of any such linked website is at the user's own risk.</p>
					</div>
					
					<div>
						<h2 className="h2 mb-4">7. Modifications</h2>
						<p className="t-copy">Sanctum may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
					</div>
					
					<div>
						<h2 className="h2 mb-4">8. Governing Law</h2>
						<p className="t-copy">These terms and conditions are governed by and construed in accordance with the laws of Nigeria, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
					</div>
				</div>
			</section>
		</>
	);
}