import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login';
import Content from './Content';
import NotFound from './NotFound';

const App = ({ authenticated }) => (
  <Switch>
    <Route exact path="/" component={Content} />
    <Route path="/login" component={Login} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
