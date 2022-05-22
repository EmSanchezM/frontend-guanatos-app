import { useEffect, useState } from 'react';

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
