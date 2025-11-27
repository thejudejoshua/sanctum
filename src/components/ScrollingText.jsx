import React from "react";
import Divider from "../assets/images/divider.svg?react";

const scrollingText = ['Sanctum Group', 'Multi-Sector Investor', 'Technology & Product Innovation', 'Real Estate Development', 'Sustainable Agriculture']


export default function ScrollingText() {
	return (
		<section className='scrollingText'>
			<div className="scrollingText-holder flex flex-row items-center">
				{[...scrollingText, ...scrollingText].map((text, index) => (
					<div className="scrollingText-holder-item flex flex-row items-center" key={index}>
						<p className="t-highlights">{text}</p>
						<Divider/>
					</div>
				))}
			</div>
		</section>
	);
}
