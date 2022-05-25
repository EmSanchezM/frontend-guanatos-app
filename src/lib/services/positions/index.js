import Axios from '../../Api/axios';
import { jobsMapper } from '../../mappers/jobs.mapper';

export const getJobs = async setPositions => {
	try {
		const options = { method: 'GET' };
		const response = await Axios('/jobs?active[eq]=true', options);
		const { data } = response;

		if (response.status === 'success') {
			const jobsData = [...data.data];
			let jobs = [];
			
			jobs = jobsData.map(job=> jobsMapper(job));
			
			setPositions(jobs);
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
