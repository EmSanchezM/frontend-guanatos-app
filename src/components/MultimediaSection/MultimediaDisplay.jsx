import { motion } from 'framer-motion';
import { PlayIcon } from '../Icons';

const MultimediaDisplay = ({ media }) => {
	const { url, container, mimetype } = media?.file;

	if (!mimetype.includes('image'))
		return (
			<div className='flex justify-center items-center cursor-pointer'>
				<img
					src={logo}
					alt={`section`}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 }}
					className='w-full h-96 shadow-lg'
				/>
				<span className='absolute'>
					<PlayIcon className='w-24 h-24 text-white' />
				</span>
			</div>
		);

	return (
		<motion.img
			src={url}
			alt={`section-${container}`}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1 }}
		/>
	);
};

export default MultimediaDisplay;
