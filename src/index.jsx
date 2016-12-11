import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { AUTH_USER } from './auth/authTypes';
import App from './app/App';
import SignInForm from './auth/SignInForm';
import SignUp from './auth/SignUp';
import Feature from './auth/Feature';
import Signout from './auth/Signout';
import reducers from './rootReducer';
import RequireAuth from './auth/RequireAuth';
import Welcome from './app/Welcome';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="signin" component={SignInForm} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={SignUp} />
        <Route path="feature" component={RequireAuth(Feature)} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-container'));
