import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NavToggleProvider } from './NavToggleContext';

ReactDOM.render(
  <NavToggleProvider>
    <App />,
  </NavToggleProvider>,
  document.getElementById('root')
);
