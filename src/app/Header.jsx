import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const propTypes = {
  authenticated: PropTypes.bool,
};

function renderLinks(authenticated) {
  if (authenticated) {
    return (
      <Link
        to="/signout"
        className="btn btn-default navbar-btn"
      >
      Sign Out
      </Link>
    );
  }
  return [
    <Link
      to="/signin"
      className="btn btn-default navbar-btn"
      key="signin"
    >
    Sign in
    </Link>,
    <Link
      key="signup"
      to="/signup"
      className="btn btn-default navbar-btn"
    >
      Sign up
    </Link>,
  ];
}

const Header = ({ authenticated }) => (
  <nav className="navbar navbar-default">
    <Link to="/" className="navbar-brand">Redux Auth</Link>
    {renderLinks(authenticated)}
  </nav>
);

Header.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps)(Header);
