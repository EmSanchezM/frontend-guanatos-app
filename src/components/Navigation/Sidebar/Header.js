import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import authContext from '../../../utils/context/auth/authContext';
/*ICON*/
import { MenuBarIcon } from '../../Icons';

const Header = ({ toggle }) => {
	const history = useHistory();
	const AuthContext = useContext(authContext);
	const { LogOut } = AuthContext;

	const handleLogout = () => {
		LogOut();
		history.push('/');
	};

	return (
		<header className='py-4 bg-gray-100'>
			<div className='container flex justify-between items-center h-full px-6 mx-auto'>
				<button>
					<MenuBarIcon className='w-5 h-5 lg:hidden' onClick={toggle} />
				</button>
				<div
					onClick={handleLogout}
					className='flex flex-shrink-0 items-center space-x-6'
				>
					<button className='border-2 border-primary-200 rounded-full px-2'>
						Logout
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;

Header.propTypes = {
	toggle: PropTypes.func.isRequired
};
