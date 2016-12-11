import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMessage } from './authActions';

const propTypes = {
  fetchMessage: PropTypes.func,
  message: PropTypes.string,
};

class Feature extends Component {

  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div>
        {this.props.message}
      </div>
    );
  }
}

Feature.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    message: state.auth.message,
  };
}

export default connect(
  mapStateToProps,
  { fetchMessage }
)(Feature);
