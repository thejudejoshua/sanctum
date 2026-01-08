import React from 'react';

import Button from "../components/Button.jsx";
import {ArrowUpRightIcon, BriefcaseIcon, HandWavingIcon, ArchiveIcon} from "@phosphor-icons/react";

import ImageComponent from "../components/ImageComponent.jsx";
import Sectors from "../components/Sectors.jsx";
import Testimonials from "../components/Testimonials.jsx";

import MissionImageOne from '../assets/images/mission-1.webp';
import MissionImageTwo from '../assets/images/mission-2.webp';
import FounderImage from '../assets/images/founder.webp';
import Quote from '../assets/images/quote.svg?react';
import ScrollingText from "../components/ScrollingText.jsx";


export default function Home() {
	return (
		<>
			<section className="hero flex flex-row justify-between items-end">
				<div className="hero-content flex flex-col justify-start items-start">
					<p className="t-highlights">Where Vision meets Venture.</p>
					<h1 className="h1">Empowering African enterprises to lead, scale, and shape the continent's future.</h1>
				</div>
				<Button label={'Join Our Mission'} direction={'contact'} hierarchy={'primary'}>
					<ArrowUpRightIcon weight={'bold'}/>
				</Button>
			</section>
			
			<ScrollingText/>
			
			<section className='mission flex flex-col items-start justify-start'>
				<div className="title flex flex-col items-start justify-start">
					<p className='t-highlights'>Who we are</p>
					<div className='title-main flex flex-col items-start justify-start'>
						<h3 className='h3'>
							SANCTUM GROUP LTD. is a dynamic African investment and brand development company, structured as a mother organization with subsidiaries spanning finance, technology, real estate, product development, and the creative economy.
						</h3>
						<h3 className='h3'>
							We are more than investors; we are catalysts of growth. We function as the bridge between visionaries and opportunities, connecting businesses and creatives with the resources, partnerships, and strategies they need to thrive.
						</h3>
					</div>
				</div>
				<div className="content grid grid-cols-3 justify-between items-start">
					<div className="col-span-1">
						<ImageComponent src={MissionImageOne} width="auto" alt="mission" />
					</div>
					
					<div className="content-card flex flex-col col-span-1 justify-between items-start">
						<div className='content-card-title'>
							<p className='t-highlights'>
								Our Vision
							</p>
						</div>
						<div className='content-card-body'>
							<p className='h6'>
								To become Africaʼs leading catalyst for sustainable growth by building, funding, and scaling companies and creative ventures that redefine industries and transform communities.
							</p>
						</div>
					</div>

					<div className="col-span-1">
						<ImageComponent src={MissionImageTwo} width="auto" alt="mission" />
					</div>
				</div>
			</section>
			
			<section className='sectors flex flex-col items-center justify-start'>
				<div className="title flex flex-col items-center justify-start">
					<p className='t-highlights'>Our Ecosystem of Ventures</p>
					<div className='title-main flex flex-col items-start justify-start'>
						<h3 className='h3 text-center'>
							90-95% of our investments fall into these categories.
						</h3>
					</div>
				</div>
				<div className="content sectors-list grid justify-start items-start">
					<Sectors/>
				</div>
				<div className="content grid grid-cols-5 justify-between items-start">
					<div className="col-span-3">
						<ImageComponent src={FounderImage} width="auto" alt="mission" />
					</div>
					<div className="content-card flex flex-col col-span-2 justify-between items-start">
						<Quote/>
						<div className='content-card-body flex flex-col justify-start items-start'>
							<p className='h6'>
								Africa's future generation of entrepreneurs will not only participate in but also shape the global economy. We support the founders as they develop solutions at the African scale, with African understanding, for global effect. Our continent's future belongs to those who are brave enough to construct it.
							</p>
							<p className='t-copy user'>
								<span>Mashood Oyekunle Akamo</span>
								<span>Founder, Sanctum Group</span>
							</p>
						</div>
					</div>
				</div>
			</section>
			
			<section className='commitment flex flex-col items-start justify-start'>
				<div className="title flex flex-col items-start justify-start">
					<p className='t-highlights'>Our Key Commitment</p>
					<div className='title-main flex flex-col items-start justify-start'>
						<h3 className='h3'>
							At SANCTUM, our commitment goes beyond investment. it’s about empowering visionaries and shaping lasting impact across Africa.
						</h3>
						<h3 className='h3'>
							We stand on five core principles: <span className='notice'>empowerment</span>, <span className='notice'>integrity</span>, <span className='notice'>innovation</span>, <span className='notice'>collaboration</span>, and <span className='notice'>excellence</span>. These guide how we build, partner, and create value that outlives capital.
						</h3>
						<h3 className='h3'>
							Every venture we support is a promise: to uphold trust, spark transformation, and create pathways where Africa’s boldest visions become sustainable enterprises.
						</h3>
					</div>
				</div>
				<div className="content grid grid-cols-3 justify-between items-start">
					<div className="content-card flex flex-col col-span-1 justify-between items-start">
						<div className='content-card-title'>
							<p className='t-highlights'>
								Pitch Us
							</p>
						</div>
						<div className='content-card-body'>
							<p className='h6'>
								Here’s what we are looking for when it comes to making an investment.
							</p>
							<Button label={'Learn More'} direction={'pitch'} hierarchy={'secondary'}>
								<ArchiveIcon weight={'regular'}/>
							</Button>
						</div>
					</div>
					
					
					<div className="content-card flex flex-col col-span-1 justify-between items-start">
						<div className='content-card-title'>
							<p className='t-highlights'>
								Our Portfolio
							</p>
						</div>
						<div className='content-card-body'>
							<p className='h6'>
								These incredible founders are making waves across key Sanctum® verticals.
							</p>
							<Button label={'View All'} direction={'portfolio'} hierarchy={'secondary'}>
								<BriefcaseIcon weight={'regular'}/>
							</Button>
						</div>
					</div>
					
					
					<div className="content-card flex flex-col col-span-1 justify-between items-start">
						<div className='content-card-title'>
							<p className='t-highlights'>
								Meet the team
							</p>
						</div>
						<div className='content-card-body'>
							<p className='h6'>
								Meet the team of experts behind the scenes at Sanctum® groups.
							</p>
							<Button label={'Say Hello'} direction={'team'} hierarchy={'secondary'}>
								<HandWavingIcon weight={'regular'}/>
							</Button>
						</div>
					</div>
				</div>
			</section>
			
			<section className='testimonials flex flex-col items-start justify-start'>
				<div className="title flex flex-col items-start justify-start">
					<p className='t-highlights'>What Our Partners say</p>
					<div className='title-main flex flex-col items-start justify-start'>
						<h3 className='h3'>
							The measure of our work lies in the lives and ventures we help transform. From startups finding structure to investors unlocking new markets, our partners share a common story: growth powered by trust and collaboration.
						</h3>
					</div>
				</div>
				<div className="content flex flex-row justify-between items-start">
					<Testimonials/>
				</div>
			</section>
		</>
	);
}
