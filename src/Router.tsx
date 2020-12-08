import React from 'react';

import { Switch, Route } from "react-router-dom";

import MobxPage from './pages/MobxPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import CommentsPage from './pages/CommentsPage';

export const Router = () => (
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route path="/about/:id">
      <AboutPage />
    </Route>
    <Route exact path="/comments">
      <CommentsPage />
    </Route>
    <Route exact path="/login">
      <LoginPage />
    </Route>
    <Route exact path="/mobx">
      <MobxPage />
    </Route>
  </Switch>
);

export default Router;
