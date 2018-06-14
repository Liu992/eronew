import React, { Component } from "react";
import './Home.scss';
import Language from '../../components/Language';
import asyncComponent  from '../../components/asyncComponent';
const Globe = asyncComponent(() => import(/* webpackChunkName: "foo" */ "../Globe"))

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hei: window.innerHeight
    }
  }
  componentDidMount() {
    if (window.innerWidth <= 768) {
      this.setState({
        hei: 'auto'
      })
    }
  }
  toWhitepaper () {
    this.props.history.replace('/index/home')
  }
  render() {
    let { hei } = this.state;
    return (
      <div className="home">
        <div className="home-content" style={{ height: hei }}>
          <div className="home-content-txt">
            <div className="blockchain">
              <h4>{Language('global.home.title')}</h4>
            </div>
            <p>
              {Language('global.home.content')}
            </p>
            <button onClick={this.toWhitepaper.bind(this)}>
            {Language('global.home.btn')}
            </button>
          </div>
          <div className="home-content-cartoon">
            <Globe />
          </div>
        </div>
      </div>
    )
  }
}

export default Home