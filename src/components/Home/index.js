import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

import {
    DownWideArrowOutlined,
    QuoteStartOutlined,
    QuoteEndOutlined,
    AcademicOutlined,
    TraitOutlined,
    SpecialtyOutlined,
    TargetOutlined,
    MobileOutlined,
    ArrowRightOutlined,
    RightCircleOutlined,
    WrongCircleOutlined,
    ToAopOutlined
} from "../../common/Icons";
import logo from '../../assets/睿质源logo-高清(白色).png'
import cambridge from '../../assets/Cambridge image 1.jpeg'
import aced from '../../assets/爱思读高清logo.png'
import acedAnalysis from '../../assets/Analysis ACED.png'
import aced86 from '../../assets/ACED_86.png'
import evaluRes from '../../assets/爱思读测评结果.png'
import zhiDoctor from '../../assets/武质博士.png'
import oxBook from '../../assets/OxfordBook.png'
import acedCircle from '../../assets/aced-circle.png'
import student from '../../assets/student.png'

const isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);

isMobile ? require('./home_mobile.scss') :  require('./home.scss');

// import './home.scss'
// import './home_mobile.scss'

function Home({ setExtra, setToTop }) {
    const [text1, setText1] = useState('名校申请体系')
    const [text2, setText2] = useState('武质博士')
    const [text3, setText3] = useState('《牛津剑桥不是梦》')
    const [text4, setText4] = useState('留学项目')

    const jumpTo = (id) => {
        window.scrollTo({
            top: document.getElementById(id).offsetTop + 800,
            behavior: 'smooth'
        })
    }


    useEffect(() => {
        setExtra(
            <div className='static'>
                <img src={cambridge} alt='Cambridge' className='cambridge' onMouseDown={e => e.preventDefault()} />
                <div className='text'>
                    <div>用高考思维无法在英国留学中胜出</div>
                    <div>英国教育常务部长认可的申请路径图,</div>
                    <div>让您的孩子向英国名校更近一步!</div>
                </div>
                <div className='blocks'>
                    <div onClick={() => jumpTo('system')}>
                        <div
                            className='box' 
                            onMouseEnter={() => {
                                setText1(
                                    <>
                                        英国留学申请体系<br />
                                        ACED爱思读<sup style={{ position: 'relative', top: 2, fontSize: '0.6em' }}>TM</sup>
                                    </>
                                )
                            }} 
                            onMouseLeave={() => setText1('名校申请体系')}
                        >
                            <span>{text1}</span>
                            <DownWideArrowOutlined className='arrow' />
                        </div></div>
                    <div onClick={() => jumpTo('doctor')}>
                        <div 
                            className='box'
                            onMouseEnter={() => setText2('创始人 武质博士')}
                            onMouseLeave={() => setText2('武质博士')}
                        >
                            <span>{text2}</span>
                            <DownWideArrowOutlined className='arrow' />
                        </div>
                    </div>
                    <div onClick={() => jumpTo('speech')}>
                        <div className='box'>
                            <span>{text3}</span>
                            <DownWideArrowOutlined className='arrow' />
                        </div>
                    </div>
                    <div  onClick={() => jumpTo('program')}>
                        <div className='box'>
                            <span>{text4}</span>
                            <DownWideArrowOutlined className='arrow' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }, [setExtra, text1, text2, text3, text4])

    useEffect(() => {
        setToTop(
            <button className='toTop' onClick={() => window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })}>
                <ToAopOutlined />
            </button>
        )
    }, [setToTop])

    return (
        <div className='home'>
            <div className='main-content'>
                <div className='study-system' id='system'>
                    <div>
                        <span className='home-title'>爱思读™英国升学体系</span>
                        <div className='intro'>
                            <div className='left'>
                                <span className='label'>英国教育部前常务部长高度赞誉</span>
                                <QuoteStartOutlined className='quote-start' />
                                <div className='saying'>
                                    武质博士深入论述中国各种高考备考策略尚不足以应对英国教育机构的模式，她所构建的富有创新意识的爱思读框架凝练了有助于中国学生有效准备未来英国学习和成功的要点。
                                </div>
                                <span className='sayer'>——Sir David Bell</span>
                                <div style={{width:'100%'}}><QuoteEndOutlined className='quote-end' /></div>
                            </div>
                            <div className='right'>
                                <img src={aced} alt='爱思读高清logo' className='acde-logo' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='four-item'>
                            <div>
                                <AcademicOutlined className='four-item-icon' />
                                <span className='item-name'>学业</span>
                                <span className='desc'>
                                    学业通过笔试和面试来考查。笔试也不仅仅考核孩子的知识点掌握情况。
                                </span>
                            </div>
                            <div>
                                <TraitOutlined className='four-item-icon' />
                                <span className='item-name'>特质</span>
                                <span className='desc'>
                                    考官注重的其实是学生的沟通能力、领导力、探索精神、克服困难的能力。
                                </span>
                            </div>
                            <div>
                                <SpecialtyOutlined className='four-item-icon' />
                                <span className='item-name'>特长</span>
                                <span className='desc'>
                                    特长不只是学生的一技之长，也不只是学生是否获得了证书。
                                </span>
                            </div>
                            <div>
                                <TargetOutlined className='four-item-icon target-icon' />
                                <span className='item-name'>目标</span>
                                <span className='desc'>
                                    考官不只是看学生有没有目标，更希望了解学生设定目标的详细原因。
                                </span>
                            </div>
                        </div>
                        <div className='desc-intro'>
                            <span>英国顶尖学校是围绕学业、特质、特长以及目标这四个方面来选拔优秀学子的。 </span>
                            <span>由这四个标准组成的ACED™爱思读™英国升学体系</span>
                            <span>将迅速帮助中国学生成功转型，让申请世界名校的胜算更高一筹！</span>
                        </div>
                        <button className='learn-more' onClick={e => window.open('https://wwwwisdomspringeducom.scoreapp.com/')}>参加讲座 了解更多</button>
                    </div>
                </div>
                <div className='measurement'>
                    <span className='meas-title'>爱思读<sup style={{ marginTop: 3, fontSize: 16 }}>TM</sup>英国名校匹配测评</span>
                    <div className='intro'>
                        <p><span>3</span>分钟 ，<span>34</span>道题</p>
                        <p>清晰定位学生申请的优势和不足，挖掘潜力，合理择校</p>
                        <p>有效提高面试准备，极大提高名校录取率！</p>
                    </div>
                    <div className='mobiles'>
                        <div className='left'>
                            <MobileOutlined className='mobile' />
                            <div className='img'>
                                <img src={aced86} className='img1' alt='img' />
                                <img src={evaluRes} className='img2' alt='img' />
                            </div>
                        </div>
                        <div className='right'>
                            <MobileOutlined className='mobile' />
                            <img src={acedAnalysis} className='img' alt='img' />
                        </div>
                    </div>
                    <button className='learn-more' onClick={e => window.open('https://wwwwisdomspringeducom.scoreapp.com/')}>参加讲座 了解更多</button>
                </div>
                <div className='person' id="doctor">
                    <div className='person-intro'>
                        <div className='left'>
                            <img src={zhiDoctor} alt='武质博士' />
                        </div>
                        <div className='line'></div>
                        <div className='right'>
                            <span>武质博士（Dr Rebecca Zhi Herbert）</span>
                            <div>
                                <div>
                                    <img src={logo} alt='logo' />
                                    <span>英国教育学博士及博士后</span>
                                </div>
                                <div>
                                    <img src={logo} alt='logo' />
                                    <span>前英国雷丁大学国际招生官</span>
                                </div>
                                <div>
                                    <img src={logo} alt='logo' />
                                    <span>英国伯克郡学校校董</span>
                                </div>
                                <div>
                                    <img src={logo} alt='logo' />
                                    <span>英国牛津演讲会主席</span>
                                </div>
                                <div>
                                    <img src={logo} alt='logo' />
                                    <span>曾于中国武汉大学任教</span>
                                </div>
                                <div>
                                    <img src={logo} alt='logo' />
                                    <span>中英校际合作交流资深顾问</span>
                                </div>
                                <div>
                                    <img src={logo} alt='logo' />
                                    <span>多次接受国内外媒体采访，如BBC，牛津等电台，《界面新闻》、《国际金融报》等。</span>
                                </div>
                                <div>
                                    <img src={logo} alt='logo' />
                                    <span>在多家报刊《财新时报》、《金融时报》（Financial Times）等发表署名文章。</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='other-intro'>
                        作为一位高度敬业和备受推崇的教育专家，武质博士在中英两国科研、教学、国际教育等领域深耕25年，熟知英国贵族私立学校和顶尖大学的选拔标准，对指导国际学生适应英国教学具有丰富经验，帮助众多学子在海外顶尖学府脱颖而出。
                    </div>
                    <div className='btns'>
                        <button className='subscribe' onClick={e => window.open('https://10to8.com/book/drherbert/')}>预约咨询</button>
                        <Link to='/about/booking'>
                            <button className='subscribe'>预约武博讲座</button>
                        </Link>
                    </div>
                </div>
                <div className='speech' id="speech">
                    <div>
                        <div className='left'>
                            <span className='label'>英国牛津大学招生官 读后感言</span>
                            <QuoteStartOutlined className='quote-start' />
                            <div className='saying'>
                                对于那些希望立志报考牛津或剑桥大学的读者，武质博士提供了从中国过渡到英国教育体系的指导和诸多独一无二的实用建议。 我希望武博士的新书《牛津剑桥不是梦》会启发读者，选择英国教育，并充分利用书中所提供的独特见解。
                            </div>
                            <span className='sayer'>——Kate Kettle</span>
                            <div><QuoteEndOutlined className='quote-end' /></div>
                            <div className='summary'>
                                该书深入剖析了中英两国升读大学考核体制，总结了武博对包含牛津大学、布莱顿中学以内的多所英国名校校长、招生官的访谈，并详细阐述了ACED ™爱思读™英国名校升学体系的内容精华以及如何用该体系对孩子的升学方案、留学计划进行指导，为广大的学生与家长提供了从中小学，到大学的英国留学规划申请范本。
                            </div>
                        </div>
                        <div className='right'>
                            <div className='container'>
                                <img src={oxBook} alt='《牛津剑桥不是梦》' />
                            </div>
                            <button className='download'><Link to='/newbook'>下载书籍精选章节</Link></button>
                        </div>
                    </div>
                </div>
                <div className='program' id="program">
                    <span className='program-title'>ACED™️爱思读™️留学项目</span>
                    <div className='process'>
                        <div className='parents'>
                            <span>家长困扰</span>
                            <div>
                                <div>
                                    <WrongCircleOutlined className='pre' />
                                    <span>花费巨大，仍申请不到目标学校！</span>
                                </div>
                                <div>
                                    <WrongCircleOutlined className='pre' />
                                    <span>孩子十分努力，但依旧无法适应英国教学！</span>
                                </div>
                                <div>
                                    <WrongCircleOutlined className='pre' />
                                    <span>尽心竭力帮孩子做规划，却仍走上弯路！</span>
                                </div>
                            </div>
                        </div>
                        <div className='arrows'>
                            <ArrowRightOutlined />
                            <ArrowRightOutlined />
                            <ArrowRightOutlined />
                        </div>
                        <div className='aced'>
                            <img src={acedCircle} alt="aced-circle" />
                        </div>
                        <div className='arrows'>
                            <ArrowRightOutlined />
                            <ArrowRightOutlined />
                            <ArrowRightOutlined />
                        </div>
                        <div className='result'>
                            <span>项目成果</span>
                            <div>
                                <div>
                                    <RightCircleOutlined className='pre' />
                                    <span>英国教育学博士及博士后</span>
                                </div>
                                <div>
                                    <RightCircleOutlined className='pre' />
                                    <span>前英国雷丁大学国际招生官</span>
                                </div>
                                <div>
                                    <RightCircleOutlined className='pre' />
                                    <span>英国伯克郡学校校董</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='four-items'>
                        <div>
                            <span>辅导强化：</span>
                            <div>
                                <span>能力测试辅导、</span>
                                <span>科目补弱培优、</span>
                                <span>螺旋式逐步提升</span>
                            </div>
                        </div>
                        <div>
                            <span>技巧培训：</span>
                            <div>
                                <span>个人亮点挖掘、</span>
                                <span>成功特质展现、</span>
                                <span>招生官面试培训</span>
                            </div>
                        </div>
                        <div>
                            <span>背景提升：</span>
                            <div>
                                <span>挖掘个人潜力、</span>
                                <span>发挥个人特质、</span>
                                <span>快速深入提升</span>
                            </div>
                        </div>
                        <div>
                            <span>综合规划：</span>
                            <div>
                                <span>英式思维培养、</span>
                                <span>长远细致规划、</span>
                                <span>阶段性灵活调整</span>
                            </div>
                        </div>
                    </div>
                    <button className='learn-more' onClick={e => window.open('https://wwwwisdomspringeducom.scoreapp.com/')}>参加讲座 了解更多</button>
                </div>
                <div className='case'>
                    <div className='inner'>
                        <span>—— 成功案例 ——</span>
                        <div className='offers'>
                            <div>
                                <div className='text'>
                                    <span>David LIU</span>
                                    <span>2022 斩获牛津大学offer</span>
                                    <span>Materials Science</span>
                                </div>
                                <img src={student} alt='student-offer' />
                            </div>
                            <div>
                                <div className='text'>
                                    <span>Michael</span>
                                    <span>斩获帝国理工大学offer</span>
                                    <span>Materials Science</span>
                                </div>
                                <img src={student} alt='student-offer' />
                            </div>
                            <div>
                                <div className='text'>
                                    <span>Michael</span>
                                    <span>2021 斩获伦敦大学学院offer</span>
                                    <span>Materials Science</span>
                                </div>
                                <img src={student} alt='student-offer' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;