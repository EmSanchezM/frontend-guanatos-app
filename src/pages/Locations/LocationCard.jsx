import PropTypes from 'prop-types';

const LocationCard = ({ location }) => {
	return (
		<article className='border-2 border-primary-200 rounded-md mb-2 mx-2'>
			<div className='flex justify-between mx-4'>
				<h3 className='text-2xl font-semibold font-primary text-primary-400'>
					Guanatos Tacos
				</h3>
				<span className='font-bold text-primary-200'>
					{location.phones || 'No Phone'}
				</span>
			</div>
			<hr className='border-1 border-gray-200' />
			<div className='flex py-4 px-2'>
				<ul>
					<li>{location?.address?.street || 'No Street'}</li>
					<li>{location?.address?.state || 'No State'}</li>
					<li>{location?.address?.city || 'No City'}</li>
					<li>{location?.address?.zip || 'No Zip Code'}</li>
				</ul>
				<div className='flex flex-col justify-center ml-10 mr-1'>
					<button className='bg-primary-400 p-2 my-2 rounded-md font-bold text-white'>
						Get Direction
					</button>
					{/*<button className='bg-primary-400 p-2 my-2 rounded-md font-bold text-white'>Store Info</button>*/}
				</div>
			</div>
		</article>
	);
};

export default LocationCard;

LocationCard.propTypes = {
	location: PropTypes.object.isRequired
};
