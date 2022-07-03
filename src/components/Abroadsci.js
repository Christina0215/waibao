import React, { useState } from "react";
import abroadback from '../assets/abroadback.png';
import wechat from '../assets/wechat.jpg';
import videoqr from '../assets/留学疑问.png';
import redqr from '../assets/留学咨询.png';
import '../abroad.css';
import './Layout/Board'
import board1_1 from '../assets/board1-1.jpg';
import board1_2 from '../assets/board1-2.jpg';
import board1_3 from '../assets/board1-3.jpg';
import board1_4 from '../assets/board1-4.jpg';
import board1_5 from '../assets/board1-5.jpg';
import board2_1 from '../assets/board2-1.jpg';
import board2_2 from '../assets/board2-2.jpg';
import board2_3 from '../assets/board2-3.jpg';
import board2_4 from '../assets/board2-4.jpg';
import board2_5 from '../assets/board2-5.jpg';
import board2_6 from '../assets/board2-6.jpg';
import board2_7 from '../assets/board2-7.jpg';
import board2_8 from '../assets/board2-8.jpg';
import board2_9 from '../assets/board2-9.jpg';
import Board from "./Layout/Board";

function Abroadsci() {
    const pics1 = [
        board1_1,
        board1_2,
        board1_3,
        board1_4,
        board1_5,
    ];
    const pics2 = [
        board2_1,
        board2_2,
        board2_3,
        board2_4,
        board2_5,
        board2_6,
        board2_7,
        board2_8,
        board2_9,
    ];
    const [pics, setPics] = useState(pics1);
    const [title, setTitle] = useState(['boardtitleact','boardtitle']);
    function set1(){
        console.log('1')
        setTitle(['boardtitleact','boardtitle'])
        setPics(pics1)
    }
    function set2(){
        setTitle(['boardtitle','boardtitleact'])
        setPics(pics2)
    }
    return (
        <div>
            <div className='cover'>
                <img className='bgimg' src={abroadback} />
                <div className='title' style={{ left: '654px', top: '119px', fontSize: '36px' }}>留学科普</div>
                <div className='title' style={{ left: '572px', top: '191px', fontSize: '28px' }}>全平台同名：武博在英伦</div>
                <div className='title' style={{ left: '535px', top: '247px', fontSize: '24px' }}>微信/视频号/小红书/头条/微博/知乎</div>
            </div>
            <div className='wechat' style={{ left: '0px', top: '460px' }}>
                <div style={{ left: '650px', top: '544px', fontSize: '28px', color: '#0F265C', position: 'absolute' }}>微信公众号</div>
                <div className="dash" style={{
                    left: '640px',
                    top: '600px'
                }} />
                <div className="emptyimg" style={{
                    left: '86px',
                    top: '652px'
                }} />
                <div className="wctitle" style={{
                    left: '86px',
                    top: '972px'
                }}>专家辟谣！被过度深化的EPQ到底有没有用？</div>
                <div className="wccontent" style={{
                    left: '86px',
                    top: '1010px'
                }}>EPQ远不如部分中介宣传语中的那么神奇！盲目选择EPQ项目更可能得不偿失</div>
                <div className="emptyimg" style={{
                    left: '523px',
                    top: '652px'
                }} />
                <div className="wctitle" style={{
                    left: '523px',
                    top: '972px'
                }}>Ofsted首长为武博新书作序！一文科普【英国教育标准局Ofsted】</div>
                <div className="wccontent" style={{
                    left: '525px',
                    top: '1046px'
                }}>英国教育能在世界范围内遥遥领先，离不开其有力的监管与测评体系，Ofsted作为英国政府部门，就是其中最为权威和重要的机构。</div>
                <div className="emptyimg" style={{
                    left: '961px',
                    top: '652px'
                }} />
                <div className="wctitle" style={{
                    left: '961px',
                    top: '972px'
                }}>如何正确预防小留学生的“心理感冒”？</div>
                <div className="wccontent" style={{
                    left: '961px',
                    top: '1017px'
                }}>分离焦虑、文化藩篱、语言障碍、社交孤独、校园霸凌......低龄留学心理问题不容忽视，家长需提早进行心理干预，避免发展成心理健康问题</div>
                <div className="emptyimg" style={{
                    left: '86px',
                    top: '1186px'
                }} />
                <div className="wctitle" style={{
                    left: '89px',
                    top: '1506px'
                }}>最新的牛津大学「十大热门专业」全解析，内附申请加分技巧！</div>
                <div className="wccontent" style={{
                    left: '89px',
                    top: '1576px'
                }}>牛津热门专业究竟学什么？录取标准是什么？自家孩子还有哪些差距？有哪些录取加分项？申请时有什么额外考试需要参加吗？牛津大学十大热门专业最全解析，帮助大家理解牛津官方的招生细节、标准。</div>
                <div className="emptyimg" style={{
                    left: '526px',
                    top: '1186px'
                }} />
                <div className="wctitle" style={{
                    left: '525px',
                    top: '1506px'
                }}>牛剑申请| 学院制大揭秘，手把手教你选学院</div>
                <div className="wccontent" style={{
                    left: '525px',
                    top: '1551px'
                }}>在英国，学院制（collegiate system）是一种沿用数百年的特殊制度，它为来自不同专业和年级的学生提供一个小型社区，让学生们在这里生活、学习、社交。分在同一个学院（college）的学生，是来自不同专业、不同年级的。</div>
                <img src={wechat} style={{
                    position: "absolute",
                    left: '645px',
                    top: '1731px',
                    width: '160px',
                    height: '160px',
                }} />
                <div className="udwc" style={{
                    left: '622px',
                    top: '1911px'
                }}>更多留学科普 欢迎扫码关注</div>
            </div>
            <div className="videopage">
                <div style={{ left: '678px', top: '2047px', fontSize: '28px', color: '#CFA642', position: 'absolute' }}>视频号</div>
                <div className="dash" style={{
                    left: '640px',
                    top: '2107px'
                }} />
                <video controls src={'https://www.runoob.com/try/demo_source/movie.mp4'} className="video" style={{
                    left: '80px',
                    top: '2174px'
                }}>
                </video>
                <video controls src={'https://www.runoob.com/try/demo_source/movie.mp4'} className="video" style={{
                    left: '520px',
                    top: '2174px'
                }}>
                </video>
                <video controls src={'https://www.runoob.com/try/demo_source/movie.mp4'} className="video" style={{
                    left: '960px',
                    top: '2174px'
                }}>
                </video>
                <img src={videoqr} style={{
                    position: "absolute",
                    left: '643px',
                    top: '2554px',
                    width: '160px',
                    height: '160px',
                }} />
                <div className="udwc" style={{ color: 'white', left: '622px', top: '2734px' }}>更多留学科普 欢迎扫码关注</div>
            </div>
            <div className="redbook">
                <div style={{ left: '678px', top: '2912px', fontSize: '28px', color: '#0F265C', position: 'absolute' }}>小红书</div>
                <div className="dash" style={{
                    left: '645px',
                    top: '2968px'
                }} />
                <Board pics={pics} />
                <div onClick={set1} className={title[0]} style={{ left: '720px', top: '3041px' }}>一个模型读懂——外国教授常说的批判性思维到底是什么？</div>
                <div onClick={set2} className={title[1]} style={{ left: '720px', top: '3197px' }}>英文名也分年龄段！！如何取个合适的英文名？</div>
                <div className="boardtitle" style={{ left: '720px', top: '3353px' }}>剑桥英语考试&amp;KET最全科普备扫盲贴</div>
                <div className="boardtitle" style={{ left: '720px', top: '3509px' }}>100+英国中学阅读书单最全整理</div>
                <div className="boardtitle" style={{ left: '720px', top: '3665px' }}>英语学习必备影单！10部经典英文电影</div>
                <img src={redqr} style={{
                    position: "absolute",
                    left: '645px',
                    top: '3862px',
                    width: '160px',
                    height: '160px',
                }} />
                <div className="udwc" style={{
                    left: '622px',
                    top: '4042px'
                }}>更多留学科普 欢迎扫码关注</div>
            </div>
        </div>
    )
}
export default Abroadsci;