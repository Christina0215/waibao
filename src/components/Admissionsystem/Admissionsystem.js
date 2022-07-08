import React from "react";
import bg1_img from "../assets/v2_rd09m7.png"
import bg2_img from "../assets/v2_rc12tw.png"
import bg3_img1 from "../assets/v2_rd3ytd.png"
import bg3_img2 from "../assets/v2_rd3yva.png"
import bg3_img3 from "../assets/v2_rd3ywr.png"
import bg3_img4 from "../assets/v2_rd3xti.png"
import bg4_img from "../assets/v2_rd3wix.png"
import bg4_icon from "../assets/bg4-icon.png"
import bg5_img from "../assets/v2_rd0ady.png"
import "./Admissionsystem.css"


function Admissionsystem(){
    return(
        <div style={{position: "relative"}}>
            <div id="bg1">
                <img src={bg1_img} alt="" style={{left: 0, top: 75, width: 1440, height: 944, opacity: 0.2 }}></img>
                <div id="bg1-text">
                    <p>课业成绩比兴趣爱好更重要？</p>
                    <p>考级考证、参加背景提升项目会对升学有帮助？</p>
                    <p>认真听话的好学生一定更受招生官青睐？</p>
                    <p>{'\u00A0'}</p>
                    <p>如果您的回答是Yes！</p>
                    <p>那么您已经陷入了英国留学误区！</p>
                    <p>根本原因是您还在用中国教育思维应对英国教育体系</p>
                    <p>{'\u00A0'}</p>
                    <p>摆脱留学误区</p>
                    <p>转型成爱思读学子</p>
                    <p>是成功申请名校的第一步！</p>
                </div>
                <button id="bg1-btn" onClick={e => window.open('https://wwwwisdomspringeducom.scoreapp.com/')}>查看留学常见误区</button>
            </div>
            <div id="bg2">
                <div id="bg2-title">
                    <p>爱思读体系</p>
                    <p>深受英国教育部前常务部长高度赞誉</p>
                </div>
                <div id="bg2-text">
                    <p>
                        人们都往往习惯于自己熟悉的舒适区，所以思考其他国家教育体系的要求会觉得困难重重，
                        但是武质博士却提供了更有助于了解英国教育的路径图。
                    </p>
                </div>
                <div id="bg2-author">
                    <p>——Sir David Bell</p>
                </div>
                <div id="bg2-img">
                    <img src={bg2_img} alt="" style={{left: 772, top: 320, width: 545, height: 224}}></img>
                </div>
            </div>
            <div id="bg3">
                <div id="bg3-title">
                    <p>英国顶尖学校是围绕学业、特质、特长以及目标这四个方面来选拔优秀学子的。</p>
                    <p>由这四个标准组成的ACED™爱思读™英国升学体系</p>
                    <p>迅速帮助中国学生成功转型，让申请世界名校的胜算更高一筹！</p>
                </div>
                <div id="bg3-img1">
                    <img src={bg3_img1} alt="" style={{left: 190, top: 308, width: 196, height: 267}}></img>
                </div>
                <div id="bg3-tit1">学业</div>
                <div id="bg3-text1">
                    <p>学业通过笔试和面试来考查。笔试也不仅仅考核孩子的知识点掌握情况，而是通过平时成绩单、笔试考试成绩单、能力倾向测试考查学生的语言能力、学习能力和学习方法。而面试则重视孩子的...详情</p>
                </div>
                <div id="bg3-img2">
                    <img src={bg3_img2} alt="" style={{left: 190, top: 308, width: 196, height: 267}}></img>
                </div>
                <div id="bg3-tit2">特质</div>
                <div id="bg3-text2">
                    <p>考官注重的其实是学生的沟通能力、领导力、探索精神、克服困难的能力。如果有了良好的领导能力，能够领导他人，自然而然也有很强的自控力和独立性；能与他人积极沟通，也说明了学生...详情</p>
                </div>
                <div id="bg3-img3">
                    <img src={bg3_img3} alt="" style={{left: 190, top: 308, width: 196, height: 267}}></img>
                </div>
                <div id="bg3-tit3">特长</div>
                <div id="bg3-text3">
                    <p>特长不只是学生的一技之长，也不只是学生是否获得了证书，能证明自己在此项目上有很深的造诣。英国考官更注重学生是否真的热爱这项活动，是否有丰富的...详情</p>
                </div>
                <div id="bg3-img4">
                    <img src={bg3_img4} alt="" style={{left: 190, top: 308, width: 196, height: 267}}></img>
                </div>
                <div id="bg3-tit4">目标</div>
                <div id="bg3-text4">
                    <p>考官不只是看学生有没有目标，更希望了解学生设定目标的详细原因，短期以及长期的规划，为了目标做了哪些努力，克服了哪些困难。</p>
                </div>
            </div>
            <div id="bg4">
                <div id="bg4-title">英国升学测评</div>
                <div id="bg4-text1">
                    <div>“爱思读™ACED™英国升学测评”由睿质源教育创始人及学术总监——武质博士（Dr Rebecca Zhi Herbert），带领测评研发专</div>
                    <div>家团队，严格根据英国顶尖贵族学校和大学选拔标准,对大量申请案例进行细化分析而研发。</div>
                    <div>{'\u00A0'}</div>
                    <div>从“ACED”四大标准检测孩子在英国申请中的优势和不足，清晰定位，从而针对性的帮助学生发挥个人优势，提升学生的综合实</div>
                    <div>力，大大提高被英国顶尖院校录取的机率。</div>
                </div>
                <div id="bg4-img">
                    <img src={bg4_img} alt="" style={{left: 155, top: 415, width: 572, height: 342}}></img>
                </div>
                <img src={bg4_icon} alt="" style={{left: 792, top: 441, width: 24, height: 24, position: "absolute"}}></img>
                <img src={bg4_icon} alt="" style={{left: 792, top: 477, width: 24, height: 24, position: "absolute"}}></img>
                <img src={bg4_icon} alt="" style={{left: 792, top: 513, width: 24, height: 24, position: "absolute"}}></img>
                <img src={bg4_icon} alt="" style={{left: 792, top: 549, width: 24, height: 24, position: "absolute"}}></img>
                <img src={bg4_icon} alt="" style={{left: 792, top: 585, width: 24, height: 24, position: "absolute"}}></img>
                <div id="bg4-text2">
                    <div>测评对象：7-18岁学生</div>
                    <div>题目数量：共34道</div>
                    <div>提交答案立即获取测评结果！</div>
                    <div>根据您的答题情况我们会给出个性化方案！</div>
                    <div>帮助学生扬长避短，让申请名校更有把握！</div>
                </div>
                <button id="bg4-btn" onClick={e => window.open('https://wwwwisdomspringeducom.scoreapp.com/')}>查看名校匹配度</button>
            </div>
            <div id="bg5">
                <img src={bg5_img} alt="" style={{left: 0, top: 3412, width: 1440, height: 790, opacity: 0.2}}></img>
                <video src="https://cdn.modao.cc/Default_video.mp4" controls style={{left: 72, top: 100, width: 400, height: 225, position: "absolute"}}></video>
                <video src="https://cdn.modao.cc/Default_video.mp4" controls style={{left: 72, top: 365, width: 400, height: 225, position: "absolute"}}></video>
                <video src="https://cdn.modao.cc/Default_video.mp4" controls style={{left: 520, top: 100, width: 400, height: 225, position: "absolute"}}></video>
                <video src="https://cdn.modao.cc/Default_video.mp4" controls style={{left: 520, top: 365, width: 400, height: 225, position: "absolute"}}></video>
                <video src="https://cdn.modao.cc/Default_video.mp4" controls style={{left: 968, top: 100, width: 400, height: 225, position: "absolute"}}></video>
                <video src="https://cdn.modao.cc/Default_video.mp4" controls style={{left: 968, top: 365, width: 400, height: 225, position: "absolute"}}></video>
                <button id="bg5-btn1" onClick={e => window.open('https://wwwwisdomspringeducom.scoreapp.com/')}>下载书籍节选</button>
                <button id="bg5-btn2" onClick={e => window.open('https://wwwwisdomspringeducom.scoreapp.com/')}>预约讲座</button>
            </div>
        </div>
    )
}
export default Admissionsystem;