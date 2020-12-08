import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './styles.css';

import Scaffold from './components/Scaffold';
import Router from './Router';
import State from './State';
import { UserProvider } from './stores/UserStore';

export const App = () => (
  <State>
    <UserProvider>
      <BrowserRouter>
        <Scaffold>
          <Router />
        </Scaffold>
      </BrowserRouter>
    </UserProvider>
  </State>
);

export default App;
