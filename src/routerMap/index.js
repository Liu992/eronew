import Loadable from 'react-loadable';
import React from 'react';
function MyLoadingComponent() {
  return <div style={{width: '100%', height: '100%', textAlign: 'center'}}>
   loading
  </div>;
}

let Index = Loadable({
  loader: () => import('../view/Index'),
  loading: MyLoadingComponent
});

let Home = Loadable({
  loader: () => import('../view/Home'),
  loading: MyLoadingComponent
});

let Foundation = Loadable({
  loader: () => import('../view/Foundation'),
  loading: MyLoadingComponent
});

let Careers = Loadable({
  loader: () => import('../view/Careers'),
  loading: MyLoadingComponent
});

let Download = Loadable({
  loader: () => import('../view/Download'),
  loading: MyLoadingComponent
});


let routerMap = [
  {
    path: '/',
    exact: true
  },
  {
    path: '/index',
    exact: false,
    component: Index,
    children: [
      {
        path: '/index/home',
        exact: false,
        component: Home
      },
      {
        path: '/index/foundation',
        exact: false,
        component: Foundation
      },
      {
        path: '/index/careers',
        exact: false,
        component: Careers
      },
      {
        path: '/index/download',
        exact: false,
        component: Download
      }
    ]
  }
]

export default routerMap