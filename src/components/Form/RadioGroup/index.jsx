import { Field, useField } from 'formik';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

const RadioGroup = props => {
	const { label, name, placeholder, options, ...rest } = props;

	const [, meta] = useField(name);
	const error = meta.touched && meta.error;

	return (
		<div>
			<label htmlFor={name} className=''>
				{label}
			</label>
			<Field name={name} {...rest}>
				{({ field }) => {
					return options.map(option => {
						const id = `${name}-${option.value}`;
						return (
							<Fragment key={option.value}>
								<input
									{...field}
									type='radio'
									id={id}
									value={option.value}
									checked={field.value === option.value}
								/>
								<label htmlFor={id}>{option.name}</label>
							</Fragment>
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
