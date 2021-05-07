import * as React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Login from '../login/Login';
import ForgotPassword from '../forgot-password/ForgotPassword';
import ResetPassword from '../ResetPassword';

function UnauthenticatedApp() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password/:id" component={ResetPassword} exact />
      <Route>
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export default UnauthenticatedApp;
