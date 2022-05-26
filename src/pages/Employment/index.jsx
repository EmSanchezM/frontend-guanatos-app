import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/logo/logo.png';
import { Input, Select } from '../../components/Form';
import { useFormEmployment } from '../../lib/hooks/employment/useFormEmployment';

const Employment = () => {
	const [t] = useTranslation('global');

	const { initialValues, validationSchema, handleSubmit, positions, branches } =
		useFormEmployment();

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
											name='name'
											placeholder='Full Name'
										/>
									</div>
									<div className='w-full lg:w-1/2 px-3 mb-3'>
										<Input
											type='email'
											label='Email'
											name='email'
											placeholder='Email'
										/>
									</div>
								</div>
								<div className='flex flex-wrap -mx-3 px-2'>
									<div className='w-full px-3 mb-5'>
										<Select
											id='branch'
											name='branch'
											label='Branch'
											options={branches}
										/>
									</div>
								</div>
								<div className='flex flex-wrap -mx-3 px-2'>
									<div className='w-full px-3 mb-5'>
										<Select
											id='position'
											name='position'
											label='Position Desired'
											options={positions}
										/>
									</div>
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
