import { motion } from 'framer-motion';

const Image = ({ setSelectedImg, selectedImg }) => {
	const handleClick = e => {
		if (e.target.classList.contains('backdrop')) {
			setSelectedImg(null);
		}
	};

	return (
		<motion.div
			onClick={handleClick}
			className='backdrop'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<motion.img
				className='backdrop__img'
				initial={{ y: '-100vh' }}
				animate={{ y: 0 }}
				src={selectedImg}
				alt='image-gallery-guanatos'
			/>
		</motion.div>
	);
};

export default Image;
