import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { Input, InputFileWithoutPreview } from '../../../components/Form';
import { postCarousel } from '../../../lib/services/publisher';

const FormCarousel = () => {
	const navigate = useNavigate();

	const [formCarousel, setFormCarousel] = useState({
		title: '',
		badge: '',
		description: '',
		file: null
	});

	const validationSchema = Yup.object().shape({
		title: Yup.string().required('Required'),
		badge: Yup.string().required('Required'),
		description: Yup.string().required('Required')
	});

	const handleSubmit = values => {
		//console.log( values );
		postCarousel(values);
		navigate('/publicist/start');

		setFormCarousel({
			title: '',
			badge: '',
			description: '',
			file: null
		});
	};

	return (
		<div className='border-2 border-primary-200 rounded-md'>
			<h2 className='font-bold font-primary px-2 my-2'>
				Add New Slide to Carousel
			</h2>
			<hr />
			<Formik
				initialValues={formCarousel}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form className='w-full'>
					<div className='flex flex-wrap mt-4 -mx-3 px-2'>
						<div className='w-full md:w-1/2 px-3 mb-5'>
							<Input
								type='text'
								label='title'
								id='title'
								name='title'
								placeholder='title'
							/>
						</div>
						<div className='w-full md:w-1/2 px-3 mb-5'>
							<Input
								type='text'
								label='badge'
								name='badge'
								id='badge'
								placeholder='badge'
							/>
						</div>
					</div>
					<div className='flex flex-wrap -mx-3 px-2'>
						<div className='w-full md:w-1/2 px-3 mb-5'>
							<Input
								type='text'
								label='Description'
								name='description'
								id='description'
								placeholder='description'
							/>
						</div>
						<div className='w-full md:w-1/2 px-3 mb-5'>
							<InputFileWithoutPreview
								type='file'
								label='Image or Video'
								name='file'
								id='file'
								placeholder='Image or Video'
							/>
						</div>
					</div>
					<div className='flex flex-wrap -mx-3 px-4 mb-4'>
						<button
							type='submit'
							className='border-2 border-primary-200 rounded-md px-6 py-2 mx-1 fond-bold'
						>
							Save
						</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
};

export default FormCarousel;
