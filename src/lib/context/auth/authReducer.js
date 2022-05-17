import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from '../types';

const authReducer = (state, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			localStorage.setItem('tokenId', action.payload.token);
			return {
				...state,
				token: action.payload.token,
				user: action.payload.data.user,
				autenticado: true
			};

		case LOGIN_ERROR:
			return {
				...state,
				autenticado: false,
				error: action.payload
			};

		case LOGOUT:
			localStorage.removeItem('tokenId');
			return {
				token: null,
				user: null,
				error: null,
				autenticado: false
			};
		default:
			return state;
	}
};

export default authReducer;
