import React, { Component } from "react";
import './Header.scss';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import isLang from '../../store/action/intlLang';
import { connect } from 'react-redux';

@connect()
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navlist: [{ 'id': 'global.nav.home', 'path': '/', 'title': 'HOME' }, { 'id': 'global.nav.foundation', 'path': '/foundation', 'title': 'FOUNDATION' }, { 'id': 'global.home.btn', 'path': '/static/media/whitepaper.939243df.pdf', 'title': 'WHITEPAPER' }],
      defaultactive: 0,
      on: true,
      visible: false,
      lang: 'zh-CN',
      dialogshowol: false,
      navolshow: false,
      up: '',
      headH: 72
    }
    this.resize = this.resize.bind(this);
    this.upDown = this.upDown.bind(this);
    this.changeScroll = this.changeScroll.bind(this)
  }
  componentDidMount() {
    let that = this;
    this.winScroll()
    this.screenChange();
    this.resize();
    // document绑定事件
    document.onclick = function (e) {
      if (e.target.innerHTML !== 'DOWNLOAD' && e.target.innerHTML !== '下载') {
        that.setState({
          navolshow: false
        })
      }
    }
    if (!window.localStorage.getItem('lang')) {
      return false;
    }
    if (window.localStorage.getItem('lang') === 'en') {
      this.setState({
        lang: 'en'
      });
    } else {
      this.setState({
        lang: 'zh-CN'
      });
    }
  }
  winScroll = () => {
    //给页面绑定滑轮滚动事件  
    if (document.addEventListener) {//firefox  
      document.addEventListener('DOMMouseScroll', this.throttle(this.changeScroll, 200, 200));
    }
    //滚动滑轮触发scrollFunc方法  //ie 谷歌  
    window.onmousewheel = document.onmousewheel = this.throttle(this.changeScroll, 200, 200)
    // window.addEventListener('scroll', this.throttle(this.changeScroll, 500, 1000));
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
    if (e.view.scrollY && e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件          
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
    } else if (e.view.scrollY && e.detail) {  //Firefox滑轮事件  
      if (e.detail > 0) { //当滑轮向上滚动时  
        this.setState({
          up: 'down'
        })
      }
      if (e.detail < 0) { //当滑轮向下滚动时  
        this.setState({
          up: 'up'
        })
      }
    } else {
      this.setState({
        up: ''
      })
    }
  }
  // 点击icon显示抽屉
  upDown() {
    let { visible } = this.state
    this.setState({
      visible: !visible
    })
  }
  // 切换路由回到顶部
  toTop() {
    document.documentElement.scrollTop = 0;
  }
  // 视窗的改变
  resize() {
    let { logo, nav } = this.refs;
    if (nav.offsetLeft - logo.offsetLeft - logo.clientWidth < 40) {
      this.setState({
        on: false
      })
    } else {
      this.setState({
        on: true
      })
    }
  }
  // 视口改变
  screenChange() {
    window.addEventListener('resize', this.resize);
  }
  // 中英文切换
  checklang() {
    // this.setState({
    //   lang: this.state.lang === 'zh-CN' ? 'en' : 'zh-CN'
    // }, () => {
    //   if (this.state.lang==='zh-CN') {
    //     window.localStorage.setItem('lang','zh')
    //     this.props.dispatch(isLang('zh'))
    //   } else {
    //     window.localStorage.setItem('lang','en')
    //     this.props.dispatch(isLang('en'))
    //   }
    // })
  }
  // 隐藏显示抽屉
  hide() {
    let { visible } = this.state
    this.setState({
      visible: !visible
    })
  }
  // 切换导航高亮
  changeActive(ind) {
    this.setState({
      defaultactive: ind
    })
  }
  // 抽屉中下载栏显示隐藏
  dialogshowol() {
    this.setState({
      dialogshowol: !this.state.dialogshowol
    })
  }
  // 导航栏下载部分的隐藏显示
  navshowol(ind) {
    this.changeActive(ind);
    this.setState({
      navolshow: !this.state.navolshow
    })
  }
  toHome = () => {
    this.props.history.push('/')
  }
  render() {
    let { on, visible, lang, navlist, defaultactive, dialogshowol, navolshow,up } = this.state;
    return (
      <div className={`header ${up}`} ref="head">
        {/* 菜单 */}
        <div className={`menu ${on ? "none" : "block"}`} onClick={this.upDown}><img src={require('../../assets/image/ic_menu.svg')} alt="" /></div>
        <div className={`navbar-dialog ${visible ? 'block' : 'none'}`} onClick={this.hide.bind(this)}>
        </div>
        <div className={`dialog-box ${visible ? 'dialog-box-show' : ''}`}>
          <div className="top">
            <img src={require('../../assets/image/eroclogo.svg')} alt="" />
          </div>
          <div className="content">
            <ul>
              {
                navlist.map((item, ind) => {
                  return (
                    item.id !== 'global.nav.download' ? <li key={ind} onClick={this.hide.bind(this, ind)}><a href={item.path}><FormattedMessage id={item.id} /></a></li> : <li key={ind} onClick={this.dialogshowol.bind(this)}><FormattedMessage id={item.id} /></li>
                  )
                })
              }
            </ul>
            <ol className={dialogshowol ? 'olshow' : ''}>
              <li onClick={this.hide.bind(this)}><a href={require('../../static/whitepaper.pdf')}><FormattedMessage id="global.nav.download1" /></a></li>
              <li onClick={this.hide.bind(this)}><a to="/"><FormattedMessage id="global.nav.download2" /></a></li>
              <li onClick={this.hide.bind(this)}><a to="/"><FormattedMessage id="global.nav.download3" /></a></li>
            </ol>
          </div>
        </div>
        <div className="logo" ref="logo" onClick={this.toHome}>
          <svg height="32px" viewBox="0 0 83 24" version="1.1" fill="#fff" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g stroke="none" strokeWidth="1" fill="#FFF" fillRule="evenodd">
              <path fill="#FFF" d="M11.958409,6 C9.36324761,6 7.1544725,7.674 6.33190791,10 L16.9376135,10 L16.9376135,14 L6.33190791,14 C7.1544725,16.326 9.36324761,18 11.958409,18 C13.6055298,18 15.0992912,17.327 16.1817703,16.24 L19,19.071 C17.197528,20.881 14.7079257,22 11.958409,22 C6.45837971,22 2,17.522 2,12 C2,6.478 6.45837971,2 11.958409,2 C14.7079257,2 17.197528,3.119 19,4.929 L16.1817703,7.76 C15.0992912,6.673 13.6055298,6 11.958409,6 Z M26,12 C26,6.478 30.4712281,2 35.9871076,2 L35.9871076,6 C32.6823737,6 29.994843,8.691 29.994843,12 L29.994843,19.986 L29.994843,22 L26,22 L26,12 Z M49.9690581,2 C55.4839389,2 59.9561657,6.478 59.9561657,12 C59.9561657,17.522 55.4839389,22 49.9690581,22 C44.4541773,22 39.9819506,17.522 39.9819506,12 C39.9819506,6.478 44.4541773,2 49.9690581,2 Z M49.9690581,18 C53.273792,18 55.9613227,15.309 55.9613227,12 C55.9613227,8.691 53.273792,6 49.9690581,6 C46.6643242,6 43.9767936,8.691 43.9767936,12 C43.9767936,15.309 46.6643242,18 49.9690581,18 Z M73.9381162,18 C75.5899838,18 77.08805,17.327 78.1726499,16.24 L81,19.071 C79.1933322,20.881 76.6965554,22 73.9381162,22 C68.4232355,22 63.9510087,17.522 63.9510087,12 C63.9510087,6.478 68.4232355,2 73.9381162,2 C76.6965554,2 79.1933322,3.119 81,4.929 L78.1726499,7.76 C77.08805,6.673 75.5899838,6 73.9381162,6 C70.6333824,6 67.9458517,8.691 67.9458517,12 C67.9458517,15.309 70.6333824,18 73.9381162,18 Z" id="Combined-Shape">
              </path>
            </g>
          </svg>
        </div>
        <div className={`nav ${on ? 'block' : 'none'}`} ref="nav">
          <ul className={lang} onClick={this.toTop.bind(this)}>
            {
              navlist.map((item, ind) => {
                return (
                  item.id !== 'global.nav.download' ? <li key={ind} className={defaultactive === ind ? 'active' : ''} onClick={this.changeActive.bind(this, ind)}><a href={item.path} title={item.title}><FormattedMessage id={item.id} /></a></li> : <li key={ind} className={`default ${defaultactive === ind ? 'active' : ''}`} title={item.title} onClick={this.navshowol.bind(this, ind)}><FormattedMessage id={item.id} />
                    <ol className={navolshow ? 'navolshow' : ''}>
                      {/* <li><a to="/whitepaper"><FormattedMessage id="global.nav.download1" /></a></li> */}
                      <li><a href={require('../../static/whitepaper.pdf')}><FormattedMessage id="global.nav.download1" /></a></li>
                      <li><a href="/"><FormattedMessage id="global.nav.download2" /></a></li>
                      <li><a href="/"><FormattedMessage id="global.nav.download3" /></a></li>
                    </ol>
                  </li>
                )
              })
            }
          </ul>
          <button disabled={true} className="lang" onClick={this.checklang.bind(this)}><span>{lang === 'zh-CN' ? 'English' : '中 文'}</span></button>
        </div>
        <div className={`smlang-box ${on ? 'none' : 'flex'}`}><span className="smlang" onClick={this.checklang.bind(this)}>{lang === 'zh-CN' ? 'ENGLISH' : '中 文'}</span></div>
      </div>
    )
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }
}

export default withRouter(Header)