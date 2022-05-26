import { Field } from 'formik';
import PropTypes from 'prop-types';
import { ArrowDownIcon } from '../../Icons';

const Select = props => {
	const { label, noLabel, name, placeholder, options, ...rest } = props;

	return (
		<>
			<label
				htmlFor={name}
				className={`${noLabel ? 'hidden' : 'block'} form__label`}
			>
				{label}
			</label>
			<div className='relative inline-block w-full text-gray-700'>
				<Field
					as='select'
					id={name}
					name={name}
					className='w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none'
					placeholder={placeholder || name}
					{...rest}
				>
					{options.map((option, index) => {
						return (
							<option key={`${option._id}-${index}`} value={option._id}>
								{option.name}
							</option>
						);
					})}
				</Field>
				<div className='absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none'>
					<ArrowDownIcon className='w-6 h-6 fill-current' />
				</div>
			</div>
		</>
	);
};

export default Select;

Select.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	options: PropTypes.array.isRequired
};
