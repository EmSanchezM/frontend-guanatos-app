import { useEffect, useState } from 'react';
import { getWeatherByLocation } from '../../services/weather';

export const useWeatherByLocation = async ubication => {
	const [weather, setWeather] = useState();

	if (ubication !== undefined) {
		const { lng, lat } = ubication;

		useEffect(() => {
			getWeatherByLocation(lat, lng, setWeather);
		}, []);
	}

	return { weather };
};
