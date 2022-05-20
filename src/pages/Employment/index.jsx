import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/logo/logo.png';
import {
	Input,
	InputFileWithoutPreview,
	InputToggle,
	Select
} from '../../components/Form';
import { useFormEmployment } from '../../lib/hooks/employment/useFormEmployment';

const Employment = () => {
	const { initialValues, validationSchema, handleSubmit, positions } =
		useFormEmployment();

	const [t] = useTranslation('global');

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
											label='Full Name'
											placeholder='Full Name'
											name='fullName'
										/>
									</div>
									<div className='w-full lg:w-1/2 px-3 mb-3'>
										<Input
											type='email'
											label='Email'
											placeholder='Email'
											name='email'
										/>
									</div>
								</div>
								<div className='flex flex-wrap -mx-3 px-2'>
									<div className='w-full lg:w-1/2 px-3 mb-5'>
										<Input
											type='text'
											label='phone'
											placeholder='Phone Number'
											name='phone'
										/>
									</div>
									<div className='w-full lg:w-1/2 px-4 lg:my-8 mb-5'>
										<InputToggle
											label='Adult'
											placeholder='Adult'
											name='adult'
											id='adult'
										/>
									</div>
								</div>
								<div className='flex flex-wrap -mx-3 px-2'>
									<div className='w-full px-3 mb-3'>
										<Input
											type='text'
											label='Address'
											placeholder='Address'
											name='address'
										/>
									</div>
									<div className='w-full px-3 mb-5'>
										<Input
											type='text'
											label='City, State, Zip'
											placeholder='city, state, zip code'
											name='cityStateZip'
										/>
									</div>
								</div>
								<div className='flex flex-wrap -mx-3 px-2'>
									<div className='w-full lg:w-1/2 px-3 mb-5'>
										<InputFileWithoutPreview
											type='file'
											label='resume'
											placeholder='Resume'
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
