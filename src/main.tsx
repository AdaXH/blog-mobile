import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/routes';
import 'amfe-flexible';
import './global.module.less';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
