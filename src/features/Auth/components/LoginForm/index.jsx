import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Grid, LinearProgress, Typography } from '@mui/material';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
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
    '&.MuiButton-root': {
        backgroundColor: '#03396c',
        '&:hover': {
            backgroundColor: '#00478b',
        },
    },
});

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
    onSubmit: null,
};

function LoginForm(props) {
    const { onSubmit } = props;

    const schema = yup
        .object({
            identifier: yup.string().required('Please enter email!').email('Email is not valid!'),
            password: yup.string().required('Please enter password!'),
        })
        .required();

    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    const { isSubmitting } = form.formState;

    const onSubmitForm = async (values) => {
        if (onSubmit) {
            await onSubmit(values);
        }
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmitForm)}>
            {isSubmitting && <LinearProgress />}
            <BoxRegister>
                <Avatar sx={{ m: 1, bgcolor: '#03396c' }}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <InputField name="identifier" fullWidth id="email" label="Email Address" form={form} />
                        </Grid>
                        <Grid item xs={12}>
                            <PasswordField name="password" label="Password" form={form} />
                        </Grid>
                    </Grid>
                    <ButtonRegister disabled={isSubmitting} type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
                        Sign in
                    </ButtonRegister>
                </Box>
            </BoxRegister>
        </form>
    );
}

export default LoginForm;
