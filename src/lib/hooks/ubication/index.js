import { useEffect, useState } from 'react';
import { destinationMapper } from '../../mappers/destinations.mapper';

export const useUbication = () => {
	const [ubication, setUbication] = useState({
		lng: 0,
		lat: 0
	});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			function (position) {
				setUbication({
					lng: position.coords.longitude,
					lat: position.coords.latitude
				});
			},
			function (error) {
				console.error('ERROR Code ' + error.code + ' - ' + error.message);
			},
			{
				enableHighAccuracy: true
			}
		);
	}, []);

	return { ubication };
};

const destinationDisplay = branches => {
	return branches.map(branch => destinationMapper(branch));
};

export const useGoogleMap = (branches, ubication) => {
	const centerPosition = {
		lat: ubication.lat || 34.5863439,
		lng: ubication.lng || -111.8035
	};

	const [originPositions, setOriginPositions] = useState([
		[{ lat: ubication.lat, lng: ubication.lng }, 'Your Location']
	]);

	const [destinationsPositions, setDestinationsPositions] = useState(
		destinationDisplay(branches)
	);

	return {
		originPositions,
		destinationsPositions,
		setOriginPositions,
		setDestinationsPositions,
		centerPosition
	};
};
