import React from "react";
import bg6_img1 from "../assets/bg6-img1.png"
import bg6_img2 from "../assets/bg6-img2.png"
import "./Abroadprogram.css"

function Abroadprogram(){
    return(
        <div>
            <div id="bg6">
                <div id="bg6-title">爱思读™学术指导</div>
                <div id="bg6-img1">
                    <img src={bg6_img1} alt="" style={{left: 180, top: 250, width: 1082, height: 340}}></img>
                </div>
                <div id="bg6-img2">
                    <img src={bg6_img2} alt="" style={{left: 180, top: 646, width: 1082, height: 200}}></img>
                </div>
                <button id="bg6-btn">参加讲座了解更多</button>
            </div>
            <div id="bg7">
                <div id="bg7-title">留学项目</div>
                <div id="program1">
                    <div id="tit1">牛津剑桥项目</div>
                    <div id="br1"></div>
                    <div id="info1">
                        该项目适合GCSE及A level阶段立志报考牛剑的学生。
                        <br/>
                        大部分中国学生都不是笔头考试失利，而是面试落北。
                        该项目摒弃中式刷题集训，而是邀请牛津大学招生官用
                        牛剑学院风格的模拟面试开课，让学生迅速了解牛剑招
                        生官的英式思维及筛选亚洲学生的标准。同时，该项目
                        深度挖掘学生潜力，最大可能发扬学生特质，使之在众
                        多优秀学子中脱颖而出！
                    </div>
                </div>
                <div id="program2">
                    <div id="tit2">G5及全球前100大学项目</div>
                    <div id="br2"></div>
                    <div id="info2">
                        该项目适合GCSE及A level阶段立志报考英国伦敦G5和全球前100大学的学生。
                        <br/>
                        G5项目全面解读学生综合情况，合理细致的安排升学规划。学生通过配合睿质源
                        2年或5年深入的升学方案，稳中求进。在项目中期，如通过评估，可升入牛剑项目。
                    </div>
                </div>
                <div id="program3">
                    <div id="tit3">公学项目</div>
                    <div id="br3"></div>
                    <div id="info3">
                        该项目适合4-8年级学生。
                        <br/>
                        睿质源通过评估学生的学术水平、性格特点和兴趣爱好，
                        帮助学生及家长深入了解英国顶尖公学，规划最合适的入学点及目标学校。
                        <br/>
                        英国公学面试官对学生进行系统培训，使之能够通过兴趣爱好展示独特的性格特点，培养
                        公学青睐的成功特质，从而在申请中大放异彩。
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Abroadprogram;