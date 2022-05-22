import { useEffect, useState } from 'react';
import { useUbication } from '../../lib/hooks/ubication';
import { getBranches } from '../../lib/services/branches';
import LocationBranches from './LocationBranches';
import LocationMap from './LocationMap';

/**
 * <ModalMap showMap={showMap} setShowMap={setShowMap} />

            <div className="flex flex-col justify-center items-center border-2 border-primary-200 px-4 mt-4 lg:mt-0">
                <h1 className="font-bold text-2xl mb-2">Search for a Location or Select Restaurant</h1>
                <div className="block lg:flex">
                    <div className="lg:mx-6 my-2">
                        <input type="text" className="block uppercase border-2 py-2 px-10 lg:px-36" placeholder="Search for a location"/>
                    </div>
                    <div className="lg:mx-6 my-2">
                        <span className="block uppercase border-2 py-2 px-28 lg:px-40">Select</span>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='font-bold text-2xl my-2 text-center'>All Locations</h2>
                <div className="gr_id gr_id-cols-1 gap-2 lg:gr_id-cols-3 my-2">
                    {
                        locations.map(location=>{
                            return (
                                <LocationCard 
                                    key={location._id} 
                                    location={location} 
                                    setShowMap={setShowMap}
                                />
                            )
                        })
                    }
                </div>
            </div>
 *  
 * 
 */

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
