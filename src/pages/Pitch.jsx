import BreadCrumbs from "../components/BreadCrumbs.jsx";
import FormComponent from "../components/FormComponent.jsx";

import {ExportIcon} from "@phosphor-icons/react";

export default function Pitch() {
	
	return (
		<>
			<section className="hero flex flex-col justify-start items-start">
				<div className="hero-content flex flex-col">
					<BreadCrumbs />
					<div className='hero-content-title flex flex-col'>
						<h1 className="h2">You have an idea that could change Africa.</h1>
						<p className="t-copy">
							Great founders don't need just capital—they need partners who get it. Partners who understand the African market,
							have walked this road before, and will stand beside you through every challenge. At Sanctum, we invest in founders with vision.
							We fund ideas that solve real problems. And we're committed to seeing you scale from startup to industry leader.
						</p>
					</div>
				</div>
			
			<div className="pitch-why flex flex-col justify-start items-start">
				<h2 className="h4">Why Pitch to Sanctum?</h2>
				<div className={'pitch-grid grid grid-cols-2'}>
					<div className={'content-card sector-card flex flex-col justify-start items-start'}>
						<h3 className="t-highlights">We Get Your Market</h3>
						<p className="t-copy">We're not foreign investors trying to understand Africa from afar. We live here, work here, and deeply understand the opportunities and challenges you face daily.</p>
					</div>
					
					<div className={'content-card sector-card flex flex-col justify-start items-start'}>
						<h3 className="t-highlights">Speed & Focus</h3>
						<p className="t-copy">No endless meetings or red tape. We make decisions quickly. If we believe in your vision, you'll know fast—and we'll move even faster to help you scale.</p>
					</div>
					
					<div className={'content-card sector-card flex flex-col justify-start items-start'}>
						<h3 className="t-highlights">More Than Money</h3>
						<p className="t-copy">Capital is just the beginning. You gain access to our network of operators, mentors, customers, and future investors. We roll up our sleeves and help you win.</p>
					</div>
					
					<div className={'content-card sector-card flex flex-col justify-start items-start'}>
						<h3 className="t-highlights">Portfolio Support</h3>
						<p className="t-copy">Our success is tied to yours. We actively help portfolio companies with strategy, hiring, product development, and fundraising for future rounds.</p>
					</div>
				</div>
			</div>
			
			<div className="pitch-founder-stories flex flex-col justify-start items-start">
				<div className={'pitch-founder-stories-title flex flex-col'}>
					<h2 className="h4">The Sanctum Advantage</h2>
					<p className="t-copy">Founders in our portfolio don't just get funded. They get transformed.</p>
				</div>
				
				<div className={'pitch-founder-stories-grid grid grid-cols-3'}>
					<div className={'content-card sector-card flex flex-col'}>
						<h3 className="t-highlights">Strategic Guidance</h3>
						<p className="t-copy">From market positioning to international expansion, our team shares battle-tested strategies that have worked across sectors and geographies.</p>
					</div>
					
					<div className={'content-card sector-card flex flex-col'}>
						<h3 className="t-highlights">Network Access</h3>
						<p className="t-copy">Introductions to customers, talent, distribution partners, and investors. Our network becomes your network, instantly.</p>
					</div>
					
					<div className={'content-card sector-card flex flex-col'}>
						<h3 className="t-highlights">Operational Excellence</h3>
						<p className="t-copy">We help you build the systems, processes, and team structure that scale. Because great ideas fail with poor execution. We ensure yours doesn't.</p>
					</div>
				</div>
			</div>
			
			<div className="investment-quote flex flex-col">
				<p className="h2">
					African founders with world-changing ideas deserve world-class support. That's what we offer.
					Share your vision. Let's see if we're the right partners to help you build it.
				</p>
			</div>
			
			<div className="pitch-form flex flex-col justify-center items-center">
				<div className={'pitch-form-title flex flex-col justify-center items-center'}>
					<h2 className="h4">Tell Us Your Story</h2>
					<p className="t-copy">We read every submission. Be clear, be honest, be compelling.</p>
				</div>
				
				<FormComponent
					input={[
						{ required: true, name: 'company', type: 'text', placeholder: 'What\'s your Company Name?' },
						{ required: true, name: 'name', type: 'text', placeholder: 'How about your name?' },
						{ required: true, name: 'email', type: 'email', placeholder: 'What\'s your email address?' },
						{ required: true, name: 'industry', type: 'datalist', list:'industry', placeholder: 'Please enter your Industry', options: ['Agriculture', 'Finance', 'Fashion', 'Technology', 'Real Estate', 'Product Development'] },
						{ required: true, name: 'solution', type: 'textarea', placeholder: 'What problem are you solving? How is your solution different? Why are you the right team to build this?' },
						{ required: true, name: 'funding', type: 'datalist', list:'funding', placeholder: 'Please enter your required funding amount?', options: ['$10,000 - $50,000', '$50,000 - $100,000', '$100,000 - $500,000', '$500,000+'] },
						{ required: false, name: 'website', type: 'url', placeholder: 'Now enter a link to your website or demo' },
					]}
					formKey={"mzzlkkgy"}
					formMessage={'Thank you! We\'ve received your pitch proposal. Our team will contact you within 48 hours with curated opportunities.'}
					submitLabel={'Submit your pitch'}
					icon={<ExportIcon weight={'bold'}/>}
				/>
				
			</div>
			
			</section>
			
		</>
	);
}