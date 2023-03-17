import React from "react";
import { Formik } from "formik";

const initialValues = {
  email: "",
  password: "",
};

const LoginInForm = (props) => {
  const onSubmit = () => {};
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formikProps) => {
        return (
          <form
            onSubmit={formikProps.handleSubmit}
            onReset={formikProps.handleReset}
          >
            <input type="email" name="email" />
            <input type="text" />
            <input type="submit" value="Send" />
          </form>
        );
      }}
    </Formik>
  );
};

export default LoginInForm;
