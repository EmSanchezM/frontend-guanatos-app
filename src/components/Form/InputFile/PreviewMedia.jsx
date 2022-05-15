const PreviewMedia = ({ extension, src }) => {
	return (
		<>
			{extension === 'video' ? (
				<video controls autoPlay src={src} className='my-4' />
			) : (
				<img
					src={src}
					alt='preview'
					className='h-72 w-full object-cover mx-auto my-4'
				/>
			)}
		</>
	);
};

export default PreviewMedia;
