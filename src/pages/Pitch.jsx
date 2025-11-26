import BreadCrumbs from "../components/BreadCrumbs.jsx";
import FormComponent from "../components/FormComponent.jsx";

import {ExportIcon} from "@phosphor-icons/react";

export default function Pitch() {
	
	return (
		<>
			<section className="hero">
				<div className="hero-content flex flex-col">
					<BreadCrumbs />
					<div className='hero-content-title flex flex-col'>
						<h1 className="h1">You Have an Idea That Could Change Africa. Let's Build It Together.</h1>
						<p className="t-copy">
							Great founders don't need just capital—they need partners who get it. Partners who understand the African market,
							have walked this road before, and will stand beside you through every challenge. At Sanctum, we invest in founders with vision.
							We fund ideas that solve real problems. And we're committed to seeing you scale from startup to industry leader.
						</p>
					</div>
				</div>
			</section>
			
			<section className="why-pitch">
				<h2 className="h2">Why Pitch to Sanctum?</h2>
				
				<div>
					<div>
						<h3 className="h3">We Get Your Market</h3>
						<p className="t-copy">We're not foreign investors trying to understand Africa from afar. We live here, work here, and deeply understand the opportunities and challenges you face daily.</p>
					</div>
					
					<div>
						<h3 className="h3">Speed & Focus</h3>
						<p className="t-copy">No endless meetings or red tape. We make decisions quickly. If we believe in your vision, you'll know fast—and we'll move even faster to help you scale.</p>
					</div>
					
					<div>
						<h3 className="h3">More Than Money</h3>
						<p className="t-copy">Capital is just the beginning. You gain access to our network of operators, mentors, customers, and future investors. We roll up our sleeves and help you win.</p>
					</div>
					
					<div>
						<h3 className="h3">Portfolio Support</h3>
						<p className="t-copy">Our success is tied to yours. We actively help portfolio companies with strategy, hiring, product development, and fundraising for future rounds.</p>
					</div>
				</div>
			</section>
			
			<section className="founder-stories">
				<h2 className="h2">The Sanctum Advantage</h2>
				<p className="t-copy">Founders in our portfolio don't just get funded. They get transformed.</p>
				
				<div>
					<div>
						<h3 className="h3">Strategic Guidance</h3>
						<p className="t-copy">From market positioning to international expansion, our team shares battle-tested strategies that have worked across sectors and geographies.</p>
					</div>
					
					<div>
						<h3 className="h3">Network Access</h3>
						<p className="t-copy">Introductions to customers, talent, distribution partners, and investors. Our network becomes your network—instantly.</p>
					</div>
					
					<div>
						<h3 className="h3">Operational Excellence</h3>
						<p className="t-copy">We help you build the systems, processes, and team structure that scale. Because great ideas fail with poor execution. We ensure yours doesn't.</p>
					</div>
				</div>
			</section>
			
			<section className="founder-cta">
				<h2 className="h2">This Could Be the Call That Changes Everything</h2>
				<p className="t-copy">
					African founders with world-changing ideas deserve world-class support. That's what we offer.
					Share your vision. Let's see if we're the right partners to help you build it.
				</p>
			</section>
			
			<section className="pitch-form">
				<h2 className="h2">Tell Us Your Story</h2>
				<p className="t-copy">We read every submission. Be clear, be honest, be compelling.</p>
				
				
				<FormComponent
					input={[
						{ required: true, type: 'text', placeholder: 'What\'s your Company Name?' },
						{ required: true, type: 'text', placeholder: 'How about your name?' },
						{ required: true, type: 'email', placeholder: 'What\'s your email address?' },
						{ required: true, type: 'datalist', placeholder: 'Please enter your Industry', options: ['Agriculture', 'Finance', 'Fashion', 'Technology', 'Real Estate', 'Product Development'] },
						{ required: true, type: 'textarea', placeholder: 'What problem are you solving? How is your solution different? Why are you the right team to build this?' },
						{ required: true, type: 'datalist', placeholder: 'Please enter your required funding amount?', options: ['$10,000 - $50,000', '$50,000 - $100,000', '$100,000 - $500,000', '$500,000+'] },
						{ required: false, type: 'url', placeholder: 'Now enter a link to your website or demo' },
					]}
					submitLabel={'Submit your pitch'}
					icon={<ExportIcon weight={'bold'}/>}
				/>
				
			</section>
		</>
	);
}