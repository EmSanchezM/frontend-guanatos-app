import PropTypes from 'prop-types';

const FileUpload = ({ field, form, name, id, meta }) => {
	const handleChangeMedia = e => {
		let file = e.target.files[0];

		form.setFieldValue(field.name, file);
	};

	return (
		<>
			<input
				type='file'
				className='border-gray-400'
				id={id}
				name={name}
				onChange={e => handleChangeMedia(e)}
			/>
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
