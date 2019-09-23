import React from 'react';
import { StoreProvider, createStore } from 'easy-peasy';

import model from './model';

const store = createStore(model);

const App = () => {
  return (
    <StoreProvider store={store}>
      <div className='container'>
        <div
          className='row align-items-center justify-content-center'
          style={{ height: '100vh' }}
        >
          <i
            className='fab fa-react mr-2 text-primary'
            style={{ fontSize: '2rem' }}
          />
          <h5 className='text-primary pt-1'>React with Easy Peasy Bundle</h5>
        </div>
      </div>
    </StoreProvider>
  );
};

export default App;
