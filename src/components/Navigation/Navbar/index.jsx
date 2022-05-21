import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../../lib/hooks/language';
import { useWeather } from '../../../lib/hooks/weather';
import HeaderMenu from './HeaderMenu';
import LanguageDisplay from './LanguageDisplay';
import WheatherDisplay from './WeatherDisplay';

const Navbar = ({ toogle, ubication }) => {
	const [t, i18n] = useTranslation('global');

	const { weather } = useWeather(ubication);
	const { language, handleLanguage } = useLanguage(i18n);

	return (
		<>
			<div className='flex-row-reverse hidden sm:flex md:flex'>
				<WheatherDisplay weather={weather} />
				<button
					onClick={() => handleLanguage()}
					className='mt-1 px-1 font-bold text-white'
				>
					<LanguageDisplay language={language} />
				</button>
			</div>
			<HeaderMenu toggle={toogle} t={t} />
		</>
	);
};

export default Navbar;

Navbar.propTypes = {
	toggle: PropTypes.func,
	ubication: PropTypes.object.isRequired
};
