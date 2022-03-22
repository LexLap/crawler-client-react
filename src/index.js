import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/styles.scss";
import reportWebVitals from './reportWebVitals';
import CrawlingForm from './components/crawlingForm';
import CrawlingResult from './components/crawlingResult';

ReactDOM.render(
  <React.StrictMode>
    <CrawlingForm/>
    <CrawlingResult/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
