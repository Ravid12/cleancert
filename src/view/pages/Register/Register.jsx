import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import { classNames } from "primereact/utils";
import { useNavigate } from "react-router-dom";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

export const Register = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const onBackButtonClicked = () => {
    navigate("/");
  }

  const validate = (data) => {
    let errors = {};

    if (!data.name) {
      errors.name = "Name is required.";
    }

    if (!data.country) {
      errors.country = "Country is required.";
    }

    if (!data.region) {
      errors.region = "Region is required.";
    }

    if (!data.contact) {
      errors.contact = "Contact is required.";
    }

    if (!data.password) {
      errors.password = "Password is required.";
    }

    return errors;
  };

  const onSubmit = (data, form) => {
    setFormData(data);
    setShowMessage(true);

    form.restart();
  };

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };

  const dialogFooter = (
    <div className="text-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );

  return (
    <>
      <div className="flex justify-content-start flex-wrap mt-6 ml-6 mr-6">
        <div>
          <Button icon="pi pi-arrow-left" className="p-button-text" onClick={onBackButtonClicked} />
        </div>
      </div>
      <div className="ml-4 mr-4">
        <Dialog
          visible={showMessage}
          onHide={() => setShowMessage(false)}
          position="top"
          footer={dialogFooter}
          showHeader={false}
          breakpoints={{ "960px": "80vw" }}
          style={{ width: "30vw" }}
        >
          <div className="flex align-items-center flex-column pt-6 px-3">
            <i
              className="pi pi-check-circle"
              style={{ fontSize: "5rem", color: "var(--green-500)" }}
            ></i>
            <div className="text-900 font-bold text-xl mt-5">
              Registration Successful!
            </div>
            <p className="line-height-3 my-4">
              Your account is registered under name <b>{formData.name}</b>. It'll
              be valid for 30 days without activation. Please check{" "}
              <b>{formData.email}</b> for activation instructions.
            </p>
          </div>
        </Dialog>

        <div className="surface-card p-4">
          <span className="text-900 text-2xl font-medium mb-4 block">
            Register
          </span>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              name: "",
              country: "",
              region: "",
              contact: "",
              password: "",
            }}
            validate={validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="p-fluid">
                <Field
                  name="name"
                  render={({ input, meta }) => (
                    <>
                      <div className="mb-2">
                        <label
                          htmlFor="name"
                        >
                          Full Name
                        </label>
                      </div>
                      <div className="mb-5">
                        <span className="p-float-label">
                          <InputText
                            id="name"
                            {...input}
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                            })} />
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    </>
                  )} />
                <Field
                  name="country"
                  render={({ input, meta }) => (
                    <>
                      <div className="mb-2">
                        <label
                          htmlFor="country"
                        >
                          Country
                        </label>
                      </div>
                      <div className="mb-5">
                        <span className="p-float-label">
                          <InputText
                            id="country"
                            {...input}
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                            })} />
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    </>
                  )} />
                <Field
                  name="region"
                  render={({ input, meta }) => (
                    <>
                      <div className="mb-2">
                        <label
                          htmlFor="region"
                        >
                          Region
                        </label>
                      </div>
                      <div className="mb-5">
                        <span className="p-float-label">
                          <InputText
                            id="region"
                            {...input}
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                            })} />
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    </>
                  )} />
                <Field
                  name="contact"
                  render={({ input, meta }) => (
                    <><div className="mb-2">
                      <label
                        htmlFor="contact"
                      >
                        Email or Phone
                      </label>
                    </div><div className="mb-5">
                        <span className="p-float-label p-input-icon-right">
                          <InputText
                            id="contact"
                            {...input}
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                            })} />
                        </span>
                        {getFormErrorMessage(meta)}
                      </div></>
                  )} />
                <Field
                  name="password"
                  render={({ input, meta }) => (
                    <><div className="mb-2">
                      <label
                        htmlFor="password"
                      >
                        Password
                      </label>
                    </div><div className="mb-5">
                        <span className="p-float-label">
                          <Password
                            id="password"
                            {...input}
                            toggleMask
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                            })} />
                        </span>
                        {getFormErrorMessage(meta)}
                      </div></>
                  )} />

                <Button type="submit" label="Submit" className="p-mt-2" />
              </form>
            )} />
        </div>
      </div></>
  );
};
