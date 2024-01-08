import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Store from './reducers/store.js';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';


const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
      <App/>
  </Provider> 
);
