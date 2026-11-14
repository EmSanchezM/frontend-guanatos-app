import { useEffect, useState } from 'react';
import { getWeatherByLocation } from '../../services/weather';

export const useWeather = ubication => {
	const [weather, setWeather] = useState({
		data: null,
		error: false
	});

	const setData = newData => {
		setWeather({ data: newData, error: false });
	};

	const setError = () => setWeather({ data: null, error: true });

	useEffect(() => {
		getWeatherByLocation(ubication, setData, setError);
	}, []);

	return { weather: weather.data };
};
