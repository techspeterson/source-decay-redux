import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import { Helmet } from "react-helmet";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Helmet
      titleTemplate="Source Decay - %s"
    >
      <meta property="og:image" content="./assets/bg.jpg" />
      <meta name="description" content="Source Decay - A React experiment" />
    </Helmet>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
