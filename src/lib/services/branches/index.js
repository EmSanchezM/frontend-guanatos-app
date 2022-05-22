import Axios from '../../Api/axios';

export const getBranches = async setBranches => {
	try {
		const response = await Axios.get('/branch?publish[eq]=true&&active=true');
		const { data } = response;

		if (data.status === 'success') {
			setBranches(data.data.data);
		}
	} catch (error) {
		console.error(error);
	}
};
