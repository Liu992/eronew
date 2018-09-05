import React, { Component } from 'react';

class WhiteBook extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <iframe name="resource" src={require('../../static/whitepaper.pdf')} width="100%" height="100%" scrolling="yes" frameBorder="0"></iframe>
      </div>
    )
  }
}
export default WhiteBook