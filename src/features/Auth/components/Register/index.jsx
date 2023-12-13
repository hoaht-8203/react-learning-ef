import RegisterForm from '../RegisterForm';

Register.propTypes = {};

function Register(props) {
    const handleSubmit = (values) => {
        console.log('Form Submited', values);
    };

    return <RegisterForm onSubmit={handleSubmit} />;
}

export default Register;
