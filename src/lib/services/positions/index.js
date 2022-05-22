import Axios from '../../Api/axios';

export const getPositions = async setPositions => {
	try {
		const options = { method: 'GET' };
		const response = await Axios(
			'/position?publish[eq]=true&&active=true',
			options
		);
		console.log('response positions', response);
		const { data } = response;

		if (data.status === 'success') {
			console.log('data axios ', data.data.data);
			setPositions(data.data.data);
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
