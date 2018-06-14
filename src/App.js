import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './routerMap';
import RouteInfo from './components/RouteInfo'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <RouteInfo routes={routes}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
