import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import User from '../user/User';
import NotFoundPage from '../NotFoundPage';

function AuthenticatedApp() {
  return (
    <Switch>
      <Route path="/user" component={User} />
      <Route
        render={({ location: { pathname } }) =>
          pathname === '/' || pathname === '/login' ? (
            <Redirect to="/user" push />
          ) : (
            <NotFoundPage />
          )
        }
      />
    </Switch>
  );
}

export default AuthenticatedApp;
