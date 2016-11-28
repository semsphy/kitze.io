import React from 'react';
import {Route} from 'mobx-router';

//components
import Home from 'views/Home';
import ThoughtsPage from 'views/ThoughtsPage';
import ThoughtPage from 'views/ThoughtPage';
import LoginPage from 'views/LoginPage';
import NewThoughtPage from 'views/NewThoughtPage';

const paths = {
  home: new Route({
    id: 'home',
    component: <Home/>,
    path: '/'
  }),
  thoughts: new Route({
    id: 'thoughts',
    component: <ThoughtsPage/>,
    path: '/thoughts/:tag?'
  }),
  newThought: new Route({
    id: 'new-thought',
    component: <NewThoughtPage/>,
    path: '/new-thought'
  }),
  login: new Route({
    id: 'login',
    component: <LoginPage/>,
    path: '/login'
  }),
  thought: new Route({
    id: 'thought',
    component: <ThoughtPage/>,
    path: '/thought/:slug'
  })
};

export default paths;
