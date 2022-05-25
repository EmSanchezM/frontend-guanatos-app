import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useGoogleMap } from '../../lib/hooks/ubication';

const stylesMap = {
	height: '70vh',
	width: '60vw',
	margin: '20px'
};

const LocationMap = ({ branches, ubication }) => {
	const {
		centerPosition,
		originPositions,
		destinationsPositions,
		setDestinationsPositions
	} = useGoogleMap(branches, ubication);

	const onLoad = marker => {
		console.log('marker ', marker);
		setDestinationsPositions(marker);
	};

	return (
		<LoadScript
			googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAP_KEY}
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
						label={`${i + 1}${title}`}
					/>;
				})}

				{destinationsPositions.forEach(([position, title], i) => {
					<Marker
						onLoad={onLoad}
						position={position}
						title={`${i + 1}. ${title}`}
						label={`${i + 1}${title}`}
					/>;
				})}
			</GoogleMap>
		</LoadScript>
	);
};

export default LocationMap;
