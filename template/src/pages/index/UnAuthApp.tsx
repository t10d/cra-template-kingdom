import * as React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import routes from '../../routes/unAuthRoutes';

function UnAuthApp() {
  return (
    <Switch>
      {routes.map((r) => (
        <Route {...r} key={r?.path as string} />
      ))}
      <Route>
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export default UnAuthApp;
