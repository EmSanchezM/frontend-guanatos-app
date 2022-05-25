import { useEffect, useState } from 'react';
import { useUbication } from '../../lib/hooks/ubication';
import { getBranches } from '../../lib/services/branches';
import LocationBranches from './LocationBranches';
import LocationMap from './LocationMap';

const Locations = () => {
	const [branches, setBranches] = useState([]);

	const { ubication } = useUbication();

	useEffect(() => {
		getBranches(setBranches);
	}, []);

	return (
		<section className='flex justify-center lg:justify-start w-1/9 mx-auto font-primary'>
			<div className='lg:w-1/3'>
				<div className='overflow-y-scroll px-3 mx-3'>
					<LocationBranches branches={branches} />
				</div>
			</div>
			<div className='hidden md:block lg:block lg:my-12 lg:mx-4'>
				<LocationMap ubication={ubication} branches={branches} />
			</div>
		</section>
	);
};

export default Locations;
