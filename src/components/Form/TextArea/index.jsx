import { Field, useField } from 'formik';
import PropTypes from 'prop-types';

const TextArea = props => {
	const { label, name, placeholder, cols, rows, noLabel, ...rest } = props;

	const [field, meta] = useField(props);
	const error = meta.touched && meta.error;

	return (
		<>
			<label
				htmlFor={name}
				className={`${noLabel ? 'hidden' : 'block'} form__label`}
			>
				{label}
			</label>
			<Field
				as='textarea'
				name={name}
				placeholder={placeholder || label}
				cols={cols || '80'}
				rows={rows || '10'}
				className={`form__input ${error && 'border border-red-500'} `}
				{...field}
				{...rest}
			></Field>
			{error && <p className='text-red-500 text-xs italic'>{meta.error}</p>}
		</>
	);
};

export default TextArea;

TextArea.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	cols: PropTypes.number,
	rows: PropTypes.number
};
