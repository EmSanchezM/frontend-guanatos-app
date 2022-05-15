import { Field, useField } from 'formik';
import PropTypes from 'prop-types';

const RadioGroup = props => {
	const { label, name, placeholder, options, ...rest } = props;

	const [meta] = useField();
	const error = meta.touched && meta.error;

	return (
		<div>
			<label htmlFor={name} className=''>
				{label}
			</label>
			<Field name={name} {...rest}>
				{({ field }) => {
					return options.map(option => {
						return (
							<>
								<input
									key={options.id}
									type='radio'
									id={options.value}
									value={option.value}
									{...field}
									checked={field.value === option.value}
								/>
								<label>{option.name}</label>
							</>
						);
					});
				}}
			</Field>
			{error && <p className='text-red-500 text-xs italic'>{meta.error}</p>}
		</div>
	);
};

export default RadioGroup;

RadioGroup.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	options: PropTypes.array
};
