import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class RouteInfo extends Component {
  render() {
    let { routes } = this.props;
    return routes.map((item, index) => {
      return (
        <Route key={index} exact={item.exact} path={item.path} render={(props) => {
          return <item.component {...props} route={item.children} />
        }} />
      )
    })
  }
}

export default RouteInfo