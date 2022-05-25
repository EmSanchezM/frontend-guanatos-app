import PropTypes from 'prop-types';
import logo from '../../assets/logo/logo.png';

const LocationCard = ({ address, name, phones, images }) => {
	return (
		<article className='flex justify-center cursor-pointer mb-2'>
			<div className='flex flex-col md:flex:row md:max-w-xl rounded-lg bg-gray-50 shadow-lg'>
				<img
					className='w-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg'
					src={images[0] || logo}
					alt='guanatos'
				/>
				<div className='flex flex-col justify-start'>
					<h3 className='text-2xl text-center font-medium font-primary mb-2'>
						{name || 'Guanatos Tacos'}
					</h3>
					<div className='text-base mx-2 mb-4'>
						<h4 className='font-medium font-primary mr-2'>Phone</h4>
						<span>{phones}</span>
					</div>
					<div className='text-base mx-2 mb-4'>
						<h4 className='font-medium font-primary mr-2'>Address</h4>
						<span>{address.street}</span>
						<br />
						<span>
							{address.city}, {address.state}
						</span>
						<span> {address.zip}</span>
					</div>
				</div>
			</div>
		</article>
	);
};

export default LocationCard;

LocationCard.propTypes = {
	address: PropTypes.object.isRequired,
	name: PropTypes.string,
	phones: PropTypes.array,
	images: PropTypes.array
};
