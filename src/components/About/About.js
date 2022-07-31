import React, { Fragment, useState } from "react";

import { 
    StarOutlined, 
    ArrowDownLittleOutlined, 
    ArrowUpLittleOutlined 
} from "../../common/Icons";
import bg8_img from "../assets/bg8-img.png"
import bg8_icon from "../assets/bg8-icon.png"
import bg9_img1 from "../assets/bg9-img1.png"
import bg9_img2 from "../assets/bg9-img2.png"
import bg9_img3 from "../assets/bg9-img3.png"
import bg9_img4 from "../assets/bg9-img4.png"
import bg9_img5 from "../assets/bg9-img5.png"
import bg9_img6 from "../assets/bg9-img6.png"
import bg9_img7 from "../assets/bg9-img7.png"
import bg9_img8 from "../assets/bg9-img8.png"
import bg9_img9 from "../assets/bg9-img9.png"
import bg9_img10 from "../assets/bg9-img10.png"
import bg9_img11 from "../assets/bg9-img11.png"
import bg9_img12 from "../assets/bg9-img12.png"
import bg9_img13 from "../assets/bg9-img13.png"
import bg10_img from "../assets/bg10-img.png"
import bg10_icon from "../assets/bg10-icon.png"
import bg11_img1 from "../assets/bg11-img1.png"
import bg11_sign from "../assets/bg11-sign.png"
import bg12_img1 from "../assets/bg12-img1.png"
import bg12_img2 from "../assets/bg12-img2.png"
import bg12_img3 from "../assets/bg12-img3.png"
import bg12_img4 from "../assets/bg12-img4.png"
import bg13_img from "../assets/bg13-img.png"
import bg13_icon from "../assets/bg13-icon.png"
import "./about_mobile.scss"

