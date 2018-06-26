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
    //给页面绑定滑轮滚动事件  
    if (document.addEventListener) {//firefox  
      document.addEventListener('DOMMouseScroll', this.throttle(this.changeScroll, 500, 500));  
    }  
    //滚动滑轮触发scrollFunc方法  //ie 谷歌  
    window.onmousewheel = document.onmousewheel = this.throttle(this.changeScroll, 500, 500)
    // window.addEventListener('scroll', this.throttle(this.changeScroll, 500, 1000));
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
  changeScroll(e) {
    // 鼠标滚轮方向 
    if (!e) {
      return;
    }
      e = e || window.event; 
      if (e.view.scrollY&&e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件          
          if (e.wheelDelta > 0) { //当滑轮向上滚动时  
              this.setState({
                up: 'down'
              })
          }  
          if (e.wheelDelta < 0) { //当滑轮向下滚动时  
            this.setState({
              up: 'up'
            })
          }  
      } else if (e.view.scrollY&&e.detail) {  //Firefox滑轮事件  
          if (e.detail> 0) { //当滑轮向上滚动时  
            this.setState({
              up: 'down'
            })
          }  
          if (e.detail< 0) { //当滑轮向下滚动时  
            this.setState({
              up: 'up'
            })
          }  
      }else {
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
    //window.removeEventListener('scroll', this.changeScroll);
  }
}

export default Index