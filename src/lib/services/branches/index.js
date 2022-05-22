import Axios from '../../Api/axios';

export const getBranches = async setBranches => {
	try {
		const options = { method: 'GET' };

		const response = await Axios(
			'/branch?publish[eq]=true&&active=true',
			options
		);

		const { data } = response;

		if (response.status === 'success') {
			setBranches(data.data);
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
				console.error(`ERROR: ${message}`);
		}
	}
};