function About() {
    const [accept, setAccept] = useState(true)

    return (
        <div style={{ position: "relative", overflow: 'hidden' }}>
            <div id="bg8">
                {/* <img id="bg8-img" src={bg8_img} alt="" style={{ left: 0, top: 75, width: 1440, height: 958, opacity: 0.2}}></img> */}
                <img id="bg8-icon" src={bg8_icon} alt="" style={{width: 160, height: 160, zIndex: 1, justifyItems:'center',marginTop:'80px'}}></img>
                <div id="bg8-title">关于睿质源教育</div>
                <div id="bg8-br" />
                <div id="bg8-text1">
                    睿质源教育（Wisdom Spring Education）成立于2014年，总部位于英国牛津，分部位于中国上海。
                    <br />
                    睿质源教育专注于为7-18岁学生，提供英国留学申请以及在英后续服务，并为国际学校学生提供英国申请规划。
                    <br />
                    我们始终秉持联合国可持续性发展目标，提倡优质教育及性别平等。
                    <br />
                    我们的愿景是激励学生融入多元文化的英国社会，成为具有国际视野的新一代中国精英。
                </div>
                <div id="bg8-text2">
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}“我是长江江畔长大的武汉人，也希望我的学生如灵动流淌的源泉，学习成长路上赏美景，同时历曲折，汇集力量，终成江河大海。”
                </div>
                <div id="bg8-author">——睿质源教育创始人武质博士</div>
            </div>
            <div id="bg9">
                <img id="bg9-img1" src={bg9_img1} alt=""></img>
                <img id="bg9-img2" src={bg9_img2} alt=""></img>
                <img id="bg9-img3" src={bg9_img3} alt=""></img>
                <div id="bg9-boder1">
                    <div id="bg9-text1">
                        睿质源教育在2020年荣获了英国疫情期间客户体验奖(Customer Experience in the Crisis) 。
                    </div>
                </div>
                <div id="bg9-boder2">
                    <div id="bg9-text2">
                        <p style={{marginTop: 12}}>创始人及学术总监——武质博士被提名为服务行业企业家入围者。</p>
                        <p style={{fontWeight: 800}}>在英屡获殊荣，受到中英两国众多媒体报道采访，成长为引领留学行业的带头人。</p>
                    </div>
                </div>
                <div id="bg9-boder3">
                    <div id="bg9-text3">
                        “我十分欣赏您在疫情期间依然秉承贵司的价值观，‘学生、教育、指引’。”
                        <br />
                        <br />
                        <p style={{textAlign: "right"}}>——  英国服务行业大奖评委</p>
                    </div>
                </div>
                <div id="bg9-text4">
                    武质博士曾受《金融时报》、《界面新闻》、《国际金融报》等知名商业平台采访，并被澎湃新闻、新浪财经等十余家新闻媒体争相转载。
                </div>
                <div id="bg9-barwer">
                    <img id="bg9-img4" src={bg9_img4} alt="" style={{ left: 75, top: 11, width: 80, height: 80, position: "absolute" }}></img>
                    <img id="bg9-img5" src={bg9_img5} alt="" style={{ left: 215, top: 11, width: 80, height: 80, position: "absolute" }}></img>
                    <img id="bg9-img6" src={bg9_img6} alt="" style={{ left: 355, top: 11, width: 80, height: 80, position: "absolute" }}></img>
                    <img id="bg9-img7" src={bg9_img7} alt="" style={{ left: 495, top: 11, width: 80, height: 80, position: "absolute" }}></img>
                    <img id="bg9-img8" src={bg9_img8} alt="" style={{ left: 635, top: 11, width: 80, height: 80, position: "absolute" }}></img>
                    <img id="bg9-img9" src={bg9_img9} alt="" style={{ left: 775, top: 11, width: 80, height: 80, position: "absolute" }}></img>
                    <img id="bg9-img10" src={bg9_img10} alt="" style={{ left: 915, top: 11, width: 80, height: 80, position: "absolute" }}></img>
                    <img id="bg9-img11" src={bg9_img11} alt="" style={{ left: 1055, top: 11, width: 80, height: 80, position: "absolute" }}></img>
                    <img id="bg9-img12" src={bg9_img12} alt="" style={{ left: 1195, top: 11, width: 80, height: 80, position: "absolute" }}></img>
                    <img id="bg9-img13" src={bg9_img13} alt="" style={{ left: 1335, top: 11, width: 80, height: 80, position: "absolute" }}></img>
                </div>
            </div>
            <div id="bg10">
                <img id="bg10-img" src={bg10_img} alt="" style={{ left: 152, top: 70, width: 340, height: 286, position: "absolute" }}></img>
                <img src={bg10_icon} alt="" style={{ left: 580, top: 120, width: 16, height: 16, position: "absolute" }}></img>
                <img src={bg10_icon} alt="" style={{ left: 580, top: 153, width: 16, height: 16, position: "absolute" }}></img>
                <img src={bg10_icon} alt="" style={{ left: 580, top: 186, width: 16, height: 16, position: "absolute" }}></img>
                <img src={bg10_icon} alt="" style={{ left: 580, top: 219, width: 16, height: 16, position: "absolute" }}></img>
                <img src={bg10_icon} alt="" style={{ left: 580, top: 251, width: 16, height: 16, position: "absolute" }}></img>
                <img src={bg10_icon} alt="" style={{ left: 580, top: 285, width: 16, height: 16, position: "absolute" }}></img>
                <img src={bg10_icon} alt="" style={{ left: 580, top: 318, width: 16, height: 16, position: "absolute" }}></img>
                <img src={bg10_icon} alt="" style={{ left: 580, top: 351, width: 16, height: 16, position: "absolute" }}></img>
                <div id="bg10-title">武质博士（Dr Rebecca Zhi Herbert）</div>
                <div id="bg10-text1">
                    英国教育学博士及博士后
                    <br />
                    前英国雷丁大学国际招生官
                    <br />
                    英国伯克郡学校校董
                    <br />
                    英国牛津演讲会主席
                    <br />
                    曾于中国武汉大学任教
                    <br />
                    中英校际合作交流资深顾问
                    <br />
                    多次接受国内外媒体采访，如BBC，牛津等电台，《界面新闻》、《国际金融报》等。
                    <br />
                    在多家报刊《财新时报》、《金融时报》（Financial Times）等发表署名文章。
                </div>
                <div id="bg10-text2">
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                    作为一位高度敬业和备受推崇的教育专家，武质博士在中英两国科研、教学、国际教育等领域深耕25年，熟知英国贵族私立学校和顶尖大学的选拔标准，对指导国际学生适应英国教学具有丰富经验，帮助众多学子在海外顶尖学府脱颖而出。
                </div>
                <button id="bg10-btn1" onClick={e => window.open('https://10to8.com/book/drherbert/')}>预约咨询</button>
                <button id="bg10-btn2" onClick={e => window.location.href='/about/booking'}>预约武博讲座</button>
            </div>
            <div id="bg11">
                <img src={bg11_img1} alt="" className='bgImg'></img>
                <div className="bg11-ctx">
                    <span className="bg11-title">创始人寄语</span>
                    <div className="bg11-br">
                        <div className='line'></div>
                        <StarOutlined className='star' />
                        <div className='line'></div>
                    </div>
                    <div className="bg11-text">
                        <p>18年前，我辞去国内武汉大学教师岗位，来到英国攻读硕士、博士和博士后，开启了我在英国的留学与教育生涯。</p>
                        <p>还记得刚来英国的第一次论文成绩，老师初审只给了我一个D，我简直不敢相信。但幸运的是老师给了我很多意见，而一学期下来，我所有的课都拿了最高分A，随后我又获得英国大学教育博士全奖。当年，颁发给中国学生的奖学金尤其是文科奖学金极少，以至于收到全奖的邮件时我不相信自己的眼睛。</p>
                        {!accept && (
                            <Fragment>
                                <p>为什么在初次论文写作得到了D呢？其实正是因为当时我求高分心切，完全按中国评分标准，把学到的背过的内容和理论都罗列其中。而后来在老师的指导下我才明白，这样在英国其实是拿不了高分的。反而课后查阅资料，上课做汇报演讲，应用学过的教育理论知识实操编写教程，把学到的东西进行思考分析，给出自己的观点，才有机会拿到A。</p>
                                <p>而这些其实都是我喜欢的、擅长的，但在中国高考制度中不被计入考核标准的。当时觉得来英国求学对我而言真是最正确的选择！</p>
                                <p>但更让我欣喜的是这个新发现：在中国能拿到高分的技巧，照搬到英国可能就得不偿失。一定要弄懂英国考试测评标准才可以获得学校和老师的青睐！</p>
                                <p>正是这一发现，让我对英国教育思想更有兴趣，我深知有太多像我一样的中国留学学生深受中英教育体系差异的困扰，却找不到正确的方向，所以也更希望能够把我对英国教育体系的认知，传递给无数来英留学的学生及家庭。而后来在英国大学任职国际招生官员，再到创办睿质源教育咨询，都是为了实现这一愿景。</p>
                                <p>于是，我将我多年来对中英教育体系差异的研究，与如何针对中国学生适应英国教学的方法研发成爱思读™ACED™英国升学体系，并根据此体系，结合我多年来成功的学生案例，撰写成《牛津剑桥不是梦》。希望帮助更多中国学生与家庭，减少升学迷茫与焦虑，让孩子健康成长，快乐学习，并成功获得名校offer。</p>
                                <p>无论是身处中国、即将进入英国教育体系，或正接受国际教育、面临升学挑战，如果家长和学生能深入了解我们爱思读™ACED™英国升学体系，就一定能让了解英国精英教育的核心理念，掌握申请的精髓和根本要素。而根据爱思读™ACED™英国升学体系进行英国留学规划，则一定能激发孩子潜能，提高名校录取率！</p>
                            </Fragment>
                        )}
                        {accept ? (
                            <div onClick={() => setAccept(false)} className='accept'>展开全部<ArrowDownLittleOutlined className='arrow' /></div>
                        ) : (
                            <div onClick={() => setAccept(true)} className='accept'>收起内容<ArrowUpLittleOutlined className='arrow' /></div>
                        )}
                    </div>

                    <img className="bg11-sign" src={bg11_sign} alt=""></img>
                    <div className='btns'>
                        <button className="bg11-btn1" onClick={e => window.location.href='/about/booking'}>预约武博讲座</button>
                        <button className="bg11-btn2" onClick={e => window.location.href='/consult/download'}>下载新书精选章节</button>
                    </div>
                </div>
            </div>
            <div id="bg12">
                <div id="bg12-border1" />
                <div id="bg12-title">资深顾问委员会</div>
                <div id="bg12-border2" />
                <img id="bg12-img1" src={bg12_img1} alt=""></img>
                <div id="bg12-tit1">
                    Ms Charlene Allen
                    <br /><br />
                    教育顾问
                </div>
                <div id="bg12-text1">
                    曾任南安普敦大学招生和国际关系主任
                    <br /><br />
                    前英国大学国际联络协会(BUILA)主席
                </div>
                <img id="bg12-img2" src={bg12_img2} alt=""></img>
                <div id="bg12-tit2">
                    Mrs Sirin Myles
                    <br /><br />
                    教育顾问
                </div>
                <div id="bg12-text2">
                    曾任英国雷丁大学国际办公室主任
                    <br /><br />
                    前英国国际大学欧洲高等教育主席
                    <br /><br />
                    前英国文化委员会土耳其教育咨询服务主任
                </div>
                <img id="bg12-img3" src={bg12_img3} alt=""></img>
                <div id="bg12-tit3">
                    Mr Graham Lee
                    <br /><br />
                    教育顾问
                </div>
                <div id="bg12-text3">
                    英国 Benenden School 面试官
                    <br /><br />
                    英国寄宿学校主题畅销书作家
                </div>
                <img id="bg12-img4" src={bg12_img4} alt=""></img>
                <div id="bg12-tit4">
                    Mrs Angela Fairs
                    <br /><br />
                    教育顾问
                </div>
                <div id="bg12-text4">
                    曾于多个国家任职国际学校校长
                    <br /><br />
                    现任英国学校校董
                    <br /><br />
                    Gaia 学习平台董事
                </div>
            </div>
            <div id="bg13">
                <img src={bg13_img} alt="" style={{ width: 1440, height: 622 }}></img>
                <div id="bg13-title">家长致谢</div>
                <div id="bg13-drawer">
                    <div id="bg13-ctx1">
                        <img src={bg13_icon} alt="" style={{ left: 16, top: 16, width: 24, height: 24, position: "absolute" }}></img>
                        <div id="bg13-ctx1-tit1">Vic妈妈：</div>
                        <div id="bg13-ctx1-tit2">学生录取学校 </div>
                        <div id="bg13-ctx1-tit3">Ashford School</div>
                        <div id="bg13-ctx1-text">
                            非常感谢武博团队在疫情期间的大力支持。我儿子上周五安全健康地飞回了上海！在我们决定让他回国的前一周，武博每天都向我们提供有关英国当地疫情的最新信息，并和我们交流如何处理儿子的学习以及如何在学校如何保护自己。
                        </div>
                    </div>
                    <div id="bg13-ctx2">
                        <img src={bg13_icon} alt="" style={{ left: 16, top: 16, width: 24, height: 24, position: "absolute" }}></img>
                        <div id="bg13-ctx2-tit1">Patrick 妈妈：</div>
                        <div id="bg13-ctx2-tit2">学生录取学校 </div>
                        <div id="bg13-ctx2-tit3">The Oratory Prep School</div>
                        <div id="bg13-ctx2-text">
                            我们非常感谢武博及其团队在疫情期间的大力支持。我儿子上周五安全健康地飞回了上海！在我们决定让他回国的前一周，武博每天都向我们提供有关英国当地疫情的最新信息，并和我们交流如何处理儿子的学习以及如何在学校如何保护自己。
                        </div>
                    </div>
                    <div id="bg13-ctx3">
                        <img src={bg13_icon} alt="" style={{ left: 16, top: 16, width: 24, height: 24, position: "absolute" }}></img>
                        <div id="bg13-ctx3-tit1">Tiger 爸爸：</div>
                        <div id="bg13-ctx3-tit2">学生录取学校 </div>
                        <div id="bg13-ctx3-tit3">Cottesmore School</div>
                        <div id="bg13-ctx3-text">
                            我们非常感谢武博及其团队在疫情期间的大力支持。我儿子上周五安全健康地飞回了上海！在我们决定让他回国的前一周，武博每天都向我们提供有关英国当地疫情的最新信息，并和我们交流如何处理儿子的学习以及如何在学校如何保护自己。
                        </div>
                    </div>
                    <div id="bg13-ctx4">
                        <img src={bg13_icon} alt="" style={{ left: 16, top: 16, width: 24, height: 24, position: "absolute" }}></img>
                        <div id="bg13-ctx4-tit1">刘子剑的家长：</div>
                        <div id="bg13-ctx4-tit2">学生录取学校 </div>
                        <div id="bg13-ctx4-tit3">雷顿帕克中学</div>
                        <div id="bg13-ctx4-text">
                            我们非常感谢武博及其团队在疫情期间的大力支持。我儿子上周五安全健康地飞回了上海！在我们决定让他回国的前一周，武博每天都向我们提供有关英国当地疫情的最新信息，并和我们交流如何处理儿子的学习以及如何在学校如何保护自己。
                        </div>
                    </div>
                    <div id="bg13-ctx5">
                        <img src={bg13_icon} alt="" style={{ left: 16, top: 16, width: 24, height: 24, position: "absolute" }}></img>
                        <div id="bg13-ctx5-tit1">Vic妈妈：</div>
                        <div id="bg13-ctx5-tit2">学生录取学校 </div>
                        <div id="bg13-ctx5-tit3">Ashford School</div>
                        <div id="bg13-ctx5-text">
                            非常感谢武博团队在疫情期间的大力支持。我儿子上周五安全健康地飞回了上海！在我们决定让他回国的前一周，武博每天都向我们提供有关英国当地疫情的最新信息，并和我们交流如何处理儿子的学习以及如何在学校如何保护自己。
                        </div>
                    </div>
                    <div id="bg13-ctx6"></div>
                </div>
            </div>
        </div>
    )
}
export default About;