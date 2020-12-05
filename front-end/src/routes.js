import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ShowEvents from './pages/ShowEvents'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/show-events" component={ShowEvents} />
        {/* <Route path="/show-events/:id" component={ShowEvents} /> */}
    </Switch>
);

export default Routes;