import { useEffect, useState } from 'react';
import { getBranches } from '../../lib/services/branches';
import LocationCard from './LocationCard';
import LocationMap from './LocationMap';

/*
const locations = [
    {
        id: '1asd',
        title: 'Redlands Blvd',
        schedule: "Open'Til 4 PM", 
        street: '27521 San Nernandino Av',
        direction: 'Redlands CA, USA',
        phone: '(909) 557-2220',
        distance: '2391 mi'
    },
    {
        id: '2asdf',
        title: 'Moreno Valley',
        schedule: "Open'Til 4 PM", 
        street: '12860 Day Street. Moreno',
        direction: 'Valley, CA 92553, USA',
        phone: '(951697-0390)',
        distance: '2399 mi'
    },
    {
        id: '3asdfg',
        title: 'Grimmer Blvd',
        schedule: "Open'Til 4 PM", 
        street: 'Address Street',
        direction: '160-161 North Street',
        phone: 'Brighton',
        distance: 'BN1 1EZ'
    },
    {
        id: '4asdfgh',
        title: 'Grimmer Blvd',
        schedule: "Open'Til 4 PM", 
        street: 'Address Street',
        direction: '160-161 North Street',
        phone: 'Brighton',
        distance: 'BN1 1EZ'
    },
    {
        id: '5asdfghi',
        schedule: "Open'Til 4 PM", 
        title: 'Grimmer Blvd',
        street: 'Address Street',
        direction: '160-161 North Street',
        phone: 'Brighton',
        distance: 'BN1 1EZ'
    },
    {
        id: '6asdfghij',
        title: 'Grimmer Blvd',
        schedule: "Open'Til 4 PM", 
        street: 'Address Street',
        direction: '160-161 North Street',
        phone: 'Brighton',
        distance: 'BN1 1EZ'
    },
]
*/
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
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 my-2">
                    {
                        locations.map(location=>{
                            return (
                                <LocationCard 
                                    key={location.id} 
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

const Locations = ({ ubication }) => {
	const [branches, setBranches] = useState([]);

	useEffect(() => {
		getBranches(setBranches);
	}, []);

	return (
		<section className='flex justify-center lg:justify-start w-1/9 mx-auto font-primary'>
			<div className='lg:w-1/3'>
				<div className='overflow-y-scroll px-3 mx-3'>
					{allBranches.map(location => (
						<LocationCard key={location._id} location={location} />
					))}
				</div>
			</div>
			<div className='hidden lg:block lg:my-12 lg:mx-4'>
				<LocationMap ubication={ubication} allBranches={branches} />
			</div>
		</section>
	);
};

export default Locations;
