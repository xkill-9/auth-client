import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signInUser } from './signinAction';


const propTypes = {
  signInUser: PropTypes.func,
  handleSubmit: PropTypes.func,
  fields: PropTypes.array,
};

class SignInForm extends Component {

  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({ email, password }) {
    this.props.signInUser({ email, password });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className="form-group">
          <label htmlFor="email">Email:</label>
          <Field className="form-control" component="input" type="email" name="email" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field className="form-control" component="input" type="password" name="password" />
        </fieldset>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}


SignInForm.propTypes = propTypes;

const withForm = reduxForm({
  form: 'signin',
})(SignInForm);

const SignInFormContainer = connect(
  null,
  { signInUser }
)(withForm);

export default SignInFormContainer;
