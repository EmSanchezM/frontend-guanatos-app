import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
/*STATICS FILES*/
import mexican from '../../../assets/images/mexican_flag.png';
import usa from '../../../assets/images/usa_flag.png';
import logo from '../../../assets/logo/logo.png';
import { useWeatherByLocation } from '../../../lib/hooks/weather';
import { MenuBarIcon } from '../../Icons';

const Navbar = ({ toogle, ubication }) => {
	let idiom = 'ESP';
	const languageStorage = localStorage.getItem('language');

	if (languageStorage) {
		idiom = languageStorage;
	}

	const [language, setLanguage] = useState(idiom);

	const { weather } = useWeatherByLocation(ubication);

	const [t, i18n] = useTranslation('global');

	const handleLanguage = () => {
		if (language === 'EN') {
			setLanguage('ESP');
			i18n.changeLanguage('es');
			localStorage.setItem('language', language);
		} else {
			setLanguage('EN');
			i18n.changeLanguage('en');
			localStorage.setItem('language', language);
		}
	};

	return (
		<>
			<div className='flex-row-reverse hidden sm:flex md:flex'>
				{weather.temperature && (
					<>
						<div className='flex items-center mt-1 px-4 '>
							<img src={weather.icon} alt='icon-weather' />
							<span className='font-bold text-white'>
								{weather.temperature} °F
							</span>
							{/*<span className="ml-1 font-bold">{weather.description}</span>*/}
						</div>
					</>
				)}
				<button
					onClick={() => handleLanguage()}
					className='mt-1 px-1 font-bold text-white'
				>
					{language === 'ESP' && (
						<img src={mexican} alt='flag' className='h-10 w-10' />
					)}
					{language === 'EN' && (
						<img src={usa} alt='flag' className='h-10 w-10' />
					)}
				</button>
			</div>
			<header className='header' role='navigation'>
				<Link className='mt-2 lg:mb-4 mb-0 font-primary uppercase' to='/'>
					<img
						src={logo}
						alt='logo'
						className='object-contain w-48 h-48 lg:mx-1 rounded-xl'
					/>
				</Link>

				<div className='px-8 cursor-pointer md:hidden' onClick={toogle}>
					<MenuBarIcon className='w-6 h-6' />
				</div>
				<nav className='md:block hidden'>
					<Link className='navbar__link' to='/'>
						{t('header.home')}
					</Link>
					<Link className='navbar__link' to='/locations'>
						{t('header.locations')}
					</Link>
					<Link className='navbar__link' to='/menu'>
						{t('header.menu')}
					</Link>
					<Link className='navbar__link' to='/about-us'>
						{t('header.about')}
					</Link>
					<Link className='navbar__link' to='/contact-us'>
						{t('header.contact')}
					</Link>
					<Link className='navbar__link' to='/work-with-us'>
						{t('header.employment')}
					</Link>
					<Link className='navbar__link' to='/'>
						{t('header.order')}
					</Link>
				</nav>
			</header>
		</>
	);
};

export default Navbar;

Navbar.propTypes = {
	toggle: PropTypes.func,
	ubication: PropTypes.object.isRequired
};
