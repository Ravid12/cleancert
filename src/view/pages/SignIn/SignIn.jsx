import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';
import { useNavigate } from "react-router-dom";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

export const SignIn = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});

    const navigate = useNavigate();


    const validate = (data) => {
        let errors = {};

        if (!data.email) {
            errors.email = 'Email is required.';
        }

        if (!data.password) {
            errors.password = 'Password is required.';
        }

        return errors;
    };

    const onBackButtonClicked = () => {
        navigate("/");
      }

    const onSubmit = (data, form) => {
        setFormData(data);
        setShowMessage(true);

        navigate("/forum")
    };

    const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
    const getFormErrorMessage = (meta) => {
        return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
    };

    return (
        <div className="m-3">
            <div className="flex justify-content-start flex-wrap mt-6 ml-6 mr-6">
                <div>
                    <Button icon="pi pi-arrow-left" className="p-button-text" onClick={onBackButtonClicked} />
                </div>
            </div>

            <div className="surface-card p-4">
                <Form onSubmit={onSubmit} initialValues={{ email: '', password: '' }} validate={validate} render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="p-fluid">
                        <Field name="email" render={({ input, meta }) => (
                            <div className="mb-5">
                                <span className="p-float-label p-input-icon-right">
                                    <i className="pi pi-envelope" />
                                    <InputText id="email" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                    <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Email*</label>
                                </span>
                                {getFormErrorMessage(meta)}
                            </div>
                        )} />
                        <Field name="password" render={({ input, meta }) => (
                            <div className="mb-5">
                                <span className="p-float-label">
                                    <Password id="password" {...input} toggleMask className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                    <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Password*</label>
                                </span>
                                {getFormErrorMessage(meta)}
                            </div>
                        )} />
                        <Button type="submit" label="Sign in" className="p-mt-2" />
                    </form>
                )} />
                <div className='mt-4 text-sm text-center'>
                    Don't have an account? <a href='/register'>Register</a> 
                </div>
            </div>
        </div>
    );
}