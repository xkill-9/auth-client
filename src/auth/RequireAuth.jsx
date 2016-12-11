import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  const propTypes = {
    authenticated: PropTypes.bool,
  };

  const contextTypes = {
    router: PropTypes.object,
  };

  class Authentication extends Component {

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  Authentication.propTypes = propTypes;
  Authentication.contextTypes = contextTypes;

  return connect(mapStateToProps)(Authentication);
}

