import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { getJobs } from '../../services/positions';
import { postEmployment } from '../../services/publisher';

export const useFormEmployment = () => {
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		getJobs(setJobs);
	}, []);

	console.log(jobs);

	const initialValues = {
		fullName: '',
		email: '',
		phone: '',
		address: '',
		cityStateZip: '',
		resume: '',
		positionDesired: '',
		adult: true
	};

	const validationSchema = Yup.object().shape({
		fullName: Yup.string().required('Required'),
		email: Yup.string().required('Required'),
		phone: Yup.string().required('Required'),
		address: Yup.string().required('Required'),
		adult: Yup.string().required('Required'),
		cityStateZip: Yup.string().required('Required'),
		resume: Yup.string().required('Required'),
		positionDesired: Yup.string().required('Required')
	});

	const handleSubmit = values => {
		console.log(values);
		const formData = new FormData();
		formData.append('fullName', values.fullName);
		formData.append('email', values.email);
		formData.append('phone', values.phone);
		formData.append('address', values.address);
		formData.append('adult', values.adult);
		formData.append('cityStateZip', values.cityStateZip);
		formData.append('resume', values.resume);
		formData.append('positionDesired', values.positionDesired);
		postEmployment(formData);
	};

	return {
		initialValues,
		validationSchema,
		handleSubmit,
		positions: jobs
	};
};
