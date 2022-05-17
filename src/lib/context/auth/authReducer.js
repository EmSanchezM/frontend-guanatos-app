import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from '../types';

const authReducer = (state, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			localStorage.setItem('tokenId', action.payload.token);
			return {
				...state,
				token: action.payload.token,
				user: action.payload.data.user,
				authenticated: true
			};

		case LOGIN_ERROR:
			return {
				...state,
				authenticated: false,
				error: action.payload
			};

		case LOGOUT:
			localStorage.removeItem('tokenId');
			return {
				token: null,
				user: null,
				error: null,
				authenticated: false
			};
		default:
			return state;
	}
};

export default authReducer;
