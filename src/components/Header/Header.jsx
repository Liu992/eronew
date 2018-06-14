import React, { Component } from "react";
import './Header.scss';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      on: true,
      visible: false
    }
    this.resize = this.resize.bind(this);
    this.upDown = this.upDown.bind(this)
  }
  componentDidMount () {
    this.screenChange(); 
    this.resize()
    this.props.headH(this.refs.head.clientHeight)
  }
  upDown () {
    let { visible } = this.state
    this.setState({
      visible: !visible
    })
  }
  toTop () {
    document.documentElement.scrollTop = 0;
  }
  resize () {
    let { logo, nav } = this.refs;
    if (nav.offsetLeft-logo.offsetLeft-logo.clientWidth<48) {
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
  render() {
    let { up } = this.props;
    let { on, visible } = this.state;
    return (
      <div className={`header ${up}`} ref="head">
        <div className="logo" ref="logo">
          <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1528366952&di=2eedf80e8b4425bf19e6518df60bdd11&src=http://img.zcool.cn/community/01540058ddbaa1a801219c77dc966d.jpg" alt=""/>
          <h2>e r o c</h2>
        </div>
        <div className={`nav ${on?'block':'none'}`} ref="nav">
          <ul onClick={this.toTop.bind(this)}>
            <li><Link to="/index/home">HOME</Link></li>
            <li><Link to="/index/foundation">FOUNDATION</Link></li>
            <li><Link to="/index/careers">CAREERS</Link></li>
            <li><Link to="/index/download">DOWNLOAD</Link></li>
          </ul>
        </div>
        <div className={`navbar ${on?"none":"block"}`}>
          <div className="menu" onClick={this.upDown}><img src={require('../../assets/image/Mobile.png')} alt=""/></div>
          <ul className={`navbar-down ${visible?'block': 'none'}`}>
            <li><Link to="/index/home">HOME</Link></li>
            <li><Link to="/index/foundation">FOUNDATION</Link></li>
            <li><Link to="/index/careers">CAREERS</Link></li>
            <li><Link to="/index/download">DOWNLOAD</Link></li>
          </ul>
        </div>
      </div>
    )
  }
  componentWillUnmount() {         
    window.removeEventListener('resize',this.resize);  
  }
}

export default Header