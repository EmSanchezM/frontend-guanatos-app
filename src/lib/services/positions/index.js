import Axios from '../../Api/axios';

export const getPositions = async setPositions => {
	try {
		const response = await Axios.get('/position?publish[eq]=true&&active=true');
		const { data } = response;

		if (data.status === 'success') {
			console.log('data axios ', data.data.data);
			setPositions(data.data.data);
		}
	} catch (error) {
		console.log('ERROR ', error);
	}
};
