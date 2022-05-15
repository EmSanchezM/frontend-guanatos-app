import { Field, useField } from 'formik';
import PropTypes from 'prop-types';

const InputToggle = props => {
	const { label, name, ...rest } = props;

	const [field, meta] = useField(props);
	const error = meta.touched && meta.error;

	return (
		<>
			<div className='form__toggle'>
				<Field
					type='checkbox'
					id={name}
					name={name}
					checked={field.value || false}
					className={`${
						field.value && 'right-0 border-green-400'
					} absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer`}
					{...field}
					{...rest}
				></Field>
				<label
					htmlFor={name}
					className={`${
						field.value && 'bg-green-400'
					} block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer`}
				></label>
			</div>
			{!field.value ? (
				<label htmlFor={name} className='toggle-msg'>{`No ${label}`}</label>
			) : (
				<label htmlFor={name} className='toggle-msg'>
					{label}
				</label>
			)}
			{error && <p className='text-red-500 text-xs italic'>{meta.error}</p>}
		</>
	);
};

export default InputToggle;

InputToggle.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};
