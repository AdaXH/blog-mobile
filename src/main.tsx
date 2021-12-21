import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/routes';
import './global.module.less';

import 'amfe-flexible';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
