import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { getBranches } from '../../services/branches';
import { getJobs } from '../../services/positions';
import { postEmployment } from '../../services/publisher';

export const useFormEmployment = () => {
	const [jobs, setJobs] = useState([]);
	const [branches, setBranches] = useState([]);

	useEffect(() => {
		getJobs(setJobs);
	}, []);

	useEffect(() => {
		getBranches(setBranches);
	}, []);

	const initialValues = {
		name: '',
		email: '',
		position: '',
		branch: ''
	};

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Required'),
		email: Yup.string().required('Required'),
		position: Yup.string().required('Required'),
		branch: Yup.string().required('Required')
	});

	const handleSubmit = values => {
		console.log(values);

		postEmployment({ date: new Date(), ...values });
	};

	return {
		initialValues,
		validationSchema,
		handleSubmit,
		positions: jobs,
		branches
	};
};
