import * as React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Login from '../Login';

function UnAuthApp() {
  return (
    <Switch>
      <Route path="/login" component={Login} exact />
      <Route>
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export default UnAuthApp;
