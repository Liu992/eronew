import React, { Component } from "react";
import './Home.scss';
import Language from '../../components/Language';
import asyncComponent from '../../components/asyncComponent';
import Footer from '../../components/Footer';
const Globe = asyncComponent(() => import(/* webpackChunkName: "foo" */ "../Globe"));

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pathlist: [
        {
          titleid: 'global.home.path1.title',
          timeid: 'global.home.path1.time'
        },
        {
          titleid: 'global.home.path2.title',
          timeid: 'global.home.path2.time'
        },
        {
          titleid: 'global.home.path3.title',
          timeid: 'global.home.path3.time'
        },
        {
          titleid: 'global.home.path4.title',
          timeid: 'global.home.path4.time'
        }
      ],
      pathactive: 1
    }
  }
  toWhitepaper() {
    this.props.history.replace('/index/home')
  }
  componentDidMount() {
    if (window.innerWidth > 768) {
      this.refs.txt.style.height = window.innerHeight + 'px';
      this.refs.cartoon.style.height = 'auto';
    } else {
      this.refs.cartoon.style.height = window.innerWidth * 0.9 + 'px'
      this.refs.txt.style.height = 'auto';
    }

  }
  render() {
    let { pathlist, pathactive } = this.state;
    return (
      <div className="home">
        <div className="home-content">
          <div className="home-content-txt" ref="txt">
            <div className="blockchain">
              <h4>{Language('global.home.title')}</h4>
            </div>
            <p>
              {Language('global.home.explain')}
            </p>
            <button onClick={this.toWhitepaper.bind(this)}>
              {Language('global.home.btn')}
            </button>
            <p className="tip">{Language('global.home.limit')}</p>
          </div>
          <div className="home-content-cartoon" ref="cartoon">
            <Globe />
          </div>
        </div>
        {/* 网站简介 */}
        <div className="home-site">
          <div className="site-bg">
            <img src={require('../../assets//image//Group.svg')} alt="" />
          </div>

          <h1>{Language('global.home.eroc')}</h1>
          <p>
            {Language('global.home.content')}
          </p>
        </div>
        {/* 优势 */}
        <div className="home-advantage">
          <div className="home-advantage1">
            <div className="adv-txt">
              <h3>{Language('global.home.advantage1.title')}</h3>
              <p>{Language('global.home.advantage1.content')}</p>
            </div>
            <div className="adv-img">
              <img src={require('../../assets/image/a1.gif')} alt="" />
            </div>
          </div>
          <div className="home-advantage2">
            <div className="adv-img">
              {/* <img src={require('../../assets/image/a2.svg')} alt=""/> */}
              <svg className="adv-img-a2" width="400px" height="300px" viewBox="0 0 400 400" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                {/* Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch */}
                <title>Group 11</title>
                <desc>Created with Sketch.</desc>
                <defs>
                  <linearGradient x1="50%" y1="94.3729079%" x2="50%" y2="0.112937232%" id="linearGradient-1">
                    <stop stopColor="#224479" offset="0%"></stop>
                    <stop stopColor="#003D76" stopOpacity="0" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient x1="-4.2225771%" y1="-3.398047%" x2="74.5076518%" y2="74.641878%" id="linearGradient-2">
                    <stop stopColor="#2C3964" offset="0%"></stop>
                    <stop stopColor="#0097FF" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient x1="24.9600358%" y1="25.75412%" x2="75.2593526%" y2="75.3184656%" id="linearGradient-3">
                    <stop stopColor="#0F3050" offset="0%"></stop>
                    <stop stopColor="#2587D2" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient x1="38.3636642%" y1="37.9577882%" x2="86.8871781%" y2="86.6910535%" id="linearGradient-4">
                    <stop stopColor="#00599C" stopOpacity="0" offset="0%"></stop>
                    <stop stopColor="#00278A" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <g id="three" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Desktop-Copy" transform="translate(-138.000000, -2249.000000)">
                    <g id="Group-11" transform="translate(138.000000, 2226.000000)">
                      <path d="M201.528759,346.325932 L157.81826,367.890885 L61.9800062,312.657408 L62.0290344,161.372717 L133.266176,161.931735 L133.266357,161.372717 L341.205315,163.004475 L341.156839,312.58476 L245.282763,367.890885 L201.528759,346.325932 Z" id="Combined-Shape1" fill="url(#linearGradient-1)" y="10" opacity="0.7"></path>
                      <polygon id="Rectangle-Copy-2" fillOpacity="0.5" fill="url(#linearGradient-2)" transform="translate(201.710121, 216.600092) rotate(45.000000) translate(-201.710121, -216.600092) " points="162.641134 177.505775 269.46498 148.793863 240.779107 255.69441 133.955261 284.406322">

                      </polygon>
                      <polygon id="Rectangle-Copy" fillOpacity="0.5" fill="url(#linearGradient-2)" transform="translate(201.710121, 184.145731) rotate(45.000000) translate(-201.710121, -184.145731) " points="162.641134 145.051414 269.46498 116.339502 240.779107 223.240048 133.955261 251.951961"></polygon>
                      <polygon id="Rectangle" fill="url(#linearGradient-3)" transform="translate(201.710121, 152.502729) rotate(45.000000) translate(-201.710121, -152.502729) " points="162.641134 113.408412 269.46498 84.6965001 240.779107 191.597046 133.955261 220.308959"></polygon>
                      <polygon id="Rectangle-Copy-3" fill="url(#linearGradient-4)" style={{ 'mixBlendMode': 'screen' }} transform="translate(201.469837, 200.132628) rotate(45.000000) translate(-201.469837, -200.132628) " points="196.87951 59.3445319 342.774689 205.308266 314.088816 312.208812 207.26497 340.920725 60.1649846 193.751403"></polygon>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="adv-txt">
              <h3>{Language('global.home.advantage2.title')}</h3>
              <p>{Language('global.home.advantage2.content')}</p>
            </div>
          </div>
          <div className="home-advantage3">
            <div className="adv-txt">
              <h3>{Language('global.home.advantage3.title')}</h3>
              <p>{Language('global.home.advantage3.content')}</p>
            </div>
            <div className="adv-img">
              <div className="led">
                <img className="leda a1" src={require('../../assets/image/a3(1).svg')} alt="" />
                <img className="leda a2" src={require('../../assets/image/a3(2).svg')} alt="" />
                <img className="leda a3" src={require('../../assets/image/a3(1).svg')} alt="" />
                <img className="leda a4" src={require('../../assets/image/a3(2).svg')} alt="" />
                <img className="leda a5" src={require('../../assets/image/a3(1).svg')} alt="" />
                <img className="leda a6" src={require('../../assets/image/a3(2).svg')} alt="" />
                <img className="leda a7" src={require('../../assets/image/a3(1).svg')} alt="" />
                <img className="leda a8" src={require('../../assets/image/a3(2).svg')} alt="" />
                <img className="leda a9" src={require('../../assets/image/a3(1).svg')} alt="" />
                <img className="bg" src={require('../../assets/image/a3.png')} alt="" />
              </div>
            </div>
          </div>
          <div className="home-advantage4">
            <div className="adv-img">
              <img src={require('../../assets/image/a4.svg')} alt="" />
            </div>
            <div className="adv-txt">
              <h3>{Language('global.home.advantage4.title')}</h3>
              <p>{Language('global.home.advantage4.content')}</p>
            </div>
          </div>
          <div className="home-advantage56">
            <div className="home-advantage5">
              <div className="adv-img">
                <img src={require('../../assets/image/a5.svg')} alt="" />
              </div>
              <div className="adv-txt">
                <h3>{Language('global.home.advantage5.title')}</h3>
                <p>{Language('global.home.advantage5.content')}</p>
              </div>
            </div>
            <div className="home-advantage6">
              <div className="adv-img">
                <img src={require('../../assets/image/a6.svg')} alt="" />
              </div>
              <div className="adv-txt">
                <h3>{Language('global.home.advantage6.title')}</h3>
                <p>{Language('global.home.advantage6.content')}</p>
              </div>
            </div>
          </div>
        </div>
        {/* 进程 */}
        <div className="home-path">
          <h2>{Language('global.home.path.title')}</h2>
          <div className="home-path-detail">
            <ul>
              {
                pathlist.map((item, ind) => {
                  return (
                    <li key={ind} className={pathactive > ind ? 'pathactive' : ''}>
                      <div className="state">
                        <div className="a"></div>
                        <div className="b" style={{ display: pathactive === ind ? 'block' : 'none' }}></div>
                        <div className="c" style={{ display: pathactive === ind ? 'block' : 'none' }}></div>
                      </div>

                      <h3>{Language(item.titleid)}</h3>
                      {!item.contentid ? '' : <p>{}</p>}
                      <p>{Language(item.timeid)}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        {/* 订阅 */}
        {/* <div className="home-subscribe">
            <h1>{Language('global.home.Subscribe.title')}</h1>
            <p>{Language('global.home.Subscribe.content')}</p>
            <p>
              <input type="text" placeholder="Email Address"/>
              <button>{Language('global.home.Subscribe.btn')}</button>
            </p>
        </div> */}
        <Footer />
      </div>
    )
  }
}

export default Home