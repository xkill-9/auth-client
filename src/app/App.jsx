import React, { PropTypes } from 'react';
import Header from './Header';

require('style!bootstrap/dist/css/bootstrap.min.css');

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
};

const App = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

App.propTypes = propTypes;

export default App;
