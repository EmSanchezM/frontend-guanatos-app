import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useHistory } from 'react-router';
/*NOTIFICATIONS CSS*/
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/*COMPONENTS FORM*/
import { InputFile } from '../../../components/Form';
/*SERVICES PUBLISHER*/
import PublisherService from '../../../services/publisher';

const VariantMediaForm = () => {
	const history = useHistory();
	const [variantMedia, setVariantMedia] = useState({
		fileOne: '',
		fileTwo: '',
		fileThree: ''
	});

	const [, setAllMedia] = useState([]);

	const handleSubmit = (values, submitProps) => {
		const formData = new FormData();
		let files = [];

		for (let value in values) {
			files.push(values[value]);
		}

		formData.append('section', 'variant');
		formData.append('files', files);

		PublisherService.postAllMedia(
			formData,
			setAllMedia,
			history,
			'/publicist/media'
		);

		submitProps.setSubmitting(false);
		submitProps.resetForm();
		setVariantMedia({
			fileOne: '',
			fileTwo: '',
			fileThree: ''
		});
	};

	return (
		<>
			<h4 className='font-bold font-primary text-center my-4'>Section Media</h4>
			<p className='font-bold font-primary my-2'>
				Add images or videos to display in front view{' '}
			</p>
			<ToastContainer autoClose={3000} />
			<Formik initialValues={variantMedia} onSubmit={handleSubmit}>
				<Form>
					<section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<article className='border-2 border-dashed border-gray-500 py-6'>
							<InputFile name='fileOne' id='fileOne' />
						</article>
						<article className='border-2 border-dashed border-gray-500 py-6'>
							<InputFile name='fileTwo' id='fileTwo' />
						</article>
						<article className='col-span-1 md:col-span-2 border-2 border-dashed border-gray-500 py-6'>
							<InputFile name='fileThree' id='fileThree' />
						</article>
					</section>
					<button
						type='submit'
						className='border-2 border-primary-200 rounded-md px-4 py-2 mx-1 my-2 fond-bold'
					>
						Confirm Media
					</button>
				</Form>
			</Formik>
		</>
	);
};

export default VariantMediaForm;