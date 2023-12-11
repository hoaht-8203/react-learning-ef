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
    const { onSubmit } = props;

    const schema = yup
        .object({
            title: yup
                .string()
                .required('Please enter title!')
                .min(5, 'Title is too short!')
                .max(20, 'Title is too long!'),
        })
        .required();

    const form = useForm({
        defaultValues: {
            title: '',
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
            <InputField name="title" label="Todo" form={form} />
        </form>
    );
}

export default TodoForm;
