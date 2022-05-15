const URL_WEATHER_API = import.meta.env.VITE_WEATHER_MAP_API;
const API_KEY_WEATHER = import.meta.env.VITE_WEATHER_MAP_KEY;

export const getWeatherByLocation = async (lat, lng, setWeather) => {
	const weatherDTO = {};

	const resp = await fetch(
		`${URL_WEATHER_API}/weather/?units=imperial&lat=${lat}&lon=${lng}&appid=${API_KEY_WEATHER}`
	);
	const data = await resp.json();

	if (data.cod === '404') {
		weatherDTO.message = data.message;
		setWeather(weatherDTO);
	} else {
		weatherDTO = {
			location: data.name,
			description: data.weather[0].main,
			temperature: data.main.temp,
			icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
			date: getDate()
		};
		setWeather(weatherDTO);
	}
};

const getDate = () => {
	let date = new Date();
	return `${date.getMonth()}/${('0' + date.getDate() + 1).slice(
		-2
	)}/${date.getFullYear()} `;
};
