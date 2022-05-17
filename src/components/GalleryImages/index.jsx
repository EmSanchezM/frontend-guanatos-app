import { motion } from 'framer-motion';

//import { GalleryData } from './GalleryData'

const GalleryImages = ({ setSelectedImg, allMedia }) => {
	return (
		<section className='gallery__grid'>
			{allMedia.map(image => (
				<motion.div
					key={image._id}
					className='cursor-pointer'
					layout
					whileHover={{ opacity: 1 }}
					onClick={() => setSelectedImg(image.file.url)}
				>
					<motion.img
						src={image.file.url}
						alt='uploaded pic'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1 }}
					/>
				</motion.div>
			))}
		</section>
	);
};

export default GalleryImages;
