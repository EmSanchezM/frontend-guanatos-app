import axios from 'axios';
import { WEATHER_MAP_API } from '../../../constants/api';

export const getWeatherByLocation = async (ubication, setData, setError) => {
	let weatherDTO = {};
	const { lng, lat } = ubication;

	/*
		const examplelat = 42.598999;
		const examplelon = -5.5682413;
	*/

	let data;
	try {
		const resp = await axios.get(
			`${WEATHER_MAP_API}/weather/?units=imperial&lat=${lat}&lon=${lng}&appid=${
				import.meta.env.VITE_WEATHER_MAP_KEY
			}`
		);
		data = resp.data;
	} catch (error) {
		// Invalid or missing API key (401), quota exceeded, network failure...
		setError(error.response?.data?.message ?? error.message);
		return;
	}

	if (!data) {
		setError('Empty weather response');
	} else {
		weatherDTO = {
			location: data.name,
			description: data.weather[0].main,
			temperature: data.main.temp,
			icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
			date: getDate()
		};
		setData(weatherDTO);
	}
};

const getDate = () => {
	const date = new Date();
	return `${date.getMonth()}/${('0' + date.getDate() + 1).slice(
		-2
	)}/${date.getFullYear()} `;
};
