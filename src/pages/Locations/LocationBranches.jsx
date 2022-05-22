import LocationCard from './LocationCard';

const LocationBranches = ({ branches }) => {
	if (!branches.length)
		return <p className='mt-4 font-bold'>There are no branches</p>;

	return branches.map(branch => <LocationCard key={branch._id} {...branch} />);
};
export default LocationBranches;
