import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-fw7udd5q0zl3o6ig.us.auth0.com"
    clientId="lyfmMPqaqY6lMi2KLFXyfgrVvlcI0qF8"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Auth0Provider>
);
