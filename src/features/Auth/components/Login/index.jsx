import { unwrapResult } from '@reduxjs/toolkit';
import { actionLogin } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';

Login.propTypes = {
    closeDialog: PropTypes.func,
};

Login.defaultProps = {
    closeDialog: null,
};

function Login(props) {
    const { closeDialog } = props;
    const { enqueueSnackbar } = useSnackbar();

    const dispatch = useDispatch();
    const login = actionLogin;

    const handleSubmit = async (values) => {
        try {
            const actionLogin = login(values);
            const resultAction = await dispatch(actionLogin);
            unwrapResult(resultAction);
            if (closeDialog) closeDialog();
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    };

    return <LoginForm onSubmit={handleSubmit} />;
}

export default Login;
