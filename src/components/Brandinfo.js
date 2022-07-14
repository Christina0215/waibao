import React from "react";
import abroadback from '../assets/abroadback.png';
import content1 from '../assets/content1.png';
import content2 from '../assets/content2.jpg';
import content3 from '../assets/content3.png';
import jiantou1 from '../assets/jiantou1.png';
import jiantou2 from '../assets/jiantou2.png';
import '../abroad.css'

function Brandinfo() {
    return (
        <div>
            <div className='cover'>
                <img className='bgimg' src={abroadback} />
                <div className='title' style={{
                    top: '175px',
                    fontFamily: 'SourceHanSerifSC-Bold'
                }}>武博在海内外主流媒体的文章及采访</div>
            </div>
            <div className="content" style={{ top: '476px' }}>
                <img className='contentimg' style={{
                    left: '120px',
                    top: '516px'
                }} src={content1} />
                <div className="contenttitle" style={{
                    left: '648px',
                    top: '544px'
                }} >国内家长对国际教育的三大认知空白</div>
                <div className="contentword" style={{
                    left: '648px',
                    top: '611px'
                }} >家长自身没有中小学阶段的国际教育经历，如何知道花在国际学校的钱是物有所值还是买了个心理安慰？</div>
                <div className="contentend" style={{
                    left: '648px',
                    top: '693px'
                }} >来源：《金融时报》</div>
                <div className="contentbutton" style={{
                    left: '1156px',
                    top: '693px'
                }} >阅读全文</div>
                <img src={jiantou1} alt="" style={{left: 1270, top: 706.5, width: 16, height: 16, position: "absolute"}}></img>
            </div>
            <div className="content" style={{ top: '796px', backgroundColor: '#0F265C' }}>
                <img className='contentimg' src={content2} style={{
                    left: '120px',
                    top: '836px'
                }} />
                <div className="contenttitle" style={{
                    left: '648px',
                    top: '864px',
                    color: 'white'
                }} >国际教育需求向二三线城市转移，但还面临两大挑战</div>
                <div className="contentword" style={{
                    left: '648px',
                    top: '931px',
                    color: 'white'
                }} >未来中国国际教育需求增长会逐渐从一线城市转移至二三线城市？武质博士认同这一趋势，并指出：家长认知仍需普及，稳定高质量的外国师资匮乏！</div>
                <div className="contentend" style={{
                    left: '648px',
                    top: '1013px',
                    color: 'white'
                }} >来源：《界面新闻》</div>
                <div className="contentbutton" style={{
                    left: '1156px',
                    top: '1013px'
                }} >阅读全文</div>
                <img src={jiantou2} alt="" style={{left: 1270, top: 1026.5, width: 16, height: 16, position: "absolute", backgroundColor: "white"}}></img>
            </div>
            <div className="content" style={{ top: '1116px' }}>
                <img className='contentimg' src={content3} style={{
                    left: '120px',
                    top: '1156px'
                }} />
                <div className="contenttitle" style={{
                    left: '648px',
                    top: '1184px'
                }} >谷爱凌的写作才能比回国参加奥数更值得关注</div>
                <div className="contentword" style={{
                    left: '648px',
                    top: '1251px'
                }} >大多人忽视的写作能力竟然比SAT满分更能让招生官眼前一亮！一篇文章就能充分展现谷爱凌完全符合ACED爱思读学子全部标准，武博深度剖析奥运冠军谷爱凌斩获斯坦福名校offer的关键所在！</div>
                <div className="contentend" style={{
                    left: '648px',
                    top: '1333px'
                }} >来源：《金融时报》</div>
                <div className="contentbutton" style={{
                    left: '1156px',
                    top: '1333px'
                }} >阅读全文</div>
                <img src={jiantou1} alt="" style={{left: 1270, top: 1346, width: 16, height: 16, position: "absolute"}}></img>
            </div>
            <div className="content" style={{ top: '1436px' , backgroundColor: '#0F265C' }}>
                <img className='contentimg' src={content1} style={{
                    left: '120px',
                    top: '1476px'
                }} />
                <div className="contenttitle" style={{
                    left: '648px',
                    top: '1504px',
                    color: 'white'
                }} >“洋文凭”还吃香吗？疫情常态化下的2022年留学新趋势</div>
                <div className="contentword" style={{
                    left: '648px',
                    top: '1571px',
                    color: 'white'
                }} >随着中国大学世界排名的攀升，国内高校毕业生的竞争力与日俱增。相较之下，留学生在中国就业市场正逐渐失去竞争优势。但也不能因此否定留学交流的作用，有调研显示，海归在创造力、沟通能力、协作能力等软实力方面的表现更加突出。
                </div>
                <div className="contentend" style={{
                    left: '648px',
                    top: '1653px',
                    color: 'white'
                }} >来源：《国际金融报》</div>
                <div className="contentbutton"  style={{
                    left: '1156px',
                    top: '1653px'
                }} >阅读全文</div>
                <img src={jiantou2} alt="" style={{left: 1270, top: 1666, width: 16, height: 16, position: "absolute", backgroundColor: "white"}}></img>
            </div>
        </div>
    )
}
export default Brandinfo;