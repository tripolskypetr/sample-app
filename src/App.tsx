import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './styles.css';

import Scaffold from './components/Scaffold';
import Router from './Router';
import State from './State';

export const App = () => (
  <State>
    <BrowserRouter>
      <Scaffold>
        <Router />
      </Scaffold>
    </BrowserRouter>
  </State>
);

export default App;
