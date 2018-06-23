import React, { Component } from "react";
import './Index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RouteInfo from '../../components/RouteInfo';
import { IntlProvider } from 'react-intl';

import zh_CN from '../../i18n/zh-CN';
import en_US from '../../i18n/en-US';
let messages = {};
messages["en"] = en_US;

messages["zh-CN"] = zh_CN;

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      up: '',
      headH: 72,
      langFlag: 'en'
    }
    this.changeScroll = this.changeScroll.bind(this)
    this.headH = this.headH.bind(this)
  }
  componentDidMount() {
    this.winScroll()
  }
  winScroll() {
    window.addEventListener('scroll', this.throttle(this.changeScroll, 500, 1000));
  }
  headH(h) {
    this.setState({
      headH: h
    })
  }
  // 简单的节流函数
  throttle(func, wait, mustRun) {
    var timeout,
      startTime = new Date();

    return function () {
      var context = this,
        args = arguments,
        curTime = new Date();

      clearTimeout(timeout);
      // 如果达到了规定的触发时间间隔，触发 handler
      if (curTime - startTime >= mustRun) {
        func.apply(context, args);
        startTime = curTime;
        // 没达到触发间隔，重新设定定时器
      } else {
        timeout = setTimeout(func, wait);
      }
    };
  }
  changeScroll() {
    let { headH } = this.state;
    if (window.scrollY > headH + 200 && window.scrollY < window.innerHeight - 120) {
      this.setState({
        up: 'up'
      })
    } else if (window.scrollY > headH && window.scrollY >= window.innerHeight - 120) {
      this.setState({
        up: 'down'
      })
    } else {
      this.setState({
        up: ''
      })
    }
  }
  language(ch) {
    this.setState({
      langFlag: ch
    })
  }
  render() {
    let { route } = this.props;
    let { up } = this.state;
    return (
      <div className="wrapper">
        <IntlProvider
            locale={this.state.langFlag}
            messages={messages[this.state.langFlag]}
          >
            <Header up={up} headH={this.headH} lang={this.language.bind(this)}/>
          </IntlProvider>
          <div className="wrapper-content">
            <IntlProvider
              locale={this.state.langFlag}
              messages={messages[this.state.langFlag]}>
              <RouteInfo routes={route}/>
            </IntlProvider>
            <IntlProvider
              locale={this.state.langFlag}
              messages={messages[this.state.langFlag]}>
              <Footer />
            </IntlProvider>
          </div>
          
      </div>
    )
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeScroll);
  }
}

export default Index