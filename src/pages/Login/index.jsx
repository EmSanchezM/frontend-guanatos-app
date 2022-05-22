/*Managment state form*/
import { Form, Formik } from 'formik';
import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Input } from '../../components/Form';
import authContext from '../../lib/context/auth/authContext';

const Login = () => {
	const AuthContext = useContext(authContext);
	const { authenticated, error, LogIn, user } = AuthContext;

	const [userAuth, setUserAuth] = useState({
		email: '',
		password: ''
	});

	const validationSchema = Yup.object().shape({
		email: Yup.string().required('Email required'),
		password: Yup.string().required('Password required')
	});

	const handleSubmit = (values, submitProps) => {
		LogIn(values);

		submitProps.setSubmitting(false);
		submitProps.resetForm();

		setUserAuth({
			email: '',
			password: ''
		});
	};

	return (
		<section className='login__container'>
			<header className='login__header'>
				<h1 className='login__title'>Sign In</h1>
			</header>
			<article className='login__content'>
				<div>
					<h2 className='font-bold text-2xl'>Guanatos Tacos</h2>
					{!user && error && (
						<div className='login__alert'>
							<div className='ml-4'>
								<span className='login__alert-msg'>{error}</span>
							</div>
						</div>
					)}
					{user && <Navigate to='/publicist/start' replace={true} />}
				</div>
				<div className='mt-10 my-4'>
					<div className='flex flex-col'>
						<Formik
							initialValues={userAuth}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}
						>
							<Form>
								<div className='mb-2 rounded bg-gray-200'>
									<Input
										type='email'
										label='Email'
										placeholder='Email'
										name='email'
									/>
								</div>
								<div className='mb-2 rounded bg-gray-200'>
									<Input
										type='password'
										label='password'
										placeholder='Password'
										name='password'
									/>
								</div>
								<button
									type='submit'
									disabled={authenticated}
									className='login__submit'
								>
									Sign In
								</button>
							</Form>
						</Formik>
					</div>
				</div>
				<Link to='/' className='login__link'>
					Back Home
				</Link>
			</article>
		</section>
	);
};

export default Login;
