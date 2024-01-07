import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

const Auth = () => {
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        this is my login page
      </h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          consfirmPassword: "",
        }}
        validationSchema={yup.object({
          firstName: yup
            .string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: yup
            .string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: yup
            .string()
            .email("Invalid email address")
            .required("Required"),
          password: yup
            .string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
              "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
            ),
          confirmPassword: yup
            .string()
            .required("Confirm Password is required")
            .oneOf([yup.ref("password"), null], "Passwords must match"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {/* <Form> is equal to <form onSubmit="formik.handleSubmit" */}
        <Form className="login-form">
          <div className="firstname">
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" />
          </div>

          <div className="lastName">
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" />
          </div>

          <div className="email">
            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" />
          </div>
          <div className="confirmPassword">
            <label htmlFor="confirmPassword">confirmPassword</label>
            <Field name="confirmPassword" type="confirmPassword" />
            <ErrorMessage name="confirmPassword" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
export default Auth;
