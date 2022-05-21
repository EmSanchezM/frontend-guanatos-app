const WheatherDisplay = ({ weather }) => {
	if (!weather) return null;

	return (
		<div className='flex items-center mt-1 px-4 '>
			<img src={weather.icon} alt='icon-weather' />
			<span className='font-bold text-white'>{weather.temperature} °F</span>
			{/*<span className="ml-1 font-bold">{weather.description}</span>*/}
		</div>
	);
};

export default WheatherDisplay;
