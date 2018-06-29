import React, { Component } from "react";
import './Careers.scss';
import Footer from '../../components/Footer';

class Careers extends Component {
  render() {
    let {lang} = this.props;
    return (
      <div className="careers">
        {
          lang === 'en'?<div className="careers-en">
            <div className="careers-content">
              <div className="content-left">
                <h1 className="careers-title">Foreign/Exchange Student Interns Recruitment for Blockchain Project in Beijing</h1>
                <p>
                Aiming at changing the blockchain world with hardcore technologies, our company is hiring interns for our innovative project.
You will be at the forefront of building, maintaining and growing the community around our blockchain across many social platforms: email, phone, blogs, internet social media etc. You should be the charming, natural problem-solver to our community members.  You listen to, understand them and will do the best to reach the resolution needed. Also, you need to acutely figure out the potential technical talents amongst them, influence them to join our endeavor with passionate & deterministic persuasion. Be result-oriented not only for the company and our vision, but also for your career. As you grow within the organization, you proactively share how you think we could improve the way we do things and drive these changes - as an innovative technical company, we embrace any new ideas and constant change.
                </p>
              </div>
              <div className="content-right">
                <ol>
                  <li>
                    <h2>What you'll need:</h2>
                    <p>
                    Very familiar with Facebook, Twitter and other famous social network tools;
A bachelor's degree or above from any field is preferred but not a requirement;
Work experience in a high energy, productive environment;
Excellence in both written and spoken English;
Exceptional comprehension and writing skills;
High proficiency using computers (typing, quickly navigating between various tools) and software;
Excellent problem solving skills, ability to connect effectively what users are asking for with answers to their true issues;
Willingness to work in a team environment, contributing to a collaborative work environment where people learn from one another and continuously improve processes on behalf of users;
                    </p>
                  </li>
                  <li>
                    <h2>Bonus points if</h2>
                    <p>
                    Getting or got degrees related to computer science, network, cryptography；
1+ years total work experience in high-growth, productive constantly changing environment；
Work experience in customer-centric industries (ex. Hotels, airlines, banking) is preferred；
Experiences dealing with different markets (countries) and having good understanding of cultural differences is preferred。
                    </p>
                  </li>
                  <li>
                    <h2>Office Location</h2>
                    <p>
                    Zhongguancun, Haidian District, Beijing;
Contact email: jenvy@eroc.io
Working hours：Both part time and full time are fine. Working for no less than four hours a day。
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          
          </div>:<div className="careers-zh">
            <h1 className="careers-title">招聘职位</h1>
            <div className="careers-content">
              <ul>
                <li>
                  <h2>人力资源总监</h2>
                  <p>
                    数量：1名<br/>
                    薪资：50万以上/年<br/>
                    岗位职责：<br/>
                    1、根据公司发展战略，组织制定人力资源战略规划；<br/>
                    2、参与公司重大人事决策，定期收集有关人事、招聘、培训、考核、薪酬等方面的信息，为公司重大人事决策提供信息支持；<br/>
                    3、制定、推动、监督人力资源各项流程和制度，并根据公司发展情况不断修正和完善；<br/>
                    4、根据公司发展战略，提出公司各业务系统组织架构、职位设置的调整建议；<br/>
                    5、跟踪研究职位及人力人员变化情况，拟定公司人员编制计划，控制人力资源成本；<br/>
                    6、制定公司企业文化的推进计划，并推动、监督实施，确保推进计划与核心价值观的一致性；<br/>
                    7、协调、指导公司各部门在人力资源管理方面工作的开展，确保公司人力资源得到最大化使用，及时沟通处理公司管理过程中的重大人力资源问题。<br/>
                    <br/>
                    岗位任职要求：<br/>
                    1、人力资源或相关专业硕士学历；<br/>
                    2、三年以上软件开发企业人力资源总监工作经历；<br/>
                    3、英语流利，在IT技术圈中有深厚的人脉。<br/>
                  </p>
                </li>
                <li>
                  <h2>开发者社区运营经理</h2>
                  <p>
                    数量：2名<br/>
                    薪资：15000-20000/月<br/>
                    岗位职责：<br/>
                    1、负责公司区块链开发者社区（官网、第三方社区、微信、微博、Twitter、Facebook等）的建设、活动策划、推广与运营，负责平台KPI、影响力和口碑的提升；<br/>
                    2. 负责社区日常运营的管理以及与相关部门的协调运作，制定运营规划、计划、流程以及例行工作；<br/>
                    3. 负责社区内容管理和用户管理，分析用户模型和行为习惯，负责制定激励用户活跃度的策略并执行；<br/>
                    4. 通过平台用户信息、行为等数据的搜集统计和分析，制定及实施运营优化策略；<br/>
                    5. 参与及配合Marketing执行品牌推广、市场营销内容、活动策划及实施。<br/>
                    岗位任职要求：<br/>
                    1、全日制计算机或相关专业本科学历；<br/>
                    2、两年以上开发者社区运营经验，拥有一定的C++或Go开发知识； <br/>
                    3、熟悉主流自媒体渠道如微信公众账号、头条号等的注册流程及有基本运营经验；<br/>
                    4、能用英文与海外开发者交流者优先。
                  </p>
                </li>
                <li>
                  <h2>招聘经理</h2>
                  <p>
                    数量：1名<br/>
                    薪资：10000-15000/月<br/>
                    岗位职责：<br/>
                    1、帮助公司招聘C++、Go方面的软件开发人才；<br/>
                    2、灵活利用各种有效工具，高效地进行搜索、筛选候选人，并保障招聘人才的质量；<br/>
                    3、负责人选的薪资协调、谈判、录用跟进、试用期关怀，直至转正；<br/>
                    4、建立与完善集团人才库，运用多种渠道，满足公司对区块链管理及技术人才的储备。<br/>
                    任职要求：<br/>
                    1、全日制本科学历；<br/>
                    2、两年以上软件开发企业、软件外包企业招聘工作经验；<br/>
                    3、沟通能力强，善于同各个领域的人员积极有效沟通；<br/>
                    4、较高的敏感度及一定的判断能力；<br/>
                    5、能用英文交流者优先。<br/>
                  </p>
                </li>
                <li>
                  <h2>自媒体平面设计</h2>
                  <p>
                    数量：1名<br/>
                    薪资：15000-20000/月<br/>
                    岗位职责：<br/>
                    1、负责区块链自媒体平台基础平面素材收集、设计、维护； <br/>
                    2、定期更新和优化社区网站及自媒体平台的视觉效果； <br/>
                    3、与运营经理协作对日常文案、帖子进行平面美化及排版设计； <br/>
                    4、社区其他平面设计类工作，如单页、手册、PPT等。<br/>
                    岗位任职要求：<br/>
                    1、具有优秀的审美、色彩感觉和排版能力，能准确把握品牌调性； <br/>
                    2、有较强互联网洞察力和创新力，能把握新媒体营销时机，擅于运用互联网思维；<br/>
                    3、能熟练运用PS、CorelDRAW、Dreamweaver等图形设计软件；<br/>
                    4、大专及以上学历，平面设计类相关专业毕业优先；有微信、微博等媒体广告平面设计工作经验者优先； <br/>
                    5、学习接受能力强，具有敏锐的新闻洞察力，思维敏捷活跃，拥有丰富的创意，善于表达创意想法； <br/>
                    6、热爱自媒体，执行力强，具有良好的团队协作精神、协调沟通能力。<br/>
                  </p>
                </li>
                <li>
                  <h2>行政人事经理</h2>
                  <p>
                    数量：1名<br/>
                    薪资：8000-12000/月<br/>
                    岗位职责：<br/>
                    1、协助制定公司内部管理规章，进行日常行政工作的组织与管理；<br/>
                    2、参与公司内部绩效管理、考勤等工作，督促执行相应的奖惩办法；<br/>
                    3、完成公司其他行政事务工作，包括但不限于接听来电、解答咨询、安全管理、文档编辑、会务安排、快递收发、采购事宜、办公用品管理及领用等。<br/>
                    岗位任职要求：<br/>
                    1、全日制本科学历，一年以上IT行业行政管理经验；<br/>
                    2、沟通能力强，有团队合作意识和能力；<br/>
                    3、熟悉公司注册、社保办理等基本行政人事流程。<br/>
                  </p>
                </li>
                <li>
                  <h2>联系我们</h2>
                  <p>
                    办公位置：北京市海淀区<br/>
                    联系邮箱：jenvy@eroc.io<br/>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        }
        <div className="careers-foot"><Footer/></div>
      </div>
    )
  }
}

export default Careers