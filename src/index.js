import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/common.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
