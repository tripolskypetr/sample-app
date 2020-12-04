import React from 'react';

import { Switch, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

export const Router = () => (
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route path="/about/:id">
      <AboutPage />
    </Route>
  </Switch>
);

export default Router;
