import PropTypes from 'prop-types';
import { useState } from 'react';
import { UploadIcon } from '../../Icons';
import Loader from '../../Loader';
import PreviewMedia from './PreviewMedia';

const FileUpload = ({ field, form, name, id, meta }) => {
	const [loading, setLoading] = useState(false);
	const [media, setMedia] = useState(null);

	const handleChangeMedia = e => {
		let reader = new FileReader();
		let file = e.target.files[0];
		let extension = e.target.files[0]?.type.split('/')[0];

		setLoading(true);
		reader.onloadend = () => {
			setMedia({
				file,
				preview: reader.result,
				extension
			});

			setLoading(false);
		};

		reader.readAsDataURL(file);
		form.setFieldValue(field.name, file);
	};

	return (
		<>
			<div className='flex items-center justify-center'>
				<label className='w-64 flex flex-col items-center px-4 py-6 mx-4 bg-white text-primary-200 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-primary-200 hover:text-white'>
					<UploadIcon className='w-8 h-8' />
					<span className='mt-2 text-base leading-normal font-primary'>
						Select a file
					</span>
					<input
						type='file'
						className='hidden'
						id={id}
						name={name}
						onChange={e => handleChangeMedia(e)}
					/>
				</label>
			</div>
			{loading && <Loader />}
			{media?.preview && (
				<PreviewMedia extension={media?.extension} src={media?.preview} />
			)}
		</>
	);
};

export default FileUpload;

FileUpload.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	field: PropTypes.object,
	form: PropTypes.object,
	meta: PropTypes.object
};
