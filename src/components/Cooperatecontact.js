import React from "react";
import '../Cooperatecontact.css'
import icon5 from "../assets/my-icon(5).png"
import icon6 from "../assets/my-icon(6).png"
import icon7 from "../assets/my-icon(7).png"
import icon8 from "../assets/my-icon(8).png"
import repote1 from "../assets/v2_rd4fyf.png"
import repote2 from "../assets/v2_rd4fu8.png"
import repote3 from "../assets/v2_rd0u79.png"
import repote4 from "../assets/v2_rd0u8i.png"
import repote5 from "../assets/v2_rd0ubi.png"
import repote6 from "../assets/v2_rd0ug4.png"
import repote7 from "../assets/v2_rd0uh9.png"
import repote8 from "../assets/v2_rd0ura.png"
import repote9 from "../assets/v2_rd0ush.png"
import repote10 from "../assets/v2_rd0uth.png"
import repote11 from "../assets/v2_rd0v3r.png"
import repote12 from "../assets/v2_rd0v8f.png"
import coop from '../assets/睿质源合作助理.png'


function Cooperatecontact() {
    return (
        <div>
            <div className="b-bk-img"></div>
            <div className="b-bk-blue"></div>
            <div className="b-bk-img-bottom"></div>
            <div className="b-main">
                <div className="b-title-yelow">与您携手共同服务，关注子女教育的高净值客户</div>
                <div className="b-continer">
                    <div className="b-icon-yelow">
                        <img src={icon5} className="b-logo__" />
                        <img src={icon6} className="b-logo__" />
                        <img src={icon7} className="b-logo__" />
                        <img src={icon8} className="b-logo__" />
                    </div>
                    <div className="b-title-wight">
                        <div className="b-title-wight-text">品牌合作</div>
                        <div className="b-title-wight-text">产品服务合作</div>
                        <div className="b-title-wight-text">渠道合作</div>
                        <div className="b-title-wight-text-short">同行合作</div>
                    </div>
                    <div className="b-line-yelow"></div>
                    <div className="b-title-wight">
                        <div className="b-title-wight-text" style={{fontFamily: 'SourceHanSerif-regular'}}>媒体网站、知名公众号、行业名人进行品牌宣传</div>
                        <div className="b-title-wight-text" style={{fontFamily: 'SourceHanSerif-regular'}}>升学产品配套、资深培训导师等项目合作</div>
                        <div className="b-title-wight-text" style={{fontFamily: 'SourceHanSerif-regular'}}>国际学校、高净值行业客户共享合作</div>
                        <div className="b-title-wight-text-long" style={{fontFamily: 'SourceHanSerif-regular'}}>不存在业务竞争的同行，互帮互助，积极探寻合作生态</div>
                    </div>
                </div>
                <div className="b-title-yelow2" style={{fontFamily: 'SourceHanSerif-regular'}}>部分合作伙伴</div>
                <div className="b-title-black" style={{fontFamily: 'SourceHanSerif-regular'}}>——媒体报道——</div>
                <div className="b-continer2">
                    <div className="b-continer2-line">
                        <img src={repote1} className="b-repote" />
                        <img src={repote2} className="b-repote" />
                        <img src={repote3} className="b-repote" />
                        <img src={repote4} className="b-repote" />
                        <img src={repote5} className="b-repote" />
                        <img src={repote6} className="b-repote" />
                    </div>
                    <div className="b-continer2-line">
                        <img src={repote7} className="b-repote" />
                        <img src={repote8} className="b-repote" />
                        <img src={repote9} className="b-repote" />
                        <img src={repote10} className="b-repote" />
                        <img src={repote11} className="b-repote" />
                        <img src={repote12} className="b-repote" />
                    </div>
                </div>
                <div className="b-title-black" style={{fontFamily: 'SourceHanSerif-regular'}}>——国际学校——</div>
                <div className="b-continer2"></div>
                <div className="b-title-black" style={{fontFamily: 'SourceHanSerif-regular'}}>——教育机构——</div>
                <div className="b-continer2"></div>
                <div className="b-title-black" style={{fontFamily: 'SourceHanSerif-regular'}}>——高净值企业——</div>
                <div className="b-continer2"></div>
                <div className="b-title-black" style={{fontFamily: 'SourceHanSerif-regular'}}>——知名公众号——</div>
                <div className="b-continer2"></div>
                <div className="b-bk-blue-bottom">
                    <div className="b-title-yelow3">——联系我们——</div>
                    <div className="b-connection">
                        <div className="b-connection-left">
                            <div className="b-line-text">电话：12345678910</div>
                            <div className="b-null3"></div>
                            <div className="b-line-text">邮箱：info@wisdomspringedu.com</div>
                            <div className="b-connection-left-2DCode">
                                <img src={coop} className="b-twoDcode" />
                                <div className="b-connection-left-2DCode-right">
                                    <div className="b-line-text">扫码添加</div>
                                    <div className="b-null3"></div>
                                    <div className="b-line-text">睿质源合作助理</div>
                                </div>
                            </div>
                        </div>
                        <div className="b-connection-right">
                            <div className="b-publicizePhoto">宣传册最新图片</div>
                            <button type="button" className="b-clicl-connection">点击下载合作手册</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cooperatecontact;