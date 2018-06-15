import React, { Component } from "react";
import './Header.scss';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      on: true,
      visible: false,
      lang: 'en',
      olshow: false
    }
    this.resize = this.resize.bind(this);
    this.upDown = this.upDown.bind(this)
  }
  componentDidMount() {
    this.screenChange();
    this.resize()
    this.props.headH(this.refs.head.clientHeight)
    this.props.len(window.innerHeight)
  }
  upDown() {
    let { visible } = this.state
    this.setState({
      visible: !visible
    })
  }
  toTop() {
    document.documentElement.scrollTop = 0;
  }
  resize() {
    this.props.len(window.innerHeight);
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
  screenChange() {
    window.addEventListener('resize', this.resize);
  }
  // 中英文切换
  checklang() {
    this.setState({
      lang: this.state.lang === 'zh-CN' ? 'en' : 'zh-CN'
    }, () => {
      this.props.lang(this.state.lang)
    })
  }
  hide() {
    let { visible } = this.state
    this.setState({
      visible: !visible
    })
  }
  stop(e) {
    e.stopPropagation();
  }
  showol () {
    this.setState({
      olshow: !this.state.olshow
    })
  }
  render() {
    let { up } = this.props;
    let { on, visible, lang, olshow } = this.state;
    return (
      <div className={`header ${up}`} ref="head">
        <div className={`menu  ${on ? "none" : "block"}`} onClick={this.upDown}><img src={require('../../assets/image/ic_menu.svg')} alt="" /></div>
        <div className={`navbar-dialog ${visible ? 'block' : 'none'}`} onClick={this.hide.bind(this)}>
        </div>
        <div className={`dialog-box ${visible ? 'dialog-box-show' : ''}`} onClick={this.stop.bind(this)}>
          <div className="top">
            <img src={require('../../assets/image/eroclogo.svg')} alt="" />
          </div>
          <div className="content">
            <ul>
              <li onClick={this.hide.bind(this)}><Link to="/index/home"><FormattedMessage id="global.nav.home" /></Link></li>
              <li onClick={this.hide.bind(this)}><Link to="/index/home"><FormattedMessage id="global.nav.foundation" /></Link></li>
              <li onClick={this.hide.bind(this)}><Link to="/index/home"><FormattedMessage id="global.nav.careers" /></Link></li>
              <li onClick={this.showol.bind(this)}><FormattedMessage id="global.nav.download" /></li>
            </ul>
            <ol className={olshow?'olshow':''}>
              <li onClick={this.hide.bind(this)}><Link to="/index/home"><FormattedMessage id="global.nav.download1" /></Link></li>
              <li onClick={this.hide.bind(this)}><Link to="/index/home"><FormattedMessage id="global.nav.download2" /></Link></li>
              <li onClick={this.hide.bind(this)}><Link to="/index/home"><FormattedMessage id="global.nav.download3" /></Link></li>
            </ol>
          </div>
        </div>
        <div className="logo" ref="logo">
          {/* <img src={require('../../assets/image/logo_graph.svg')} alt=""/> */}
          <img src={require('../../assets/image/eroclogo.svg')} alt="" />
        </div>
        <div className={`nav ${on ? 'flex' : 'none'}`} ref="nav">
          <ul className={lang} onClick={this.toTop.bind(this)}>
            <li><Link to="/index/home"><FormattedMessage id="global.nav.home" /></Link></li>
            <li><Link to="/index/home"><FormattedMessage id="global.nav.foundation" /></Link></li>
            <li><Link to="/index/home"><FormattedMessage id="global.nav.careers" /></Link></li>
            <li><Link to="/index/home"><FormattedMessage id="global.nav.download" /></Link></li>
          </ul>
          <span className="lang" onClick={this.checklang.bind(this)}>{lang === 'zh-CN' ? 'ENGLISH' : '中 文'}</span>
        </div>
        <div className={`smlang-box ${on ? 'none' : 'flex'}`}><span className="smlang" onClick={this.checklang.bind(this)}>{lang === 'zh-CN' ? 'ENGLISH' : '中 文'}</span></div>
      </div>
    )
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }
}

export default Header