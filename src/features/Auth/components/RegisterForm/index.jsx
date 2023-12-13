import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

const BoxRegister = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const ButtonRegister = styled(Button)({
    backgroundColor: '#03396c',
    ':hover': {
        backgroundColor: '#00478b',
    },
});

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
    onSubmit: null,
};

function RegisterForm(props) {
    const { onSubmit } = props;

    const schema = yup
        .object({
            fullname: yup
                .string()
                .required('Please enter full name!')
                .min(5, 'Full name is too short!')
                .max(30, 'Full name is too long!'),
            email: yup.string().required('Please enter email!').email('Email is not valid!'),
            password: yup
                .string()
                .required('Please enter password!')
                .min(8, 'Password minimum 8 characters!')
                .max(20, 'Password maximum 20 characters!'),
            passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Password confirm must match with password!'),
        })
        .required();

    const form = useForm({
        defaultValues: {
            fullname: '',
            email: '',
            password: '',
            passwordConfirm: '',
        },
        resolver: yupResolver(schema),
    });

    const onSubmitForm = (values) => {
        if (onSubmit) {
            onSubmit(values);
        }
        form.reset();
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmitForm)}>
            <BoxRegister>
                <Avatar sx={{ m: 1, bgcolor: '#03396c' }}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <InputField name="fullname" fullWidth id="fullname" label="Full Name" form={form} />
                        </Grid>
                        <Grid item xs={12}>
                            <InputField name="email" fullWidth id="email" label="Email Address *" form={form} />
                        </Grid>
                        <Grid item xs={12}>
                            <InputField
                                type="password"
                                name="password"
                                fullWidth
                                id="password"
                                label="Password *"
                                form={form}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputField
                                type="password"
                                name="passwordConfirm"
                                fullWidth
                                id="passwordConfirm"
                                label="password Confirm *"
                                form={form}
                            />
                        </Grid>
                    </Grid>
                    <ButtonRegister type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
                        Sign Up
                    </ButtonRegister>
                </Box>
            </BoxRegister>
        </form>
    );
}

export default RegisterForm;