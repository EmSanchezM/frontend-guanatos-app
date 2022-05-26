import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import MultimediaDisplay from './MultimediaDisplay';

const MultimediaItem = ({
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
			<MultimediaDisplay media={media} />
		</motion.article>
	);
};
export default MultimediaItem;

MultimediaItem.propTypes = {
	media: PropTypes.object.isRequired,
	fullWidth: PropTypes.bool,
	setSelectedVideo: PropTypes.func.isRequired,
	setSelectedImg: PropTypes.func.isRequired
};
