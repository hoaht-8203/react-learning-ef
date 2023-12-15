import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

PasswordField.defaultProps = {
    form: null,
    name: null,
    label: null,
    disabled: false,
};

function PasswordField(props) {
    const { form, name, label, disabled } = props;
    const { control } = form;

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <FormControl fullWidth variant="outlined">
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState: { invalid, error } }) => {
                    return (
                        <>
                            <InputLabel error={invalid} htmlFor={name}>
                                {label}
                            </InputLabel>
                            <OutlinedInput
                                {...field}
                                error={invalid}
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label={label}
                                disabled={disabled}
                            />
                            {error && <FormHelperText error>{error.message}</FormHelperText>}
                        </>
                    );
                }}
            />
        </FormControl>
    );
}

export default PasswordField;
