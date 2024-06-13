// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // your reducers
  },
});

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
