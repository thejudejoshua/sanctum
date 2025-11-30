import Quote from "../assets/images/quote.svg?react";

import ImageComponent from "./ImageComponent.jsx";

import { getTestimonials } from "../hooks/getTestimonials.jsx";

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

export default function Testimonials({ id = null }) {
	const { data, loading, error } = getTestimonials(id);
	
	if (loading) return (
		<Swiper
			modules={[FreeMode]}
			freeMode={true}
			spaceBetween={30}
			slidesPerView={2.2}
			grabCursor={true}
			className="testimonials-swiper no-show"
		>
			<p className={'t-copy t-pending'}>Loading testimonials...</p>
		</Swiper>
	);
	
	if (error && !loading) return (
		<Swiper
			modules={[FreeMode]}
			freeMode={true}
			spaceBetween={30}
			slidesPerView={2.2}
			grabCursor={true}
			className="testimonials-swiper no-show"
		>
			<p className={'t-copy t-error'}>Error: {error}</p>
		</Swiper>
	);
	
	if (id) {
		return (
			data && (
				<div key={data.id} className="content-card quote flex flex-col justify-between items-start">
					<Quote/>
					<div className='content-card-body flex flex-col justify-start items-start'>
						<p className='h6'>
							{data.quote}
						</p>
						<div className={'testifier flex flex-row items-center justify-center'}>
							<div className={'testifier-image'}>
								<ImageComponent src={`${data.image}`} alt={data.author} className=""/>
							</div>
							<p className='t-copy user'>
								<span>{data.author}</span>
								<span className={'t-highlights'}>{data.title}</span>
							</p>
						</div>
					</div>
				</div>
			)
		);
	}
	
	// If fetching all testimonials
	return (
		<>
			<Swiper
				modules={[FreeMode]}
				freeMode={true}
				spaceBetween={30}
				slidesPerView={2.2}
				grabCursor={true}
				className="testimonials-swiper"
			>
				{data.map((testimonial) => (
					<SwiperSlide key={testimonial.id}>
						<div key={testimonial.id} className="content-card quote flex flex-col justify-between items-start">
							<Quote/>
							<div className='content-card-body flex flex-col justify-start items-start'>
								<p className='h6'>
									{testimonial.quote}
								</p>
								<div className={'testifier flex flex-row items-center justify-center'}>
									<div className={'testifier-image'}>
										<ImageComponent src={`${testimonial.image}`} alt={testimonial.author} className=""/>
									</div>
									<p className='t-copy user'>
										<span>{testimonial.author}</span>
										<span className={'t-highlights'}>{testimonial.title}</span>
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}