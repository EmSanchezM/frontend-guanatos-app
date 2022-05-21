const HeroDisplay = ({ slide }) => {
	const { url } = slide.file;

	if (mimetype.includes('image'))
		return (
			<motion.img
				src={url}
				alt='restaurant'
				className='w-full bg-cover bg-center h-96 object-fill animate__animated animate__fadeIn'
				initial={{ x: 300, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ x: -300, opacity: 0 }}
			/>
		);

	return (
		<motion.video
			controls
			autoPlay
			src={url}
			className='backdrop__video'
			initial={{ x: 300, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: -300, opacity: 0 }}
		/>
	);
};

export default HeroDisplay;
