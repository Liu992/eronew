import React, { Component } from "react";
import './Foundation.scss';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

class Foundation extends Component {
  render() {
    return (
      <div className="foundation">
        <Header />
        <div className="foundation-box">
          <div className="introduce">
            <h1 className="title">基金会介绍</h1>
            <p>eRoc Foundation 于2018年成立于新加坡，由来自Intel、Microsoft、Oracle等知名IT企业的一群技术大咖发起。</p>
            <p>eRoc Foundation认为基于区块链的落地应用太少，或者说区块链上的dApp太少，这极大的打击了从业者的信心。如何快速的落地一批dApp，并通过这些dApp的落地，给具体的业务带来价值，是目前区块链发展的核心中的核心。不解决这一问题，区块链就不能得到真正的发展和应用。基于这一现状，eRoc Foundation在全球首先提出了“实现传统App到dApp快速迁移”的一种解决方案，该方案包含服务总线BSB（Blockchain Service Bus），全新的区块链共识算法DRC（Deterministic-Random Consensus）、智能合约的异步分片执行机制APESC（Asynchronous {'&'} Partitioned Execution of Smart Contract）以及渐进式分片存储机制PSS（Progressive Sharded Storage）。</p>
            <p>eRoc Foundation希望聚焦技术本身，真正解决区块链所面临的核心问题，帮助开发者将目前220万iOS App、360万安卓App以及300万小程序中的某些应用或者是应用中的某些场景迁移到区块链上来，彻底实现区块链的应用落地。</p>
          </div>
          <hr/>
          <div className="counselor_team">
            <h1 className="title">顾问团队</h1>
            <div className="team_list">
              <dl>
                <dt className="head">
                  <img src={require('../../assets/image/counselor1.jpg')} alt=""/>
                </dt>
                <dd>
                  <b className="username">吴甘沙</b>
                  <span className="describe">驭势科技CEO</span>
                  <span className="describe">原英特尔中国研究院院长</span>
                </dd>
              </dl>
              <dl>
                <dt className="head">
                <img src={require('../../assets/image/counselor2.jpg')} alt=""/>
                </dt>
                <dd>
                  <b className="username">曾良</b>
                  <span className="describe">原微软中国副总裁</span>
                  <span className="describe">国际数字资产慈善基金会主席</span>
                </dd>
              </dl>
              <dl>
                <dt className="head">
                <img src={require('../../assets/image/counselor3.jpg')} alt=""/>
                </dt>
                <dd>
                  <b className="username">田甲</b>
                  <span className="describe">CortexLabs.AI首席科学家、比特币早期投资者、Zcash社区选举人、BitFinex股东</span>
                </dd>
              </dl>
              <dl>
                <dt className="head">
                <img src={require('../../assets/image/counselor4.jpg')} alt=""/>
                </dt>
                <dd>
                  <b className="username">陈滢</b>
                  <span className="describe">慧科集团副总裁</span>
                  <span className="describe">原IBM中国研究院副院长</span>
                </dd>
              </dl>
              <dl>
                <dt className="head">
                <img src={require('../../assets/image/counselor5.jpg')} alt=""/>
                </dt>
                <dd>
                  <b className="username">董耀祖</b>
                  <span className="describe">英特尔首席工程师</span>
                  <span className="describe">全球知名虚拟化专家</span>
                </dd>
              </dl>
              <dl>
                <dt className="head">
                <img src={require('../../assets/image/counselor6.jpg')} alt=""/>
                </dt>
                <dd>
                  <b className="username">陈庆</b>
                  <span className="describe">绿盟联合创始人</span>
                  <span className="describe">高级研究员</span>
                  <span className="describe">知名计算机安全专家网名“小四”</span>
                </dd>
              </dl>
              <dl>
                <dt className="head">
                <img src={require('../../assets/image/counselor7.jpg')} alt=""/>
                </dt>
                <dd>
                  <b className="username">魏育成</b>
                  <span className="describe">中科院电子所教授级高工，博士</span>
                  <span className="describe">国产FPGA芯片公司中科亿海微总裁</span>
                </dd>
              </dl>
              <dl>
                <dt className="head">
                <img src={require('../../assets/image/counselor8.jpg')} alt=""/>
                </dt>
                <dd>
                  <b className="username">冯强</b>
                  <span className="describe">BOE（京东方）集团高级副总裁</span>
                  <span className="describe">健康服务事业群CEO</span>
                </dd>
              </dl>
              <dl>
                <dt className="head">
                <img src={require('../../assets/image/counselor9.jpg')} alt=""/>
                </dt>
                <dd>
                  <b className="username">周霖</b>
                  <span className="describe">水木社区创始人</span>
                  <span className="describe">原搜狐技术副总裁</span>
                  <span className="describe">搜狐旗下狐狸金服联合创始人兼CTO</span>
                </dd>
              </dl>
            </div>
          </div>
          <hr/>
          <div className="skill_team">
            <h1 className="title">核心团队</h1>
            <div className="team_list">
              <dl>
                <dt className="head">
                  <img src={require('../../assets/image//skill1.jpg')} alt=""/>
                </dt>
                <dd>
                  <b className="username">段夕华</b>
                  <span className="describe">毕业于复旦大学计算机系，原大路网、途安客CTO。曾在高德全面负责与苹果和谷歌的新地图业务合作。在此之前，曾在全球最大芯片公司Intel工作10余年。从1994年开发的商用软件COK算起，投身计算机信息技术行业已20余年。擅长技术团队管理、研发团队培养、新技术/新架构的实现，涉及从云到端的众多技术领域的研究、设计、开发、创新、布道、支持等工作，既有广泛技术积累与感悟，也不乏对商业和市场的敏锐度。 </span>
                </dd>
              </dl>
              <dl>
                <dt className="head">
                  <img src={require('../../assets/image//skill2.jpg')} alt=""/>
                </dt>
                <dd>
                  <b className="username">王晓光</b>
                  <span className="describe">清华大学信息系统与工程学院毕业。专注于密码学、计算机网络和系统体系结构。他是AnchorTech（信息安全）的创始人之一， Advance AI的CTO，是最大的虚拟专用网络之一的作者，SWFT区块链的顾问。 </span>
                </dd>
              </dl>
              <dl>
                <dt className="head">
                  <img src={require('../../assets/image//skill3.jpg')} alt=""/>
                </dt>
                <dd>
                  <b className="username">陈绪</b>
                  <span className="describe">英特尔中国云计算战略总监,中国计算机协会会员普适计算专委会委员，中国开源软件推进联盟常务副秘书长。1995年至今，长期从事Linux技术和中国开源社区工作，2015年荣获中日韩东北亚开源论坛最高奖项“特别贡献奖”。曾任Sun中国工程研究院高级工程师，北京泰宇科技有限公司技术总监。2007年加入英特尔，历任Linux和开源战略经理，市场总监等职。陈绪先生2002年毕业于北京科技大学，师从中科院高庆狮院士，获工科博士学位,2014年获得清华大学高级工商管理硕士学位。</span>
                </dd>
              </dl>
              <dl>
                <dt className="head">
                  <img src={require('../../assets/image//skill4.jpg')} alt=""/>
                </dt>
                <dd>
                  <b className="username">华咤镇</b>
                  <span className="describe">复旦大学计算机系毕业，理科硕士。曾任职于富士施乐、微软公司，长期担任高级软件工程师、资深软件工程师。后任职于深圳创新投资有限公司，专职于互联网/高科技企业投资。2015年创立美港通互联网金融有限公司，合伙人。对系统软件开发、高新技术风险投资有丰富的经验。</span>
                </dd>
              </dl>
              <dl>
                <dt className="head">
                  <img src={require('../../assets/image//skill5.jpg')} alt=""/>
                </dt>
                <dd>
                  <b className="username">欧嘉致</b>
                  <span className="describe">卡内基梅隆大学计算机科学硕士现任职美国eBay公司，领导物流运输追踪团队的研发。在eBay之前，任职于美国微软公司。负责网络检索与搜索引擎的开发</span>
                </dd>
              </dl>
              <dl>
                <dt className="head">
                  <img src={require('../../assets/image//skill6.jpg')} alt=""/>
                </dt>
                <dd>
                  <b className="username">陈景伟</b>
                  <span className="describe">曾在Intel任职11年，主要负责全国软件园创新中心／企业孵化器运营工作，支持、辅导、孵化与投资高科技创新企业。在此之前，在金蝶软件集团工作8年，曾任集团市场副总经理、PR总监、公共关系总监。</span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
          <Footer />
      </div>
    )
  }
}

export default Foundation