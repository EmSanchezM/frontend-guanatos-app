import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InputFile } from '../../../../components/Form';
import { postGallery } from '../../../../lib/services/publisher';

const GalleryForm = () => {
	const navigate = useNavigate();

	const [galleryImages, setGalleryImages] = useState({
		imageOne: '',
		imageTwo: '',
		imageThree: '',
		imageFour: '',
		imageFive: '',
		imageSix: ''
	});

	const handleSubmit = (values, submitProps) => {
		const formData = new FormData();
		let files = [];

		files.push(values.imageOne);
		files.push(values.imageTwo);
		files.push(values.imageThree);
		files.push(values.imageFour);
		files.push(values.imageFive);
		files.push(values.imageSix);

		formData.append('section', 'gallery');
		formData.append('media', files);

		postGallery(formData);
		navigate('/publisher/gallery');

		submitProps.setSubmitting(false);
		submitProps.resetForm();
		setGalleryImages({
			imageOne: '',
			imageTwo: '',
			imageThree: '',
			imageFour: '',
			imageFive: '',
			imageSix: ''
		});
	};

	return (
		<>
			<h4 className='font-bold font-primary text-center my-4'>
				Section Gallery
			</h4>
			<p className='font-bold font-primary my-2'>
				Add images display in front view{' '}
			</p>
			<ToastContainer autoClose={3000} />
			<Formik initialValues={galleryImages} onSubmit={handleSubmit}>
				<Form>
					<section className='grid grid-cols-1 md:grid-cols-3 gap-4'>
						<article className='border-2 border-dashed border-gray-500 py-6'>
							<InputFile name='imageOne' id='imageOne' />
						</article>
						<article className='border-2 border-dashed border-gray-500 py-6'>
							<InputFile name='imageTwo' id='imageTwo' />
						</article>
						<article className='border-2 border-dashed border-gray-500 py-6'>
							<InputFile name='imageThree' id='imageThree' />
						</article>
						<article className='border-2 border-dashed border-gray-500 py-6'>
							<InputFile name='imageFour' id='imageFour' />
						</article>
						<article className='border-2 border-dashed border-gray-500 py-6'>
							<InputFile name='imageFive' id='imageFive' />
						</article>
						<article className='border-2 border-dashed border-gray-500 py-6'>
							<InputFile name='imageSix' id='imageSix' />
						</article>
					</section>
					<button
						type='submit'
						className='border-2 border-primary-200 rounded-md px-4 py-2 mx-1 my-2 fond-bold'
					>
						Confirm Gallery
					</button>
				</Form>
			</Formik>
		</>
	);
};

export default GalleryForm;
