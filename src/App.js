import React from 'react';
import { StoreProvider, createStore } from 'easy-peasy';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import model from './model';
import Home from './pages/Home';

const store = createStore(model);

const App = () => {
  return (
    <StoreProvider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </StoreProvider>
  );
};

export default App;
