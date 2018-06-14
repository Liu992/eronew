import React, { Component } from "react";
import './Home.scss';
import Globe from '../Globe'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hei: window.innerHeight - 72
    }
  }
  componentDidMount () {
    // this.setState({
    //   carhei: this.refs.cartoon.clientWidth
    // })
  }
  render() {
    let { hei } = this.state;
    return (
      <div className="home">
        <div className="home-content" style={{height: hei}}>
          <div className="home-content-txt">
            <h2>eroc</h2>
            <div className="blockchain">
              <h4>BLOCKCHAIN APP</h4>&nbsp;&nbsp;
              <h4>PLATFORM</h4>
            </div>
            <p>EROC is the Edge Computing Asynchronous Shard Smart Contract Protocol. EROC is also the name of block chain based on this protocol. EROC is the reverse of "Core".</p>
            <button>WHITEPAPER</button>
          </div>
          <div className="home-content-cartoon" ref="cartoon">
            <Globe/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home