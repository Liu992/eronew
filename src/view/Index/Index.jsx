import React, { Component } from "react";
import './Index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RouteInfo from '../../components/RouteInfo'

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      up: '',
      headH: 72
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
  render() {
    let { route } = this.props;
    let { up } = this.state;
    return (
      <div className="wrapper">
        <Header up={up} headH={this.headH}/>
        <div className="section"  ref="wrap">
          <RouteInfo routes={route}/>
          <Footer/>
        </div>
      </div>
    )
  }
  componentWillUnmount() {         
    window.removeEventListener('scroll',this.changeScroll);  
  }
}

export default Index