import BreadCrumbs from "../components/BreadCrumbs.jsx";
import {ExportIcon} from "@phosphor-icons/react";
import FormComponent from "../components/FormComponent.jsx";

export default function Invest() {
	
	
	return (
		<>
			<section className="hero flex flex-col">
				<div className="hero-content flex flex-col justify-start items-start">
					<BreadCrumbs />
					<div className={'hero-content-title flex flex-col'}>
						<h1 className="h2">Africa is rising: Be a part of the story.</h1>
						<p className="t-copy">
							Across the continent, entrepreneurs are solving real problems. Building companies that don't just make money, they transform communities.
							As an investor with Sanctum, you're not just funding ventures. You're investing in Africa's future. You're backing builders who understand
							the market intimately and are positioned to lead global industries from this continent.
						</p>
					</div>
				</div>
	
				<div className="investment-criteria flex flex-col justify-start items-start">
					<div className={'investment-criteria-title flex flex-col'}>
						<h2 className="h4">Investment Criteria</h2>
						<p className="t-copy">We invest strategically. Here's what we're looking for.</p>
					</div>
					
					<div className="investment-criteria-grid grid grid-cols-3">
						<div className="content-card sector-card flex flex-col justify-start items-start col-span-1">
							<h3 className="t-highlights">Check Size</h3>
							<p className="t-copy">$50K - $2M per round</p>
						</div>
						<div className="content-card sector-card flex flex-col justify-start items-start col-span-1">
							<h3 className="t-highlights">Stage</h3>
							<p className="t-copy">Seed through Series B</p>
						</div>
						<div className="content-card sector-card flex flex-col justify-start items-start col-span-1">
							<h3 className="t-highlights">Geography</h3>
							<p className="t-copy">African founders or pan-African focus</p>
						</div>
					</div>
				</div>
				
				<div className="investment-look flex flex-col justify-start items-start">
					<h3 className="h4">What We Look For</h3>
	                
	                <div className="grid grid-cols-2">
	                    <div className="content-card sector-card flex flex-col justify-start items-start col-span-1">
                            <h3 className="t-highlights">Exceptional Returns</h3>
	                        <p className="t-copy">Early-stage ventures are among the highest-growth opportunities globally. Partner with us to access deal flow that institutional investors fight for.</p>
	                    </div>
	                    
	                    <div className="content-card sector-card flex flex-col justify-start items-start col-span-1">
                            <h3 className="t-highlights">Curated Deal Flow</h3>
	                        <p className="t-copy">We don't throw everything at you. Every venture in our portfolio has been rigorously vetted by our team of experienced operators and investors.</p>
	                    </div>
	
	                    <div className="content-card sector-card flex flex-col justify-start items-start col-span-1">
                            <h3 className="t-highlights">Local Expertise</h3>
	                        <p className="t-copy">We understand African markets deeply. Our network, insights, and relationships give your portfolio companies an unfair advantage.</p>
	                    </div>
	
	                    <div className="content-card sector-card flex flex-col justify-start items-start col-span-1">
                            <h3 className="t-highlights">Active Support</h3>
	                        <p className="t-copy">We're not passive investors. We actively help portfolio companies scale, connect them to talent, customers, and future capital rounds.</p>
	                    </div>
	                </div>
	            </div>
				
				<div className="investment-quote flex flex-col">
					<p className="h2">
						The companies we invest in today aren't just capturing African markets, they're becoming the next global giants.
						Early investors in Sanctum portfolio companies aren't betting on Africa's potential. They're banking on its inevitability.
					</p>
				</div>
				
	            <div className="investment-impact flex flex-col">
	                <h2 className="h4">Your Investment Creates Ripples</h2>
	                
	                <div className="investment-impact-grid grid grid-cols-3">
		                <div className="content-card sector-card flex flex-col justify-start items-start col-span-1">
	                        <h3 className="t-highlights">1. Economic Growth</h3>
			                <p className="t-copy">Every dollar you invest creates jobs, builds infrastructure, and strengthens local economies across Africa.</p>
		                </div>
		                
		                <div className="content-card sector-card flex flex-col justify-start items-start col-span-1">
			                <h3 className="t-highlights">2. Community Impact</h3>
			                <p className="t-copy">Our ventures address real problems: healthcare access, financial inclusion, agricultural productivity, education quality. Your investment matters beyond ROI.</p>
		                </div>
		                
		                <div className="content-card sector-card flex flex-col justify-start items-start col-span-1">
			                <h3 className="t-highlights">3. Global Influence</h3>
			                <p className="t-copy">Be part of reshaping global industries. African founders aren't following trends—they're setting them. You'll be invested in the future.</p>
		                </div>
					</div>
				</div>
			
				<div className="investment-form flex flex-col justify-center items-center">
					<div className={'investment-form-title flex flex-col justify-center items-center'}>
						<h2 className="h4">Ready to Invest in Africa's Future?</h2>
						<p className="t-copy">Tell us about yourself and your investment goals. Let's explore opportunities together.</p>
					</div>
					
					<FormComponent
						input={[
							{ required: true, type: 'text', name: 'name', placeholder: 'What\'s your full name?' },
							{ required: true, type: 'email', name: 'email', placeholder: 'What\'s your email address?' },
							{ required: true, type: 'text', name: 'company', placeholder: 'How about your Company (Organization) Name?' },
							{ required: true, type: 'select', name: 'funding_amount', placeholder: 'Please select your required funding amount?', options: ['$10,000 - $50,000', '$50,000 - $100,000', '$100,000 - $500,000', '$500,000+'] },
							{ required: true, type: 'select', name: 'industry', placeholder: 'Please select your Industry', options: ['Agriculture', 'Finance', 'Fashion', 'Technology', 'Real Estate', 'Product Development'] },
							{ required: true, type: 'textarea', name: 'investment_why', placeholder: 'What excites you about investing in African ventures?' },
						]}
						formKey={"xwpdrgbj"}
						formMessage={'Thank you! We\'ve received your investment inquiry. Our team will contact you within 48 hours with curated opportunities.'}
						submitLabel={'Start Your Investment Journey'}
						icon={<ExportIcon weight={'bold'}/>}
					/>
				</div>
			</section>
		</>
	);
}