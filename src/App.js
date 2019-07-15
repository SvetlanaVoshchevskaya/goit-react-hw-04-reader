import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Reader from './components/Reader/Reader';
import './App.css';

const App = () => (
  <Switch>
    <Route path="/reader" exect component={Reader} />
    <Redirect push to="/reader" />
  </Switch>
);

export default App;
