import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../Icons';
import HeroItem from './HeroItem';

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

	if (!slides.length) return <p>No hay data</p>;

	return (
		<AnimatePresence>
			{!showModal && (
				<>
					<ArrowLeftIcon className='hero__leftIcon' onClick={prevSlide} />
					<ArrowRightIcon className='hero__rightIcon' onClick={nextSlide} />
				</>
			)}

			{slides.map((slide, index) => (
				<HeroItem slide={slide} index={index} />
			))}
		</AnimatePresence>
	);
};

export default HeroSection;

HeroSection.propTypes = {
	showModal: PropTypes.bool.isRequired,
	slides: PropTypes.array.isRequired
};
