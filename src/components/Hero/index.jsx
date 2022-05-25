import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../Icons';
import HeroItem from './HeroItem';
import { SlideData } from './SliderData';

const HeroSection = ({ slides, showModal }) => {
	const [current, setCurrent] = useState(0);
	const length = SlideData.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(SlideData) || SlideData.length <= 0) {
		return null;
	}

	if (!SlideData.length) return <p>No hay data</p>;

	return (
		<AnimatePresence>
			{!showModal && (
				<>
					<ArrowLeftIcon className='hero__leftIcon' onClick={prevSlide} />
					<ArrowRightIcon className='hero__rightIcon' onClick={nextSlide} />
				</>
			)}

			{SlideData.map((slide, index) => (
				<HeroItem
					key={slide._id}
					slide={slide}
					index={index}
					current={current}
				/>
			))}
		</AnimatePresence>
	);
};

export default HeroSection;

HeroSection.propTypes = {
	showModal: PropTypes.bool.isRequired,
	slides: PropTypes.array.isRequired
};
