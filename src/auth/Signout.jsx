import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { signOutUser } from './authActions';

const propTypes = {
  signOutUser: PropTypes.func,
};

class Signout extends Component {

  componentWillMount() {
    this.props.signOutUser();
  }

  render() {
    return (
      <div>
        Sorry to see you go
      </div>
    );
  }
}

Signout.propTypes = propTypes;


export default connect(
  null,
  { signOutUser }
)(Signout);
