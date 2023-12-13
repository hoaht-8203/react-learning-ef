import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
};

InputField.defaultProps = {
    form: null,
    name: null,
    label: null,
    disabled: false,
    type: 'text',
};

function InputField(props) {
    const { form, name, label, disabled, type } = props;
    const { control } = form;
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { invalid, error } }) => {
                return (
                    <TextField
                        {...field}
                        type={type}
                        label={label}
                        name={name}
                        disabled={disabled}
                        fullWidth
                        error={invalid}
                        helperText={error && error.message}
                    />
                );
            }}
        />
    );
}

export default InputField;
