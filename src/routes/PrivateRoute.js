import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../lib/context/auth/authContext';


export const PrivateRoute = ({ children }) => {

    const { authenticated } = useContext(AuthContext )
    
    return authenticated
        ? children
        : <Navigate to="/" />
}