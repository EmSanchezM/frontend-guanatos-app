import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../lib/context/auth/authContext';

const PublicRoute = ({ children }) => {
	const { authenticated } = useContext(AuthContext);

	if (authenticated) return <Navigate to='/publisher/carousel' />;

	return children;
};

export default PublicRoute;
