import { Field } from 'formik';
import PropTypes from 'prop-types';
import FileUpload from './FileUpload';

const InputFileWithoutPreview = ({ name, id, label, noLabel }) => {
	return (
		<>
			<label
				htmlFor={name}
				className={`${noLabel ? 'hidden' : 'block'} form__label`}
			>
				{label}
			</label>
			<Field name={name} id={id}>
				{({ field, form, meta }) => (
					<FileUpload
						field={field}
						name={name}
						id={id}
						form={form}
						meta={meta}
					/>
				)}
			</Field>
		</>
	);
};

export default InputFileWithoutPreview;

InputFileWithoutPreview.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};
