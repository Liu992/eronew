import React from 'react';
import 'babel-polyfill';
import './index.css';
import './assets/css/common.css';
import reactDOMPolyfill from 'react-dom-polyfill';
// 国际化

import { addLocaleData } from 'react-intl';
import 'intl';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
addLocaleData([...zh, ...en]);
const ReactDOM = reactDOMPolyfill(React);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
