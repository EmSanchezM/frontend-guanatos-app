import GalleryItem from './GalleryItem';

const GalleryImages = ({ setSelectedImg, gallery }) => {
	if (!gallery.length) return <p>There are not data</p>;

	return (
		<section className='gallery__grid'>
			{gallery.map(media => (
				<GalleryItem
					key={media._id}
					setSelectedImg={setSelectedImg}
					media={media}
				/>
			))}
		</section>
	);
};

export default GalleryImages;
