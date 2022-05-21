import PropTypes from 'prop-types';
import { variantMedia } from './VariantData';
import VariantItem from './VariantItem';

const VariantSection = ({ setSelectedVideo, setSelectedImg, gallery }) => {
	let variantData = variantMedia.filter(
		media => media.section === 'multimedia'
	);
	let sections = [0, 1, 2];

	//if (!gallery.length) return <p>No hay data</p>;

	return (
		<section className='grid grid-cols-1 gap-2 md:grid-cols-2 mb-2 mx-2'>
			{variantData.map((media, i) => {
				return (
					<VariantItem
						key={media._id}
						media={media}
						setSelectedImg={setSelectedImg}
						setSelectedVideo={setSelectedVideo}
						fullWidth={i === sections[2] && true}
					/>
				);
			})}
		</section>
	);
};

export default VariantSection;

VariantSection.propTypes = {
	setSelectedVideo: PropTypes.func.isRequired,
	setSelectedImg: PropTypes.func.isRequired
};
