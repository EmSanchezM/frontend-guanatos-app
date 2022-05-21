import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png';
import { MenuBarIcon } from '../../Icons';

const HeaderMenu = ({ toogle, t }) => (
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
);

export default HeaderMenu;
