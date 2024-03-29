import React from "react";
import '../Cooperatecontact.scss'
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
import bkg from "../assets/oxford image 2.jpeg"
import coop from '../assets/睿质源合作助理.png'

// const isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);

// isMobile ? require('../Cooperatecontact_mobile.scss') :  require('../Cooperatecontact.css');


function Cooperatecontact() {
    return (

        // <div id="main">
        //     <div className="b-bk-img"></div>
        //     <div className="b-bk-blue"></div>
        //     <div className="b-bk-img-bottom"></div>
        //     <div className="b-main">

        <div className="Cooperatecontact">
            <div className="coop">
                <div className="b-bk-img"></div>
                <div className="b-title-yelow">与您携手共同服务，关注子女教育的高净值客户</div>
                <div className="b-continer">
                    <div className="b-title-wight">
                        <div className="b-title-item">
                            <img src={icon5} className="b-logo__" />
                            <div className="b-title-wight-text">
                                品牌合作
                            </div>
                        </div>
                        <div className="b-title-item">
                            <img src={icon6} className="b-logo__" />
                            <div className="b-title-wight-text">
                                产品服务合作
                            </div>
                        </div>
                        <div className="b-title-item">
                            <img src={icon7} className="b-logo__" />
                            <div className="b-title-wight-text">
                                渠道合作
                            </div>
                        </div>
                        <div className="b-title-item">
                            <img src={icon8} className="b-logo__" />
                            <div className="b-title-wight-text">
                                同行合作
                            </div>
                        </div>
                    </div>
                    <div className="b-line-yelow"></div>
                    <div className="b-title-wight">
                        <div className="b-title-wight-text" style={{ fontFamily: 'SourceHanSerif-Regular' }}>
                            媒体网站、知名公众号、行业名人进行品牌宣传
                        </div>
                        <div className="b-title-wight-text" style={{ fontFamily: 'SourceHanSerif-Regular' }}>
                            升学产品配套、资深培训导师等项目合作
                        </div>
                        <div className="b-title-wight-text" style={{ fontFamily: 'SourceHanSerif-Regular' }}>
                            国际学校、高净值行业客户共享合作
                        </div>
                        <div className="b-title-wight-text-long" style={{ fontFamily: 'SourceHanSerif-Regular' }}>
                            不存在业务竞争的同行，互帮互助，积极探寻合作生态
                        </div>
                    </div>
                </div>
            </div>
            <div className="cooper">
                <div className="b-title-yelow2">
                    部分合作伙伴
                </div>
                <div className="parts">
                    <div className="b-title-black">
                        ——媒体报道——
                    </div>
                    <div className="b-continer2">
                        <img src={repote1} className="b-repote" alt="brand" />
                        <img src={repote2} className="b-repote" alt="brand" />
                        <img src={repote3} className="b-repote" alt="brand" />
                        <img src={repote4} className="b-repote" alt="brand" />
                        <img src={repote5} className="b-repote" alt="brand" />
                        <img src={repote6} className="b-repote" alt="brand" />
                        <img src={repote7} className="b-repote" alt="brand" />
                        <img src={repote8} className="b-repote" alt="brand" />
                        <img src={repote9} className="b-repote" alt="brand" />
                        <img src={repote10} className="b-repote" alt="brand" />
                        <img src={repote11} className="b-repote" alt="brand" />
                        <img src={repote12} className="b-repote" alt="brand" />
                    </div>
                </div>

                {/* // <div className="b-title-black" style={{fontFamily: 'SourceHanSerif-Regular'}}>——国际学校——</div>
                // <div className="b-continer2"></div>
                // <div className="b-title-black" style={{fontFamily: 'SourceHanSerif-Regular'}}>——教育机构——</div>
                // <div className="b-continer2"></div>
                // <div className="b-title-black" style={{fontFamily: 'SourceHanSerif-Regular'}}>——高净值企业——</div>
                // <div className="b-continer2"></div>
                // <div className="b-title-black" style={{fontFamily: 'SourceHanSerif-Regular'}}>——知名公众号——</div>
                // <div className="b-continer2"></div>
                // <div className="b-bk-blue-bottom">
                //     <img  id='bgImg' src={bkg} alt="" style={{position: 'absolute', opacity: 0.08}}></img>
                //     <div className="b-br" style={{left: 580}}></div>
                //     <div className="b-title-yelow3">联系我们</div>
                //     <div className="b-br" style={{left: 793}}></div>
                //     <div className="b-connection">
                //         <div className="b-connection-left">
                //             <div className="b-line-text">电话：12345678910</div>
                //             <div className="b-null3"></div>
                //             <div className="b-line-text">邮箱：info@wisdomspringedu.com</div>
                //             <div className="b-connection-left-2DCode">
                //                 <img src={coop} className="b-twoDcode" />
                //                 <div className="b-connection-left-2DCode-right">
                //                     <div className="b-line-text">扫码添加</div>
                //                     <div className="b-null3"></div>
                //                     <div className="b-line-text">睿质源合作助理</div>
                //                 </div> */}

                <div className="parts">
                    <div className="b-title-black">
                        ——国际学校——
                    </div>
                    <div className="b-continer2"></div>
                </div>
                <div className="parts">
                    <div className="b-title-black">
                        ——教育机构——
                    </div>
                    <div className="b-continer2"></div>
                </div>
                <div className="parts">
                    <div className="b-title-black">
                        ——高净值企业——
                    </div>
                    <div className="b-continer2"></div>
                </div>
                <div className="parts">
                    <div className="b-title-black">
                        ——知名公众号——
                    </div>
                    <div className="b-continer2"></div>
                </div>
                <div className="parts">
                    <div className="b-title-black">
                        ——国际学校——
                    </div>
                    <div className="b-continer2"></div>
                </div>
                <div className="parts">
                    <div className="b-title-black">
                        ——国际学校——
                    </div>
                    <div className="b-continer2"></div>
                </div>
            </div>
            <div className="contactus">
                <img src={bkg} alt="bg" className="bgImg" />
                <div className="b-title-yelow3">——联系我们——</div>
                <div className="parts">
                    <div className="left">
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
                    <div className="right">
                        <div className="b-publicizePhoto">宣传册最新图片</div>
                        <button type="button" className="b-clicl-connection">点击下载合作手册</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cooperatecontact;