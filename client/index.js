import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Store from './reducers/store.js';
import { Provider } from 'react-redux';

// for fetch request
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react/ApiProvider.js";

import ReactDOM from 'react-dom';
import styles from './stylesheets/styles.scss'


const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
      <App/>
  </Provider> 
);
