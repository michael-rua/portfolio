import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NavLinksProvider } from './NavLinksContext';
import { NavToggleProvider } from './NavToggleContext';

ReactDOM.render(
  <NavLinksProvider>
  <NavToggleProvider>
    <App />
  </NavToggleProvider>
  </NavLinksProvider>,
  document.getElementById('root')
);
