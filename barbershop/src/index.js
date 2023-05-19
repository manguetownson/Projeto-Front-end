import React from 'react';
import Routes from './routes';
import {Provider} from 'react-redux';
import {createRoot} from 'react-dom/client';
import store from './store';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  
  );



