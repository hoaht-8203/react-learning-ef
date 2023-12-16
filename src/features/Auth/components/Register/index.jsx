import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import { actionRegister } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import { PropTypes } from 'prop-types';

Register.propTypes = {
    closeDialog: PropTypes.func,
};

Register.defaultProps = {
    closeDialog: null,
};

function Register(props) {
    const { closeDialog } = props;
    const { enqueueSnackbar } = useSnackbar();

    const dispatch = useDispatch();
    const register = actionRegister;

    const handleSubmit = async (values) => {
        try {
            values.username = values.email;
            const actionRegister = register(values);
            const resultAction = dispatch(actionRegister);
            const user = unwrapResult(resultAction);
            if (user) {
                enqueueSnackbar('Register succesfully', { variant: 'success' });
                if (closeDialog) closeDialog();
            }
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    };

    return <RegisterForm onSubmit={handleSubmit} />;
}

export default Register;
