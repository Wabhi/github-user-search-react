import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GithubProvider} from './Context/Context'
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from "@auth0/auth0-react"

//domainName and ClientId of AuthO.........
//dev-nlnww2h4.us.auth0.com
//3jODGA50cPrI4s20jnjFYQWDS6uZj5mt
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
       domain="dev-nlnww2h4.us.auth0.com"
       clientId="3jODGA50cPrI4s20jnjFYQWDS6uZj5mt"
       redirectUri={window.location.origin} cacheLocation="localstorage">
      <GithubProvider>
      <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
