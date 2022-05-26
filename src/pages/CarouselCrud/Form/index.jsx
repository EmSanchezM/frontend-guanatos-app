import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { InputFileWithoutPreview } from '../../../components/Form';
import { postCarousel } from '../../../lib/services/publisher';

const FormCarousel = () => {
	const navigate = useNavigate();

	const [formCarousel, setFormCarousel] = useState({
		file: null
	});

	const handleSubmit = values => {
		const formData = new FormData();
		formData.append('section', 'carousel');
		formData.append('media', values.file);

		postCarousel(formData);
		navigate('/publicist/start');

		setFormCarousel({
			file: null
		});
	};

	return (
		<div className='border-2 border-primary-200 rounded-md'>
			<h2 className='font-bold font-primary px-2 my-2'>
				Add New Slide to Carousel
			</h2>
			<hr />
			<Formik initialValues={formCarousel} onSubmit={handleSubmit}>
				<Form className='w-full'>
					<div className='flex flex-wrap -mx-3 px-2'>
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
