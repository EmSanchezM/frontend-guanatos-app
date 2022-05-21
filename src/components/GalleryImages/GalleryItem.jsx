import { motion } from 'framer-motion';

const GalleryItem = ({ media, setSelectedImg }) => (
	<motion.div
		key={media._id}
		className='cursor-pointer'
		layout
		whileHover={{ opacity: 1 }}
		onClick={() => setSelectedImg(media.file.url)}
	>
		<motion.img
			src={media.file.url}
			alt='uploaded pic'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1 }}
		/>
	</motion.div>
);

export default GalleryItem;
