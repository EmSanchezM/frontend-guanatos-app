import { Link } from 'react-router-dom';

const FloatingButton = ({ Icon, text }) => (
	<Link to='contact-us' className='button__floating-link'>
		<Icon className='w-5 h-5 text-white' />
		<span className='text-white text-xs mx-3'>{text}</span>
	</Link>
);

export default FloatingButton;
