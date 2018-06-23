import React, { Component } from "react";
import './Home.scss';
import Language from '../../components/Language';
import asyncComponent from '../../components/asyncComponent';
const Globe = asyncComponent(() => import(/* webpackChunkName: "foo" */ "../Globe"))
const Globe1 = asyncComponent(() => import(/* webpackChunkName: "foo" */ "../Globe1/Globe1.jsx"))

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pathlist: [
        {
          titleid: 'global.home.path1.title',
          contentid: 'global.home.path1.content',
          timeid: 'global.home.path1.time'
        },
        {
          titleid: 'global.home.path2.title',
          timeid: 'global.home.path2.time'
        },
        {
          titleid: 'global.home.path3.title',
          contentid: 'global.home.path3.content',
          timeid: 'global.home.path3.time'
        },
        {
          titleid: 'global.home.path4.title',
          timeid: 'global.home.path4.time'
        },
        {
          titleid: 'global.home.path5.title',
          contentid: 'global.home.path5.content',
          timeid: 'global.home.path5.time'
        },
        {
          titleid: 'global.home.path6.title',
          timeid: 'global.home.path6.time'
        }
      ],
      pathactive: 3
    }
  }
  toWhitepaper() {
    this.props.history.replace('/index/home')
  }
  componentDidMount () {
    if (window.innerWidth >= 768) {
      this.refs.txt.style.height =  window.innerHeight + 'px';
    } else {
      this.refs.cartoon.style.height = window.innerWidth + 'px'
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
          </div>
          <div className="home-content-cartoon" ref="cartoon">
            <Globe />
          </div>
        </div>
        {/* 网站简介 */}
        <div className="home-site">
          <h1>What is eRoc?</h1>
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
              <img src={require('../../assets/image/1.gif')} alt=""/>
            </div>
          </div>
          <div className="home-advantage2">
            <div className="adv-img">
              <img src={require('../../assets/image/123.jpg')} alt=""/>
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
              <img src={require('../../assets/image/123.jpg')} alt=""/>
            </div>
          </div>
          <div className="home-advantage4">
            <div className="adv-img">
              <img src={require('../../assets/image/123.jpg')} alt=""/>
            </div>
            <div className="adv-txt">
              <h3>{Language('global.home.advantage4.title')}</h3>
              <p>{Language('global.home.advantage4.content')}</p>
            </div>
          </div>
          <div className="home-advantage56">
            <div className="adv-txt">
              <h3>{Language('global.home.advantage5.title')}</h3>
              <p>{Language('global.home.advantage5.content')}</p>
            </div>
            <div className="adv-txt">
              <h3>{Language('global.home.advantage6.title')}</h3>
              <p>{Language('global.home.advantage6.content')}</p>
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
                    <li key={ind} className={pathactive>ind?'pathactive':''}>
                      <div className="state">
                          <div className="a"></div>
                          <div className="b" style={{display: pathactive===ind?'block': 'none'}}></div>
                          <div className="c" style={{display: pathactive===ind?'block': 'none'}}></div>
                      </div>
                      
                      <h3>{Language(item.titleid)}</h3>
                      {!item.contentid?'':<p>{}</p>}
                      <p>{Language(item.timeid)}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        {/* 订阅 */}
        <div className="home-subscribe">
            <h1>{Language('global.home.Subscribe.title')}</h1>
            <p>{Language('global.home.Subscribe.content')}</p>
            <p>
              <input type="text" placeholder="Email Address"/>
              <button>{Language('global.home.Subscribe.btn')}</button>
            </p>
        </div>
      </div>
    )
  }
}

export default Home