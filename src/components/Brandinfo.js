import React from "react";
import abroadback from '../assets/abroadback.png';
import content1 from '../assets/content1.png';
import content2 from '../assets/content2.jpg';
import content3 from '../assets/content3.png';
import '../abroad.css'

function Brandinfo(){
    return(
        <div>
            <div className='cover'>
                <img className='bgimg'src={abroadback} />
                <div className='title'>武博在海内外主流媒体的文章及采访</div>
            </div>
            <div className="content1">
                <img className='contentimg1'src={content1} />
                <div className="contenttitle1">国内家长对国际教育的三大认知空白</div>
                <div className="contentword1">家长自身没有中小学阶段的国际教育经历，如何知道花在国际学校的钱是物有所值还是买了个心理安慰？</div>
                <div className="contentend1">来源：《金融时报》</div>
                <div className="contentbutton1">阅读全文</div>
            </div>
            <div className="content2">
                <img className='contentimg2'src={content2} />
                <div className="contenttitle2">国际教育需求向二三线城市转移，但还面临两大挑战</div>
                <div className="contentword2">未来中国国际教育需求增长会逐渐从一线城市转移至二三线城市？武质博士认同这一趋势，并指出：家长认知仍需普及，稳定高质量的外国师资匮乏！</div>
                <div className="contentend2">来源：《界面新闻》</div>
                <div className="contentbutton2">阅读全文</div>
            </div>
            <div className="content3">
                <img className='contentimg3'src={content3} />
                <div className="contenttitle3">谷爱凌的写作才能比回国参加奥数更值得关注</div>
                <div className="contentword3">大多人忽视的写作能力竟然比SAT满分更能让招生官眼前一亮！一篇文章就能充分展现谷爱凌完全符合ACED爱思读学子全部标准，武博深度剖析奥运冠军谷爱凌斩获斯坦福名校offer的关键所在！</div>
                <div className="contentend3">来源：《金融时报》</div>
                <div className="contentbutton3">阅读全文</div>
            </div>
            <div className="content4">
                <img className='contentimg4'src={content1} />
                <div className="contenttitle4">“洋文凭”还吃香吗？疫情常态化下的2022年留学新趋势</div>
                <div className="contentword4">随着中国大学世界排名的攀升，国内高校毕业生的竞争力与日俱增。相较之下，留学生在中国就业市场正逐渐失去竞争优势。但也不能因此否定留学交流的作用，有调研显示，海归在创造力、沟通能力、协作能力等软实力方面的表现更加突出。
</div>
                <div className="contentend4">来源：《国际金融报》</div>
                <div className="contentbutton4">阅读全文</div>
            </div>
        </div>
    )
}
export default Brandinfo;