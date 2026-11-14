import PropTypes from 'prop-types';
import { startTransition, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import authContext from '../../../lib/context/auth/authContext';
import { MenuBarIcon } from '../../Icons';

const Header = ({ toggle }) => {
	const navigate = useNavigate();
	const AuthContext = useContext(authContext);
	const { LogOut } = AuthContext;

	const handleLogout = () => {
		// React Router runs navigations in a transition; logging out in the same
		// transition keeps PrivateRoute from redirecting to the login page first
		startTransition(() => {
			navigate('/');
			LogOut();
		});
	};

	return (
		<header className='py-4 bg-gray-100'>
			<div className='container flex justify-between items-center h-full px-6 mx-auto'>
				<button>
					<MenuBarIcon className='w-5 h-5 lg:hidden' onClick={toggle} />
				</button>
				<div
					onClick={handleLogout}
					className='flex shrink-0 items-center space-x-6'
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
