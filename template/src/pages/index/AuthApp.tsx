import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '../../routes/authRoutes';
import NotFoundPage from '../NotFoundPage';

function AuthApp() {
  return (
    <Switch>
      {routes.map((r) => (
        <Route {...r} key={r?.path as string} />
      ))}
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

export default AuthApp;
