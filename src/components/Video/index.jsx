import { motion } from 'framer-motion';

const Video = ({ selectedVideo, setSelectedVideo }) => {
	const handleClick = e => {
		if (e.target.classList.contains('backdrop')) {
			setSelectedVideo(null);
		}
	};
	return (
		<motion.div
			className='backdrop'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			onClick={handleClick}
		>
			<motion.video
				controls
				autoPlay
				src={selectedVideo}
				className='backdrop__video'
				initial={{ y: '-100vh' }}
				animate={{ y: 0 }}
			/>
		</motion.div>
	);
};

export default Video;
