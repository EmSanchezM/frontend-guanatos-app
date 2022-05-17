import { useEffect, useState } from 'react';
import { getWeatherByLocation } from '../../services/weather';

export const useWeather = ubication => {
	const [weather, setWeather] = useState({
		data: [],
		error: false
	});

	const setData = newData => {
		setWeather({ data: newData, error: false });
	};

	const setError = () => setWeather({ data: [], error: true });

	useEffect(() => {
		getWeatherByLocation(ubication, setData, setError);
	}, []);

	console.log(weather);

	return { weather: weather.data };
};
