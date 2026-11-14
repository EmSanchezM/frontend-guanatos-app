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
		// 0,0 is useUbication's placeholder until the browser reports a position
		if (!ubication.lat && !ubication.lng) return;
		getWeatherByLocation(ubication, setData, setError);
	}, [ubication]);

	return { weather: weather.data };
};
