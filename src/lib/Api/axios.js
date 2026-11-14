import axios from 'axios';
import { ATHOZ_API_URL } from '../../constants/api';

// Dispatched on window when the API rejects the stored token; AuthState logs out
export const UNAUTHORIZED_EVENT = 'auth:unauthorized';

export default async (path, options = {}) => {
	const baseURL = ATHOZ_API_URL;
	const token = localStorage.getItem('tokenId');

	const headers = {
		'Content-Type': 'application/json'
	};

	if (token) {
		headers['Authorization'] = `Bearer ${token}`;
	}

	try {
		const response = await axios({
			...options,
			url: `${baseURL}${path}`,
			headers
		});

		const { data } = response;

		return data;
	} catch (error) {
		const { message, request, response } = error;
		// Only a request that carried the current token can mean the session expired.
		// A login 401 means wrong credentials, and a late 401 for an older token
		// must not end a session started since then; both are left to the caller
		if (
			response?.status === 401 &&
			path !== '/users/login' &&
			token &&
			localStorage.getItem('tokenId') === token
		) {
			localStorage.removeItem('tokenId');
			window.dispatchEvent(new Event(UNAUTHORIZED_EVENT));
		}
		if (response) {
			const { data } = response;
			throw data;
		} else if (request) {
			throw request;
		} else {
			throw message;
		}
	}
};
