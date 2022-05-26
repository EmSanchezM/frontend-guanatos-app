import PropTypes from 'prop-types';
import MultimediaItem from './MultimediaItem';

const MultimediaSection = ({
	setSelectedVideo,
	setSelectedImg,
	multimedia
}) => {
	if (!multimedia.length) return <p>There are not data</p>;

	return (
		<section className='grid grid-cols-1 gap-2 md:grid-cols-2 mb-2 mx-2'>
			{multimedia.map((media, i) => {
				return (
					<MultimediaItem
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
