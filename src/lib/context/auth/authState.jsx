import { useEffect, useReducer } from 'react';
import Axios, { UNAUTHORIZED_EVENT } from '../../Api/axios';
import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from '../types';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

const AuthState = props => {
	const token = localStorage.getItem('tokenId');
	const initialState = {
		token,
		user: null,
		authenticated: Boolean(token),
		error: null
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	useEffect(() => {
		const handleUnauthorized = () => dispatch({ type: LOGOUT });
		window.addEventListener(UNAUTHORIZED_EVENT, handleUnauthorized);
		return () =>
			window.removeEventListener(UNAUTHORIZED_EVENT, handleUnauthorized);
	}, []);

	const LogIn = async values => {
		try {
			const options = {
				data: values,
				method: 'POST'
			};
			const response = await Axios('/users/login', options);

			if (response.status === 'success' && response.token) {
				localStorage.setItem('tokenId', response.token);
				dispatch({
					type: LOGIN_SUCCESS,
					payload: response
				});
			}
		} catch (error) {
			let message;
			switch (error.status) {
				case 500:
					message = 'Internal Server Error';
					break;
				case 401:
					message = 'Invalid credentials';
					break;
				default:
					message = error.message;
					console.error('ERROR LOGIN', message);
			}
			dispatch({
				type: LOGIN_ERROR,
				payload: message
			});
		}
	};

	const LogOut = () => {
		dispatch({
			type: LOGOUT
		});
	};

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				authenticated: state.authenticated,
				error: state.error,
				user: state.user,
				LogIn,
				LogOut
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
