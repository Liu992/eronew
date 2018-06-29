import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class RouteInfo extends Component {
  render() {
    let { routes, len, lang } = this.props;
    return routes.map((item, index) => {
      return (
        <Route key={index} exact={item.exact} path={item.path} render={(props) => {
          return item.component ? <item.component len={len} {...props} route={item.children} lang={lang} /> : <Redirect to='/index/home' push={true} />
        }} />
      )
    })
  }
}

export default RouteInfo