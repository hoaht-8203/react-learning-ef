import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup
        .object({
            title: yup.string().required('Please enter title!'),
        })
        .required();

    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    });

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <InputField name="title" label="Todo" form={form} />
        </form>
    );
}

export default TodoForm;
