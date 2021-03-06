import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
      domain={process.env.REACT_APP_DOMAIN} 
      clientId={process.env.REACT_APP_CLIENTID} 
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
