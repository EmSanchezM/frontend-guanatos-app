import { useReducer } from 'react';
import Axios from '../../Api/axios';
import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from '../types';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

const AuthState = props => {
	const initialState = {
		token: localStorage.getItem('tokenId'),
		user: null,
		authenticated: false,
		error: null
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	const LogIn = async values => {
		try {
			const response = await Axios.post('users/login', values);
			const { data } = response;

			if (data.status === 'success') {
				localStorage.setItem('tokenId', data.token);
				dispatch({
					type: LOGIN_SUCCESS,
					payload: data
				});
			} else {
				console.log('data error ', data);
				dispatch({
					type: LOGIN_ERROR,
					payload: data
				});
			}
		} catch (error) {
			dispatch({
				type: LOGIN_ERROR,
				payload: error
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
				autenticado: state.autenticado,
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
