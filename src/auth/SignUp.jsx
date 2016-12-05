import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const propTypes = {
  handleSubmit: PropTypes.func,
};

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Please enter an email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) errors.password = 'Please enter a password';
  if (!values.passwordConfirm) errors.passwordConfirm = 'Please enter a password confirmation';
  if (values.password !== values.passwordConfirm) {
    errors.password = 'Passwords does not match';
  }
  return errors;
};

const warn = values => {
  const warnings = {};
  if (values.password && values.password.length < 8) {
    warnings.password = 'Your password should have more than 8 characters';
  }
  return warnings;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div
    className={`form-group ${(warning ? 'has-warning' : '')} ${((touched && error) ? 'has-error' : '')}`}
  >
    <label className="control-label">{label}:</label>
    <input className="form-control " {...input} placeholder={label} type={type} />
    {touched && ((error && <span className="help-block">{error}</span>) || (warning && <span className="help-block">{warning}</span>))}
  </div>
);

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp({email, password, passwordConfirm}) {

  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleSignUp)}>
        <Field
          className="form-control"
          component={renderField}
          type="email"
          name="email"
          label="Email"
        />
        <Field
          label="Password"
          component={renderField}
          type="password"
          name="password"
        />
        <Field
          label="Confirm Password"
          component={renderField}
          type="password"
          name="passwordConfirm"
        />
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    );
  }
}

SignUp.propTypes = propTypes;

const withForm = reduxForm({
  form: 'signup',
  validate,
  warn,
})(SignUp);

export default withForm;
