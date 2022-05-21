import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { MailIcon, ShoppingCartIcon } from '../Icons';
import FloatingButton from './FloatingButton';

const FloatingListButtons = ({ showModal }) => {
	const [t] = useTranslation('global');

	return (
		<>
			{!showModal && (
				<div className='button__floating'>
					<FloatingButton Icon={MailIcon} text={t('floating.contactBtn')} />
					<FloatingButton Icon={ShoppingCartIcon} text={t('floating.buyBtn')} />
				</div>
			)}
		</>
	);
};

export default FloatingListButtons;

FloatingListButtons.propTypes = {
	showModal: PropTypes.bool.isRequired
};
