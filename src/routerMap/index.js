import Loadable from 'react-loadable';
import React from 'react';
var H = window.innerHeight;
function MyLoadingComponent() {
  return <div style={{width: '100%', height: H, textAlign: 'center',verticalAlign: 'middle'}}>
   {/* <img style={{width: '40px', height: '40px', margin: '0 auto'}} src={require('../assets/image/loading.svg')} /> */}
  </div>;
}


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
let WhiteBook = Loadable({
  loader: () => import('../view/WhiteBook/WhiteBook.jsx'),
  loading: MyLoadingComponent
});



let routerMap = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/foundation',
    exact: false,
    component: Foundation
  },
  {
    path: '/careers',
    exact: false,
    component: Careers
  }
]

export default routerMap