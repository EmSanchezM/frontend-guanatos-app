import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../lib/context/auth/authContext';


export const PublicRoute = ({ children }) => {

    const { authenticated } = useContext(AuthContext )
    
    return authenticated
        ? <Navigate to="/publicist-start" />
        : children
}