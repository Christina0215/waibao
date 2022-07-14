import React from "react";

import {
    QuoteStartOutlined,
    QuoteEndOutlined
} from '../../common/Icons'

import campus from '../../assets/campus.jpg'
import davidBell from '../../assets/David Bell.png'
import kateKettle from '../../assets/Kate Kettle.png'
import oxfordBook from '../../assets/OxfordBook.png'
import brand1 from '../../assets/brand1.png'
import brand2 from '../../assets/brand2.png'
import brand3 from '../../assets/brand3.png'
import brand4 from '../../assets/brand4.png'
import brand5 from '../../assets/brand5.svg'

import './newbook.scss'

const Newbook = () => {
    return (
        <div className='newbook'>
            <div className='suggest'>
                <img src={campus} alt='bg' className='campus' />
                <span className='sug-title'>英国教育部常务部长与牛津大学招生官权威力荐</span>
                <div>
                    <div className='item'>
                        <img src={davidBell} alt='David Bell' />
                        <span className='name'>David Bell 爵士</span>
                        <div className='identity'>
                            <span>前英国教育部常务部长</span>
                            <span>前英国教育标准局（Ofsted）首长</span>
                            <span>桑德兰大学校长及首席执行官</span>
                        </div>
                        <div className='quotes'>
                            <span>“这部著作多视角地展示中国学生在英国教育体制中获得成功的经验，其丰富的内容基于作者本人的亲身经历，以及对英国教育界中主管国际学生招生的重要人物的细致采访。</span>
                            <span>总而言之，这是一部由本领域的权威专家撰写的宝贵指南。我坚信中国家庭必然会从当前和未来的英国教育中受益匪浅。”</span>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={kateKettle} alt='Kate Kettle' />
                        <span className='name'>Kate Kettle</span>
                        <div className='identity'>
                            <span>前牛津大学招生官</span>
                            <span>伦敦国王学院招生官</span>
                        </div>
                        <div className='quotes'>
                            <span>“武博士的专业背景和在英国教育系统中的丰富经验立即给我留下了深刻印象。她有着坚实的专业知识为希望在英国学习的中国学生提供相应的建议和指导。</span>
                            <span>武博士将她毕生所知的专业知识汇集到这本书中。 我相信她的书对所以希望到英国留学中国学生及家长来说是一个非常实用的指南。”</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='resource'>
                <div className='book'>
                    <div className='container'>
                        <img src={oxfordBook} alt='OxfordBook' />
                    </div>
                    <div className='desc'>
                        <span className='instruct'>
                            《牛津剑桥不是梦》深入剖析了中英两国的考核体制，总结了武博对牛津大学、布莱顿中学等多所英国名校校长、招生官的访谈，并详细阐述了ACED ™爱思读™英国名校升学体系以及如何用该体系对孩子的升学方案、留学计划进行指导，为广大的学生与家长提供了英国小学及初高中的留学规划申请范本。
                        </span>
                        <button>下载精选章节</button>
                    </div>
                </div>
                <div className='intro'>
                    <span>名校校长、招生官 </span>
                    <span>倾情讲述英国顶尖学府录取背后的决策历程</span>
                </div>
                <div className='videos'>
                    <div className='i-video'>
                        <video src='https://cdn.modao.cc/Default_video.mp4' controls></video>
                        <div className='tips'>
                            <span>武博采访——布莱顿中学校长</span>
                            <span>“主题：XXXXXX”</span>
                        </div>
                    </div>
                    <div className='i-video'>
                        <video src='https://cdn.modao.cc/Default_video.mp4' controls></video>
                        <div className='tips'>
                            <span>武博采访——牛津大学校长</span>
                            <span>“主题：XXXXXX”</span>
                        </div>
                    </div>
                    <div className='i-video'>
                        <video src='https://cdn.modao.cc/Default_video.mp4' controls></video>
                        <div className='tips'>
                            <span>武博采访视频</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='remarks'>
                <span className='re-title'>国内外知名媒体报道，深受广大读者喜爱</span>
                <div className='brand'>
                    <img src={brand1} alt='brand1' />
                    <img src={brand2} alt='brand2' />
                    <img src={brand3} alt='brand3' />
                    <img src={brand4} alt='brand4' />
                    <img src={brand5} alt='brand5' />
                </div>
                <span className='re-title2'>作者寄语</span>
                <div className='quote'>
                    <QuoteStartOutlined className='quote-start' />
                    <div className='saying'>
                        <span>写这本书，是想将我个人对英国教育的观察与理解进行整理和理论升华，总结成ACED™爱思读™英国名校申请体系分享给大家。书中不仅分析中英两国教育体系、教学实操、教育理念的差异，同时还记录了我对如布莱顿中学、牛津大学等英国名校校长、招生官的采访，向中国家庭传输英国学校选拔学生的标准。</span>
                        <span>我希望每一位正在或即将在英国就读的学生家长，都能通过这本书了解英国精英教育的核心理念，掌握申请的精髓和根本要素。无论申请哪所英国学校，这本书都能为你带来启发，成为孩子留学路上的引路人，成功激发孩子潜能，获得理想英国院校Offer，助力孩子融入多元文化的英国社会，成为具有国际视野的新一代中国精英！</span>
                    </div>
                    <div><QuoteEndOutlined className='quote-end' /></div>
                </div>
                <div className='videos'>
                    <video src='https://cdn.modao.cc/Default_video.mp4' controls></video>
                    <video src='https://cdn.modao.cc/Default_video.mp4' controls></video>
                    <video src='https://cdn.modao.cc/Default_video.mp4' controls></video>
                    <video src='https://cdn.modao.cc/Default_video.mp4' controls></video>
                    <video src='https://cdn.modao.cc/Default_video.mp4' controls></video>
                    <video src='https://cdn.modao.cc/Default_video.mp4' controls></video>
                </div>
            </div>
        </div>
    )
}
export default Newbook;