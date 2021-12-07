import { queryHelpers } from '@testing-library/dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { Component, FormEvent } from 'react';

interface State {}

interface UserInfo {
  email: string;
  password: string;
}

class Login extends Component<any, State> {
  constructor(props: any) {
    super(props);
  }

  onSubmit = (values: UserInfo, FormikHelper: any) => {
    console.log(values, FormikHelper);
    console.log('submit');
  };

  validate = (values: UserInfo) => {
    if (!values.email) {
      return {
        email: 'Email required',
      };
    }

    if (!values.password.trim()) {
      return {
        password: 'Password required',
      };
    }
  };

  render() {
    return (
      <Formik
        initialValues={{ email: '', password: '', showPassword: false }}
        onSubmit={this.onSubmit}
        validate={this.validate}
      >
        {(formikProps: any) => (
          <Form>
            <label>Email</label>
            <Field name="email" />
            <ErrorMessage name="email" component="div" />
            <label>Password</label>
            <Field
              name="password"
              type={formikProps.values.showPassword ? 'text' : 'password'}
            />
            <ErrorMessage name="password" component="div" />
            <Field name="showPassword" type="checkbox" />
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default Login;
