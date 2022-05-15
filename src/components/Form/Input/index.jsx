import PropTypes from 'prop-types';
import { Field, useField } from 'formik'


const Input = (props) => {
    
    const { label, name, placeholder,  noLabel, ...rest } = props;
    const [ field, meta ] = useField(props);
    const error = meta.touched && meta.error;
    
    return (
        <>
            <label 
                htmlFor={name} 
                className={`${noLabel ? 'hidden': 'block'} form__label`}
            >
                {label}
            </label> 
            <Field 
                id={name} 
                name={name}
                placeholder={placeholder || label}
                className={`form__input ${error && 'border border-red-500'} `}
                {...field}
                {...rest}    
            ></Field> 
            {error && <p className="text-red-500 text-xs italic">{meta.error}</p>}
        </>
    )
}

export default Input;

Input.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    noLabel: PropTypes.bool 
}
