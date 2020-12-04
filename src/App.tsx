import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './styles.css';

import Scaffold from './components/Scaffold';
import Router from './Router';

export const App = () => (
  <BrowserRouter>
    <Scaffold>
      <Router />
    </Scaffold>
  </BrowserRouter>
);

export default App;
