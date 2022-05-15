import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';
/*ICONS*/
import { ArrowLeftIcon, ArrowRightIcon } from '../Icons';

const HeroSection = ({ slides, showModal }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<AnimatePresence>
			{!showModal && (
				<>
					<ArrowLeftIcon className='hero__leftIcon' onClick={prevSlide} />
					<ArrowRightIcon className='hero__rightIcon' onClick={nextSlide} />
				</>
			)}

			{slides.map((slide, index) => {
				return (
					<div key={index}>
						{index === current && (
							<section className='hero__section'>
								<div>
									{slide.file.mimetype.includes('image') ? (
										<motion.img
											src={slide.file.url}
											alt='restaurant'
											className='w-full bg-cover bg-center h-96 object-fill animate__animated animate__fadeIn'
											initial={{ x: 300, opacity: 0 }}
											animate={{ x: 0, opacity: 1 }}
											exit={{ x: -300, opacity: 0 }}
										/>
									) : (
										<motion.video
											controls
											autoPlay
											src={slide.file.url}
											className='backdrop__video'
											initial={{ x: 300, opacity: 0 }}
											animate={{ x: 0, opacity: 1 }}
											exit={{ x: -300, opacity: 0 }}
										/>
									)}
								</div>
								<div className='mt-4 md:px-2 lg:w-1/3'>
									<span className='hero__shortMessage'>{slide.badge}</span>
									<h1 className='hero__title'>{slide.title}</h1>
									<p className='hero__paragraph'>{slide.description}</p>
								</div>
							</section>
						)}
					</div>
				);
			})}
		</AnimatePresence>
	);
};

export default HeroSection;

HeroSection.propTypes = {
	showModal: PropTypes.bool.isRequired,
	slides: PropTypes.array.isRequired
};
