import Logo from "../assets/images/logo-white.svg?react";
import BackgroundSVG from '../assets/images/elements-of-progress.svg?react';
import {
	ArrowUpRightIcon,
	ExportIcon,
	InstagramLogoIcon,
	LinkedinLogoIcon,
	XLogoIcon,
	YoutubeLogoIcon
} from '@phosphor-icons/react';

import FormComponent from "./FormComponent.jsx";
import Button from "./Button.jsx";

export default function Footer(){
	return(
		<>
			<section className="newsletter overflow-hidden flex justify-center items-center">
				<div className="newsletter-background-element flex justify-center items-center z-0">
					<BackgroundSVG/>
				</div>
				<div className="newsletter-data flex flex-col justify-start items-center z-10">
					<div className="title flex flex-col justify-start items-center">
						<p className="t-highlights text-center">Subscribe to our Newsletter</p>
						<p className="h3 text-center">Get updates on new funds launched, fundraising insights, events,
							important program dates and more.</p>
					</div>
					<FormComponent
						input={[
							{ required: true, type: 'email', placeholder: 'Enter your email here...' },
						]}
						submitLabel={'submit'}
						icon={<ExportIcon weight={'bold'}/>}
					/>
				</div>
			</section>
			<section className="footer flex flex-col justify-start items-end">
				<div className="footer-info flex flex-row justify-between w-full items-end">
					<div className="footer-info-logo flex justify-start items-center">
						<Logo/>
					</div>
					<div className="footer-links flex flex-col justify-start items-start">
						<p className="t-highlights">Useful Links</p>
						<div className="footer-links-list-holder flex justify-start items-start">
							<div className="links-list flex flex-col justify-start items-start">
								<Button className='footer-link' direction={'home'} hierarchy={'tertiary'}>Home</Button>
								<Button className='footer-link' direction={'about'} hierarchy={'tertiary'}>About</Button>
								<Button className='footer-link' direction={'contact'} hierarchy={'tertiary'}>Contact</Button>
							</div>
							<div className="links-list flex flex-col justify-start items-start">
								<Button className='footer-link' direction={'portfolio'} hierarchy={'tertiary'}>Portfolio</Button>
								<Button className='footer-link' direction={'team'} hierarchy={'tertiary'}>Reports<ArrowUpRightIcon/></Button>
								<Button className='footer-link' direction={'team'} hierarchy={'tertiary'}>Team</Button>
							</div>
							<div className="links-list flex flex-col justify-start items-start">
								<Button className='footer-link' direction={'invest'} hierarchy={'tertiary'}>Resources<ArrowUpRightIcon/></Button>
								<Button className='footer-link' direction={'invest'} hierarchy={'tertiary'}>Invest</Button>
								<Button className='footer-link' direction={'pitch'} hierarchy={'tertiary'}>Pitch</Button>
							</div>
							<div className="links-list flex flex-col justify-start items-start">
								<Button className='footer-link' direction={'privacy-policy'} hierarchy={'tertiary'}>Privacy Policy</Button>
								<Button className='footer-link' direction={'terms-of-use'} hierarchy={'tertiary'}>Terms of Use</Button>
								<Button className='footer-link' direction={'cookie-policy'} hierarchy={'tertiary'}>Cookie Policy</Button>
							</div>
						</div>
					</div>
				</div>
				<div className="copyright w-full flex justify-between items-start">
					<div className="copyright-text">
						<p className="t-highlights">&copy; Copyright 2025 SANCTUM. All rights reserved</p>
					</div>
					<div className="socials flex flex-row justify-start items-center gap-6">
						<LinkedinLogoIcon/>
						<InstagramLogoIcon/>
						<YoutubeLogoIcon/>
						<XLogoIcon/>
					</div>
				</div>
			</section>
		</>
	)
}