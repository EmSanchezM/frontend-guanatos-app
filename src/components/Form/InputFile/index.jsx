import { Field } from 'formik';
import PropTypes from 'prop-types';
import FileUpload from './FileUpload';

const InputFile = ({ name, id }) => {
	return (
		<Field name={name} id={id}>
			{({ field, form, meta }) => (
				<FileUpload field={field} name={name} id={id} form={form} meta={meta} />
			)}
		</Field>
	);
};

export default InputFile;

InputFile.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};
