import axios from 'axios';
import { ATHOZ_API_URL } from '../../constants/api';

export default async (path, options = {}) => {
	const baseURL = ATHOZ_API_URL;
	const token = localStorage.getItem('tokenId');

	let headers = {
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
