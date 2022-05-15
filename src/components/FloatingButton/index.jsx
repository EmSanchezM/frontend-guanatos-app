import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MailIcon, ShoppingCartIcon } from '../Icons';

const FloatingButton = ({ showModal }) => {
	const [t] = useTranslation('global');

	return (
		<>
			{!showModal && (
				<div className='button__floating'>
					<Link to='contact-us' className='button__floating-link'>
						<MailIcon className='w-5 h-5 text-white' />
						<span className='text-white mx-3 md:mx-2'>
							{t('floating.contactBtn')}
						</span>
					</Link>

					<Link to='/' className='button__floating-link'>
						<ShoppingCartIcon className='w-5 h-5 text-white' />
						<span className='text-white mx-7 md:mx-2'>
							{t('floating.buyBtn')}
						</span>
					</Link>
				</div>
			)}
		</>
	);
};

export default FloatingButton;

FloatingButton.propTypes = {
	showModal: PropTypes.bool.isRequired
};
