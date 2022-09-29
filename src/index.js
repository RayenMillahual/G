import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css'
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ym7q9bzd.us.auth0.com"
      clientId="EHZwe8ZM3rLJBRzgXWMkzRH0y6pUaPxN"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();