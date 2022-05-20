import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../lib/context/auth/authContext';

const PrivateRoute = ({ children }) => {
	const { authenticated } = useContext(AuthContext);

	if (!authenticated) return <Navigate to='/' />;

	return children;
};

export default PrivateRoute;
