// importing dependencies, App file, serviceworker, and style file
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// rendering elements from components onto the public file served to the client
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// keeps service worker unregistered by default
serviceWorker.unregister();
