import React from 'react';
import Login from './components/Login';
import Calender from './components/Calender';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/calender" component={Calender} />
      </Switch>
    </div>
  );
};