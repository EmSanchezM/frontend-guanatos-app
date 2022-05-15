import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/*
 * Component Dropdown: for menu mobile
 * @param props.isOpen of type boolean for manage state in mobile menu
 * @param props.toggle -> funtion for change state of isOpen in mobile menu
 *
 */
const Dropdown = ({ isOpen, toggle }) => {
	const [t] = useTranslation('global');

	return (
		<div className={isOpen ? 'dropdown__menu' : 'hidden'} onClick={toggle}>
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
		</div>
	);
};

export default Dropdown;

Dropdown.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	toggle: PropTypes.func
};
