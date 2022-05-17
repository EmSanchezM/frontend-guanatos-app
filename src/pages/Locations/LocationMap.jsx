import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';

/*TODO: DirectionsRenderer*/

const stylesMap = {
	height: '70vh',
	width: '60vw',
	margin: '20px'
};

const LocationMap = ({ ubication, allBranches }) => {
	const centerPosition = {
		lat: ubication.lat || 34.5863439,
		lng: ubication.lng || -111.8035
	};

	console.log('ubication ', ubication);

	const [originPositions, setOriginPositions] = useState([
		[{ lat: ubication.lat, lng: ubication.lng }, 'Your Location']
	]);

	const [destinationsPositions, setDestinationsPositions] = useState([
		[{ lat: 34.5863439, lng: -118.1418195 }, 'Palmdale']
	]);

	const onLoad = marker => {
		console.log('marker ', marker);
		setDestinationsPositions(marker);
	};

	return (
		<LoadScript
			googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
			language='en'
		>
			<GoogleMap
				mapContainerStyle={stylesMap}
				zoom={12}
				center={centerPosition}
			>
				{originPositions.forEach(([position, title], i) => {
					<Marker
						onLoad={onLoad}
						position={position}
						title={`${i + 1}. ${title}`}
						label={`${i + 1}`}
					/>;
				})}

				{destinationsPositions.forEach(([position, title], i) => {
					<Marker
						onLoad={onLoad}
						position={position}
						title={`${i + 1}. ${title}`}
						label={`${i + 1}`}
					/>;
				})}
			</GoogleMap>
		</LoadScript>
	);
};

export default LocationMap;
