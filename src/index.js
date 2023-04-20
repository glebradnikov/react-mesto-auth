import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { App } from './components/App';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='page'>
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
