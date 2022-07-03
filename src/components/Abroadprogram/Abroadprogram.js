import React from "react";
import bg6_img1 from "../assets/bg6-img1.png"
import bg6_img2 from "../assets/bg6-img2.png"
import bg7_img from "../assets/bg7-img.png"
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
                <button id="bg6-btn" onClick={e => window.open('https://wwwwisdomspringeducom.scoreapp.com/')}>参加讲座了解更多</button>
            </div>
            <div id="bg7">
                <div id="bg7-title1">留学项目</div>
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
                    <div id="case1">
                        <div id="case1-tit1">—成功案例—</div>
                        <div id="case1-tit2">David Liu - 牛津大学</div>
                        <div id="case1-text">
                            在申请牛津大学时，David并没有参与特殊的背景提升项目，但他的学习能力学术能力、
                            研究能力、特质特长在我们的评估中十分出众，自己在课外大量阅读科研相关的书籍和期
                            刊。根据David热爱科研的特质，项目导师建议他不需随大流参与千篇一律的背景提升项
                            目，而是准备能充分发挥自己特质的材料。于是，David在家中对超市五角钱的塑料袋做
                            了一个小实验，充分展现了其学习能力和科研能力，以及他自身独有的知识体系。从而获
                            得牛津大学的offer。
                        </div>
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
                    <div id="case2">
                        <div id="case2-tit1">—成功案例—</div>
                        <div id="case2-tit2">Michael-帝国理工大学</div>
                        <div id="case2-text">
                            Michael在参与次项目前即将在Warwick School进行A-level阶段学习，
                            由于其在国内的学习成绩一般，父母则聘请中国高校教授给孩子补课。但项
                            目之初，Michael进行睿质源教育GCSE模拟测试，结果并不理想。武博指出，
                            父母为Michael安排的辅导存在补习误区：中国教授能力出众却并不熟悉英国
                            中小学教育考核重点。在参与G5项目后，我们安排了有英国私校教学经验并参
                            加英国高考考试局出试卷的老师给Michael 做辅导。老师根据孩子的实际情
                            况侧重GCSE学习内容，只对A level进行强化专业术语的学习，以减轻孩子
                            来英国初期的学习压力。 通过补习，Michael的成绩提高非常显著：在新学
                            期的考试中，Michael的两门主科：数学和物理均取得了"A"，毕业时三门主
                            课：数学、进阶数学和物理，都取得了"A*"。最终，和项目规划一致，Michael
                            成功取得了英国G5大学帝国理工大学的offer。
                        </div>
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
                    <div id="case3">
                        <div id="case3-tit1">—成功案例—</div>
                        <div id="case3-tit2">Patrick-阿宾汉姆学校音乐奖学金</div>
                        <div id="case3-text">
                            在升学阶段，因疫情原因，无法参与英国英皇八级考试，家长与学生陷入焦虑。
                            项目导师为学生面试辅导，给出了弱化考级，分享学习历程，自信展示才艺的策
                            略，并建议在才艺展示时，不拘泥于单一风格，侧重选取曲风不同的演奏曲目，
                            并诠释对选曲的独特理解。Patrick在导师的辅导后，并未参与任何考级考证，
                            成功申请上阿宾汉姆学校的音乐奖学金，家长最初对我们解释的奖学金不需要考
                            级半信半疑，但学生顺利获得音乐奖学金之后，家长说到，原来奖学金真的不需
                            要考级啊！
                        </div>
                    </div>
                </div>
                <div id="bg7-title2">留学监护服务</div>
                <div id="server">
                    适合来英留学的中小学国际学生。 
                    <br/>
                    除提供常规监护服务之外，睿质源教育联手英国专业青少年心理健康师，通过定期心理建设及
                    <br/>
                    心理疏导等工作，确保小留学生置身海外的安全、安心和健康发展。 
                </div>
                <div id="bg7-img">
                    <img src={bg7_img} alt="" style={{left: 90, top: 1043, width: 1252, height: 651}}></img>
                </div>
            </div>
        </div>
    )
}
export default Abroadprogram;