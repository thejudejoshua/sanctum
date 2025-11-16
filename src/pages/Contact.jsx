import FormComponent from "../components/FormComponent.jsx";
import BreadCrumbs from "../components/BreadCrumbs.jsx";

import {ExportIcon} from "@phosphor-icons/react";

import ImageComponent from "../components/ImageComponent.jsx";
import ContactTestimonialImage from "../assets/images/contact-testimonial.webp";
import Testimonials from "../components/Testimonials.jsx";

export default function Contact() {
	return (
		<>
			<section className="hero flex flex-col justify-start items-start">
				<div className="hero-content flex flex-col justify-start items-start">
					<BreadCrumbs/>
					<h1 className="h1">We’re always open to new partnerships, ventures, and conversations that move
						Africa forward. Whether you’re an investor, founder, or creative mind, SANCTUM® is ready to
						connect.</h1>
				</div>
				
				<div className="content grid grid-cols-5 justify-between items-start">
					<div className="col-span-3">
						<ImageComponent src={ContactTestimonialImage} width="auto" alt="mission" className={'object-left'} />
					</div>
					<Testimonials id={4}/>
				</div>
			
				<div className='contact-info flex flex-row items-start justify-start'>
					<FormComponent
						input={[
							{ required: true, type: 'datalist', placeholder: 'What would you like to talk about?', options: ['Investment Options', 'Pitch an Idea', 'General message'] },
							{ required: true, type: 'text', placeholder: 'What should we call you?' },
							{ required: false, type: 'text', placeholder: 'Do you have a company name?' },
							{ required: true, type: 'email', placeholder: 'How about your email address?' },
							{ required: true, type: 'textarea', placeholder: 'Alright, enter your message here...' }
						]}
						submitLabel={'Send message'}
						icon={<ExportIcon weight={'bold'}/>}
					/>
					
					<div className={'contact-info-data flex flex-col'}>
						<p className={'t-highlights'}>Get in touch</p>
						<div className={'contact-info-data-details flex flex-col'}>
							<div className={'contact-info-data-details-section flex flex-col'}>
								<p className={'t-copy label'}>Email Us:</p>
								<p className={'t-copy content'}>hello@sanctumgroup.africa</p>
							</div>
							<div className={'contact-info-data-details-section flex flex-col'}>
								<p className={'t-copy label'}>Call Us:</p>
								<p className={'t-copy content'}>+234 (0) 801 234 5678</p>
							</div>
							<div className={'contact-info-data-details-section flex flex-col'}>
								<p className={'t-copy label'}>Our Head Office:</p>
								<p className={'t-copy content'}>SANCTUM Group Ltd. Plot 14, Admiralty Way, Lekki Phase 1, Lagos, Nigeria</p>
							</div>
							<div className={'contact-info-data-details-section flex flex-col'}>
								<p className={'t-copy label'}>Our Business Hours:</p>
								<p className={'t-copy content'}>Monday – Friday | 9:00 AM – 5:00 PM (WAT)</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
