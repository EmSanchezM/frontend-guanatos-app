import axios from 'axios';
import { WEATHER_MAP_API } from '../../../constants/api';

export const getWeatherByLocation = async (ubication, setData, setError) => {
	let weatherDTO = {};
	const { lng, lat } = ubication;

	/*
		const examplelat = 42.598999;
		const examplelon = -5.5682413;
	*/

	const resp = await axios.get(
		`${WEATHER_MAP_API}/weather/?units=imperial&lat=${lat}&lon=${lng}&appid=${
			import.meta.env.VITE_WEATHER_MAP_KEY
		}`
	);
	const { data } = resp;

	if (!data) {
		weatherDTO.message = data.message;
		setError(weatherDTO);
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
	let date = new Date();
	return `${date.getMonth()}/${('0' + date.getDate() + 1).slice(
		-2
	)}/${date.getFullYear()} `;
};
