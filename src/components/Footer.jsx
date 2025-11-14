import Logo from "../assets/images/logo-white.svg?react";
import BackgroundSVG from '../assets/images/elements-of-progress.svg?react';
import {ExportIcon, InstagramLogoIcon, LinkedinLogoIcon, XLogoIcon, YoutubeLogoIcon} from '@phosphor-icons/react';

import FormComponent from "./FormComponent.jsx";

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
					<FormComponent input={['email']} submitLabel={'submit'} icon={<ExportIcon weight={'bold'}/>}/>
				</div>
			</section>
			<section className="footer flex flex-col justify-center items-center">
				<div className="footer-info">
					<div className="footer-info-logo flex justify-start items-center">
						<Logo/>
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