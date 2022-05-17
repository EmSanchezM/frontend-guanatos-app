import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import logo from '../../assets/logo/logo.png';
import { PlayIcon } from '../../components/Icons';

const VariantItem = ({
	media,
	fullWidth,
	setSelectedImg,
	setSelectedVideo
}) => {
	return (
		<motion.article
			key={media._id}
			className={
				fullWidth
					? 'lg:col-span-2 md:cols-span-2 sm:col-span-2 cursor-pointer'
					: 'cursor-pointer'
			}
			layout
			whileHover={{ opacity: 1 }}
			onClick={
				media.file.mimetype.includes('image')
					? () => setSelectedImg(media.file.url)
					: () => setSelectedVideo(media.file.url)
			}
		>
			{media.file.mimetype.includes('image') ? (
				<motion.img
					src={media.file.url}
					alt={`section-${media.file.container}`}
					className='w-full'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 }}
				/>
			) : (
				<div className='flex justify-center items-center cursor-pointer'>
					<img
						src={logo}
						alt={`section`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1 }}
						className='w-full h-96'
					/>
					<span className='absolute'>
						<PlayIcon className='w-24 h-24 text-white' />
					</span>
				</div>
			)}
		</motion.article>
	);
};
export default VariantItem;

VariantItem.propTypes = {
	section: PropTypes.string.isRequired,
	media: PropTypes.object.isRequired,
	fullWidth: PropTypes.bool,
	setSelectedVideo: PropTypes.func.isRequired,
	setSelectedImg: PropTypes.func.isRequired
};
