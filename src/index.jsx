import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';

import App from './app/App';
import SignInForm from './auth/SignInForm';
import SignUp from './auth/SignUp';
import Signout from './auth/Signout';
import reducers from './rootReducer';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={SignInForm} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={SignUp} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-container'));
