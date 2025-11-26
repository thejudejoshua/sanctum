import BreadCrumbs from "../components/BreadCrumbs.jsx";
import {ExportIcon} from "@phosphor-icons/react";
import FormComponent from "../components/FormComponent.jsx";

export default function Invest() {
	
	
	return (
		<>
		<section className="hero">
			<div className="hero-content flex flex-col justify-start items-start">
				<BreadCrumbs />
				<div className={'hero-content-title flex flex-col'}>
					<h1 className="h1">Africa is Rising. Be Part of the Story.</h1>
					<p className="t-copy">
						Across the continent, entrepreneurs are solving real problems. Building companies that don't just make money—they transform communities.
						As an investor with Sanctum, you're not just funding ventures. You're investing in Africa's future. You're backing builders who understand
						the market intimately and are positioned to lead global industries from this continent.
					</p>
				</div>
			</div>
		</section>
		
		<section className="investment-criteria">
			<div className="">
				<h2 className="h2">Investment Criteria</h2>
				<p className="t-copy">We invest strategically. Here's what we're looking for.</p>
				
				<div className="grid grid-cols-3">
					<div className="">
						<h3 className="t-highlights">Check Size</h3>
						<p className="t-copy">$50K - $2M per round</p>
					</div>
					<div className="">
						<h3 className="t-highlights">Stage</h3>
						<p className="t-copy">Seed through Series B</p>
					</div>
					<div className="">
						<h3 className="t-highlights">Geography</h3>
						<p className="t-copy">African founders or pan-African focus</p>
					</div>
				</div>
				
				<div className="">
					<h3 className="h3">What We Look For</h3>
                    
                    <div className="grid">
                        <div className="flex ">
                            
                            <div>
                                <h3 className="h3">Exceptional Returns</h3>
                                <p className="t-copy">Early-stage African ventures are among the highest-growth opportunities globally. Partner with us to access deal flow that institutional investors fight for.</p>
                            </div>
                        </div>
                        
                        <div className="flex">
                            
                            <div>
                                <h3 className="h3">Curated Deal Flow</h3>
                                <p className="t-copy">We don't throw everything at you. Every venture in our portfolio has been rigorously vetted by our team of experienced operators and investors.</p>
                            </div>
                        </div>

                        <div className="flex">
                            
                            <div>
                                <h3 className="h3">Local Expertise</h3>
                                <p className="t-copy">We understand African markets deeply. Our network, insights, and relationships give your portfolio companies an unfair advantage.</p>
                            </div>
                        </div>

                        <div className="flex">
                            
                            <div>
                                <h3 className="h3">Active Support</h3>
                                <p className="t-copy">We're not passive investors. We actively help portfolio companies scale, connect them to talent, customers, and future capital rounds.</p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <p className="t-copy">
                            "The companies we invest in today aren't just capturing African markets—they're becoming the next global giants.
						    Early investors in Sanctum portfolio companies aren't betting on Africa's potential. They're banking on its inevitability."
                        </p>
                    </div>
                </div>
				
			</div>
            </section>

            <section className="investment-impact">
                <div className="">
                    <h2 className="h2">Your Investment Creates Ripples</h2>
                    
                    <div className="">
                        <div className="flex">
                            <div className="flex items-center justify-center">1</div>
                            <div>
                                <h3 className="h3">Economic Growth</h3>
                                <p className="t-copy">Every dollar you invest creates jobs, builds infrastructure, and strengthens local economies across Africa.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center justify-center">2</div>
                            <div>
                                <h3 className="h3">Community Impact</h3>
                                <p className="t-copy">Our ventures address real problems: healthcare access, financial inclusion, agricultural productivity, education quality. Your investment matters beyond ROI.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center justify-center">3</div>
                            <div>
                                <h3 className="h3">Global Influence</h3>
                                <p className="t-copy">Be part of reshaping global industries. African founders aren't following trends—they're setting them. You'll be invested in the future.</p>
				</div>
			</div>
		</div>
		</div>
</section>
	
	<section className="invest-form">
		<div className="">
			<h2 className="h2">Ready to Invest in Africa's Future?</h2>
			<p className="t-copy">Tell us about yourself and your investment goals. Let's explore opportunities together.</p>
			
			{/*{submitted && (*/}
			{/*	<div className="bg-green-600 p-4 rounded mb-8 text-white">*/}
			{/*		Thank you! We've received your investment inquiry. Our team will contact you within 48 hours with curated opportunities.*/}
			{/*	</div>*/}
			{/*)}*/}
			
			<FormComponent
				input={[
					{ required: true, type: 'text', placeholder: 'What\'s your full name?' },
					{ required: true, type: 'email', placeholder: 'What\'s your email address?' },
					{ required: true, type: 'text', placeholder: 'How about your Company (Organization) Name?' },
					{ required: true, type: 'datalist', placeholder: 'Please enter your required funding amount?', options: ['$10,000 - $50,000', '$50,000 - $100,000', '$100,000 - $500,000', '$500,000+'] },
					{ required: true, type: 'datalist', placeholder: 'Please enter your Industry', options: ['Agriculture', 'Finance', 'Fashion', 'Technology', 'Real Estate', 'Product Development'] },
					{ required: true, type: 'textarea', placeholder: 'What excites you about investing in African ventures?' },
				]}
				submitLabel={'Start Your Investment Journey'}
				icon={<ExportIcon weight={'bold'}/>}
			/>
			
		</div>
	</section>
</>
);
}