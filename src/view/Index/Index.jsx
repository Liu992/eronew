import React, { Component } from "react";
import './Index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RouteInfo from '../../components/RouteInfo';
import {IntlProvider} from 'react-intl';

import zh_CN from '../../i18n/zh-CN';
import en_US from '../../i18n/en-US';
let messages = {};
messages["en"] = en_US;

messages["zh-CN"] = zh_CN;

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      up: '',
      headH: 72,
      langFlag: 'en',
      len: 'auto'
    }
    this.changeScroll = this.changeScroll.bind(this)
    this.headH = this.headH.bind(this)
  }
  componentDidMount () {
    this.winScroll()
  }
  winScroll() {  
    window.addEventListener('scroll', this.changeScroll);  
  }
  headH (h) {
    this.setState({
      headH: h
    })
  }
  changeScroll () {
    let { headH } = this.state;
    if (window.pageYOffset>headH+200&&window.pageYOffset < window.innerHeight-120) {
      this.setState({
        up: 'up'
      })
    } else if (window.pageYOffset>headH&&window.pageYOffset >= window.innerHeight-120) {
      this.setState({
        up: 'down'
      })
    } else{
      this.setState({
        up: ''
      })
    }
  }
  language (ch) {
    this.setState({
      langFlag: ch
    })
  }
  len (len) {
    this.setState({
      len: len
    })
  }
  render() {
    let { route } = this.props;
    let { up, len } = this.state;
    return (
      <div className="wrapper">
        <IntlProvider
          locale={this.state.langFlag}
          messages={messages[this.state.langFlag]}
          >
          <Header up={up} headH={this.headH} lang={this.language.bind(this)} len={this.len.bind(this)}/>
        </IntlProvider>
        <div className="section">
          <IntlProvider
            locale={this.state.langFlag}
            messages={messages[this.state.langFlag]}>
            <RouteInfo routes={route} len={len}/>
          </IntlProvider>
          <IntlProvider
            locale={this.state.langFlag}
            messages={messages[this.state.langFlag]}>
            <Footer/>
          </IntlProvider>
        </div>
          
      </div>
    )
  }
  componentWillUnmount() {         
    window.removeEventListener('scroll',this.changeScroll);  
  }
}

export default Index