import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signInUser } from './authActions';


const propTypes = {
  signInUser: PropTypes.func,
  handleSubmit: PropTypes.func,
  errorMessage: PropTypes.string,
};

class SignInForm extends Component {

  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({ email, password }) {
    this.props.signInUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
    return '';
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
        {this.renderAlert()}
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}


SignInForm.propTypes = propTypes;

const withForm = reduxForm({
  form: 'signin',
})(SignInForm);

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

const SignInFormContainer = connect(
  mapStateToProps,
  { signInUser }
)(withForm);

export default SignInFormContainer;
