import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import VariantDisplay from './VariantDisplay';

const VariantItem = ({
	media,
	fullWidth,
	setSelectedImg,
	setSelectedVideo
}) => {
	const handleChangeMedia = media => {
		const { url, mimetype } = media.file;

		if (mimetype.includes('image')) {
			setSelectedImg(url);
		} else {
			setSelectedVideo(url);
		}
	};

	return (
		<motion.article
			key={media._id}
			className={
				fullWidth
					? 'md:col-span-2 lg:col-span-2 w-full cursor-pointer'
					: 'w-full cursor-pointer'
			}
			layout
			whileHover={{ opacity: 1 }}
			onClick={() => handleChangeMedia(media)}
		>
			<VariantDisplay media={media} />
		</motion.article>
	);
};
export default VariantItem;

VariantItem.propTypes = {
	media: PropTypes.object.isRequired,
	fullWidth: PropTypes.bool,
	setSelectedVideo: PropTypes.func.isRequired,
	setSelectedImg: PropTypes.func.isRequired
};
