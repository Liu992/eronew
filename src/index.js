import React from 'react';
import 'babel-polyfill';
import './index.css';
import './assets/css/common.css';
import reactDOMPolyfill from 'react-dom-polyfill';
// 国际化

import { addLocaleData, IntlProvider } from 'react-intl';
import 'intl';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import zh_CN from './i18n/zh-CN';
import en_US from './i18n/en-US';
import { Provider, connect } from 'react-redux';
import store from './store';

let messages = {};
messages["en"] = en_US;
messages["zh-CN"] = zh_CN;

const mapStateToProps = (state) => {
  return {
    lang: state.intlLang.lang
  }
}

@connect(mapStateToProps, null, null, { pure: false })
export class AppBox extends React.Component {
  render() {
    let lang = '';
    if (window.localStorage.getItem('lang')) {
      lang = window.localStorage.getItem('lang');
    } else {
      lang = this.props.lang;
    }
    console.log(lang)
    let message;
    if (lang === 'zh') {
      message = zh_CN
    } else {
      message = en_US
    }
    return (
      <IntlProvider
        locale={lang}
        messages={message}
      >
        <App />
      </IntlProvider>
    )
  }
}

addLocaleData([...zh, ...en]);
const ReactDOM = reactDOMPolyfill(React);
ReactDOM.render(<Provider store={store}>
  <AppBox />
</Provider>, document.getElementById('root'));
registerServiceWorker();
