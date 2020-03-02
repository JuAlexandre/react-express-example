import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import List from './components/List';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/list' component={List} />
    </Switch>
  );
}

export default App;
