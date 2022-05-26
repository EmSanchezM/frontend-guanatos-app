import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { InputFile } from '../../../../components/Form';
import { postCarousel } from '../../../../lib/services/publisher';

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
		navigate('/publisher/carousel');

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
					<section className='grid grid-cols-1 gap-4'>
						<div className='w-full px-3 mb-5'>
							<InputFile
								type='file'
								label='Image or Video'
								name='file'
								id='file'
								placeholder='Image or Video'
							/>
						</div>
					</section>
					<button
						type='submit'
						className='border-2 border-primary-200 rounded-md px-6 py-2 mx-1 fond-bold'
					>
						Save
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default FormCarousel;
