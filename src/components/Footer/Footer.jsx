import React, { Component } from "react";
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <span>© 2018 eRoc Foundation. <i></i>All rights reserved.</span>
        <span>
          <a href="mailto:Xihua.Duan@EROC.IO" title="Xihua.Duan@EROC.IO">Contact Email</a>
          <i> | </i>
          <a href="/">Privacy Policy</a></span>
      </div>
    )
  }
}

export default Footer