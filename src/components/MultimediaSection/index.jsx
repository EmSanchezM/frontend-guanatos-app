import PropTypes from 'prop-types';
import VariantItem from './MultimediaItem';

const MultimediaSection = ({ setSelectedVideo, setSelectedImg, gallery }) => {
	if (!gallery.length) return <p>There are not data</p>;

	return (
		<section className='grid grid-cols-1 gap-2 md:grid-cols-2 mb-2 mx-2'>
			{gallery.map((media, i) => {
				return (
					<VariantItem
						key={media._id}
						media={media}
						setSelectedImg={setSelectedImg}
						setSelectedVideo={setSelectedVideo}
						fullWidth={i === 2 && true}
					/>
				);
			})}
		</section>
	);
};

export default MultimediaSection;

MultimediaSection.propTypes = {
	setSelectedVideo: PropTypes.func.isRequired,
	setSelectedImg: PropTypes.func.isRequired
};
