import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled } = props;
    const { control } = form;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                return (
                    <TextField {...field} label={label} name={name} disabled={disabled} fullWidth />
                );
            }}
        />
    );
}

export default InputField;
