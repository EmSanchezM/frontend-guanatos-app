import PropTypes from 'prop-types';
import VariantItem from './VariantItem';

const VariantSection = ({ setSelectedVideo, setSelectedImg, allMedia }) => {
	let variantData = allMedia?.filter(media => media.section === 'multimedia');
	let sections = ['A', 'B', 'C'];

	return (
		<>
			{variantData.length ? (
				variantData.map((media, i) => {
					return (
						<section
							className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mx-2'
							key={media._id}
						>
							<VariantItem
								media={media}
								setSelectedImg={setSelectedImg}
								setSelectedVideo={setSelectedVideo}
								fullWidth={i === sections[2] && true}
							/>
						</section>
					);
				})
			) : (
				<p>No hay data</p>
			)}
		</>
	);
};

export default VariantSection;

VariantSection.propTypes = {
	setSelectedVideo: PropTypes.func.isRequired,
	setSelectedImg: PropTypes.func.isRequired
};
