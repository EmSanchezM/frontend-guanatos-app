import PropTypes from 'prop-types';

const LocationCard = ({ branch }) => {
	console.log('data card', branch);

	//if (!branch.length) return <p>No hay location</p>;
	const { address } = branch;

	return (
		<article className='border-2 rounded-md mb-2 mx-2 mt-2'>
			<div className='flex justify-between mx-4'>
				<h3 className='text-2xl font-semibold font-primary'>
					{branch.name || 'Guanatos Tacos'}
				</h3>
			</div>
			<hr className='border-1 border-gray-200' />
			<br />
			<span className='font-bold mx-2'>Phone: {branch.phones}</span>
			<div className='flex py-4 px-2'>
				<ul>
					<li>{address.street}</li>
					<li>{address.state}</li>
					<li>{address.city}</li>
					<li>{address.zip}</li>
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
