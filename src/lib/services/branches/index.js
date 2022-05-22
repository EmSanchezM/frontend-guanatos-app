import Axios from '../../Api/axios';

export const getBranches = async setBranches => {
	try {
		const response = await Axios.get('/branch?publish[eq]=true&&active=true');
		const { data } = response;

		if (data.status === 'success') {
			setBranches(data.data.data);
		}
	} catch (error) {
		const { message, request, response } = error;
		if (response) {
			const { data } = response;
			throw data;
		} else if (request) {
			throw request;
		} else {
			console.error(message);
			throw message;
		}
	}
};
