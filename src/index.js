import React from 'react';
import ReactDOM from 'react-dom';
import './Sass/Base.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './Data/content';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
