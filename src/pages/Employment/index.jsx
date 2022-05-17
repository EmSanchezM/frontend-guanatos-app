import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
/*NOTIFICATIONS CSS*/
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import logo from '../../assets/logo/logo.png';
import {
	Input,
	InputFileWithoutPreview,
	InputToggle,
	Select
} from '../../components/Form';
import { getPositions } from '../../services/positions';
/*SERVICES*/
import PublisherService from '../../services/publisher';

const Employment = () => {
	const [positions, setPositions] = useState([]);

	const [t] = useTranslation('global');

	useEffect(() => {
		getPositions(setPositions);
	}, []);

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
		PublisherService.postEmployment(formData);
	};

	return (
		<section className='min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-4'>
			<div className='bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden'>
				<div className='w-full md:flex'>
					<div className='hidden md:block w-1/2 bg-green-600 py-10 px-10'>
						<div className='flex justify-center items-center'>
							<img src={logo} alt='logo' />
							<ToastContainer autoClose={3000} />
						</div>
					</div>
					<div className='w-full md:w-1/2 py-10 px-5 md:px-10'>
						<div className='text-center mb-10'>
							<h1 className='font-bold text-3xl text-gray-900'>
								{t('employmentPage.employmentTitle')}
							</h1>
							<p>{t('employmentPage.employmentParrafo')}</p>
						</div>
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}
						>
							<Form className='w-full'>
								<div className='flex flex-wrap mt-4 -mx-3 px-2'>
									<div className='w-full lg:w-1/2 px-3 mb-3'>
										<Input
											type='text'
											label='Full Name' //{t("employmentPage.fullName")}
											placeholder='Full Name' //{t("employmentPage.fullName")}
											name='fullName'
										/>
									</div>
									<div className='w-full lg:w-1/2 px-3 mb-3'>
										<Input
											type='email'
											label='Email' //{t("employmentPage.email")}
											placeholder='Email' //{t("employmentPage.email")}
											name='email'
										/>
									</div>
								</div>
								<div className='flex flex-wrap -mx-3 px-2'>
									<div className='w-full lg:w-1/2 px-3 mb-5'>
										<Input
											type='text'
											label='phone' //{t("employmentPage.phone")}
											placeholder='Phone Number' //{t("employmentPage.phone")}
											name='phone'
										/>
									</div>
									<div className='w-full lg:w-1/2 px-4 lg:my-8 mb-5'>
										<InputToggle
											label='Adult' //{t("employmentPage.adult")}
											placeholder='Adult' //{t("employmentPage.adult")}
											name='adult'
											id='adult'
										/>
									</div>
								</div>
								<div className='flex flex-wrap -mx-3 px-2'>
									<div className='w-full px-3 mb-3'>
										<Input
											type='text'
											label='Address' //{t("contactPage.labelStreet")}
											placeholder='Address' //{t("contactPage.labelStreet")}
											name='address'
										/>
									</div>
									<div className='w-full px-3 mb-5'>
										<Input
											type='text'
											label='City, State, Zip' //{t("employmentPage.cityStateZip")}
											placeholder='city, state, zip code' //{t("employmentPage.cityStateZip")}
											name='cityStateZip'
										/>
									</div>
								</div>
								<div className='flex flex-wrap -mx-3 px-2'>
									<div className='w-full lg:w-1/2 px-3 mb-5'>
										<InputFileWithoutPreview
											type='file'
											label='resume' //{t("employmentPage.resume")}
											placeholder='Resume' //{t("employmentPage.resume")}
											id='resume'
											name='resume'
										/>
									</div>
								</div>
								<div className='flex flex-wrap -mx-3 px-2'>
									<Select
										id='positionDesired'
										name='positionDesired'
										label='Position Desired'
										options={positions}
									/>
								</div>
								<div className='flex flex-wrap -mx-3 px-4 mb-4 mt-4'>
									<button type='submit' className='form__submit'>
										SEND
									</button>
								</div>
							</Form>
						</Formik>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Employment;
