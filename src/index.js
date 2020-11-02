import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NavLinksProvider } from './NavLinksContext';
import { NavToggleProvider } from './NavToggleContext';
import { HamburgerProvider } from './HamburgerContext'

ReactDOM.render(
  <HamburgerProvider>
  <NavLinksProvider>
  <NavToggleProvider>
    <App />
  </NavToggleProvider>
  </NavLinksProvider>
  </HamburgerProvider>,
  document.getElementById('root')
);
