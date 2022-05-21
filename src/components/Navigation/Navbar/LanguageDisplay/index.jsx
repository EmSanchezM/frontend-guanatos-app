import mexican from '../../../../assets/images/mexican_flag.png';
import usa from '../../../../assets/images/usa_flag.png';

const LanguageDisplay = ({ language }) =>
	language === 'ESP' ? (
		<img src={mexican} alt='flag' className='h-10 w-10' />
	) : (
		<img src={usa} alt='flag' className='h-10 w-10' />
	);

export default LanguageDisplay;
