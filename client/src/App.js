import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MapRoute from './routes/MapRoute';
import NotFound from './routes/NotFound';
import './App.css';

export default function App() {
  return (
    <Switch>
      <Route path="/map" component={MapRoute} exact />
      <Route path="/" component={NotFound} />
    </Switch>
  );
}
