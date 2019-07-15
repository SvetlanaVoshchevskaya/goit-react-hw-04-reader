import React from 'react';
import { Route } from 'react-router-dom';
import Reader from './components/Reader/Reader';
import './App.css';

const App = () => (
  <div>
    <Route path="/reader" exect component={Reader} />
  </div>
);

export default App;
