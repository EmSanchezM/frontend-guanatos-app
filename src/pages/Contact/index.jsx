import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import logo from '../../assets/logo/logo.png';
import { Input, TextArea } from '../../components/Form';
/*SERVICES PUBLISHER*/
import { postContactUs } from '../../lib/services/publisher';

const ContactUs = () => {
	const [t] = useTranslation('global');

	const initialValuesContact = {
		firstName: '',
		lastName: '',
		email: '',
		street: '',
		city: '',
		state: '',
		zipCode: '',
		phoneNumber: '',
		messageContact: ''
	};

	const validationSchema = Yup.object().shape({
		firstName: Yup.string().required('Required'),
		lastName: Yup.string().required('Required'),
		email: Yup.string().required('Required'),
		street: Yup.string().required('Required'),
		city: Yup.string().required('Required'),
		state: Yup.string().required('Required'),
		zipCode: Yup.string().required('Required'),
		phoneNumber: Yup.string().required('Required'),
		messageContact: Yup.string().required('Required')
	});

	const handleSubmit = values => {
		console.log(values);
		postContactUs(values);
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
								{t('contactPage.contactTitle')}
							</h1>
							<p>{t('contactPage.contactParafo')}</p>
						</div>
						<Formik
							initialValues={initialValuesContact}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}
						>
							<Form className='w-full'>
								<div className='flex flex-wrap mt-4 -mx-3 px-2'>
									<div className='w-full md:w-1/2 px-3 mb-3'>
										<Input
											type='text'
											label='First Name' //{t("contactPage.labelName")}
											placeholder='First Name' //{t("contactPage.labelName")}
											name='firstName'
										/>
									</div>
									<div className='w-full md:w-1/2 px-3 mb-3'>
										<Input
											type='text'
											label='Last Name' //{t("contactPage.labelApellido")}
											placeholder='Last Name' //{t("contactPage.labelApellido")}
											name='lastName'
										/>
									</div>
								</div>
								<div className='flex flex-wrap -mx-3 px-2'>
									<div className='w-full px-3 mb-3'>
										<Input
											type='email'
											label='Email' //{t("contactPage.labelEmail")}
											placeholder='Email' //{t("contactPage.labelEmail")}
											name='email'
										/>
									</div>
									<div className='w-full px-3 mb-3'>
										<Input
											type='text'
											label='Street' //{t("contactPage.labelStreet")}
											placeholder='Street' //{t("contactPage.labelStreet")}
											name='street'
										/>
									</div>
								</div>
								<div className='flex flex-wrap -mx-3 px-2'>
									<div className='w-full md:w-1/2 px-3 mb-3'>
										<Input
											type='text'
											label='City' //{t("contactPage.labelCity")}
											placeholder='City' //{t("contactPage.labelCity")}
											name='city'
										/>
									</div>
									<div className='w-full md:w-1/2 px-3 mb-3'>
										<Input
											type='text'
											label='State' //{t("contactPage.labelState")}
											placeholder='State' //{t("contactPage.labelState")}
											name='state'
										/>
									</div>
								</div>
								<div className='flex flex-wrap -mx-3 px-2'>
									<div className='w-full md:w-1/2 px-3 mb-3'>
										<Input
											type='text'
											label='Zip Code' //{t("contactPage.labelZipCode")}
											placeholder='Zip Code' //{t("contactPage.labelZipCode")}
											name='zipCode'
										/>
									</div>
									<div className='w-full md:w-1/2 px-3 mb-3'>
										<Input
											type='text'
											label='Phone Number' //{t("contactPage.labelPhoneNumber")}
											placeholder='Phone Number' //{t("contactPage.labelPhoneNumber")}
											name='phoneNumber'
										/>
									</div>
								</div>
								<div className='flex flex-wrap -mx-3 px-2'>
									<div className='w-full px-3 mb-3'>
										<TextArea
											type='text'
											label='Message' //{t("contactPage.labelMessage")}
											placeholder='Message' //{t("contactPage.labelMessage")}
											name='messageContact'
										/>
									</div>
								</div>
								<div className='flex flex-wrap -mx-3 px-4 mb-4'>
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

export default ContactUs;
