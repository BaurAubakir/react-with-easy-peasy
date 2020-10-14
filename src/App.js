import React from 'react';
import { StoreProvider, createStore } from 'easy-peasy';

import model from './model';

const store = createStore(model);

const App = () => {
  return (
    <StoreProvider store={store}>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h2>React with Easy Peasy Bundle</h2>
      </div>
    </StoreProvider>
  );
};

export default App;
