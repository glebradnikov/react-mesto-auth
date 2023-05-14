import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import { App } from './components/App';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <HashRouter basename='/'>
      <div className='page'>
        <App />
      </div>
    </HashRouter>
  </React.StrictMode>
);
