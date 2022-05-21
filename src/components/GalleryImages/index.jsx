import GalleryItem from './GalleryItem';

const GalleryImages = ({ setSelectedImg, multimedia }) => {
	if (!multimedia.length) return <p>No hay data</p>;

	return (
		<section className='gallery__grid'>
			{multimedia.map(media => (
				<GalleryItem
					key={media._id}
					setSelectedImg={setSelectedImg}
					{...media}
				/>
			))}
		</section>
	);
};

export default GalleryImages;
