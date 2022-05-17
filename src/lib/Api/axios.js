import axios from 'axios';
import { ATHOZ_API_URL } from '../../constants/api';

const baseURL = ATHOZ_API_URL;
const token = localStorage.getItem('tokenId');

let headers = {
	Authorization: token ? `Bearer ${token}` : null,
	'Content-Type': 'application/json'
};

const Axios = axios.create({
	baseURL: baseURL,
	headers
});

Axios.interceptors.response.use(
	response => {
		return response;
	},
	async function (error) {
		if (typeof error.response === 'undefined') {
			alert(
				'A server/network error ocurred.' +
					'Looks like CORS might be the problem. ' +
					'Sorry about this - we will get it fixed shortly.'
			);
			return Promise.reject(error);
		}

		if (error.response.status === 401) {
			window.location = '/publicist-login';
			return Promise.reject(error);
		}
		return Promise.reject(error);
	}
);

export default Axios;
