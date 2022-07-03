import React from "react";
import pic1 from "../assets/my-icon(1).png"
import pic2 from "../assets/my-icon(2).png"
import pic3 from "../assets/my-icon(3).png"
import pic4 from "../assets/my-icon(4).png"
import '../recruitment.css'

function Recruitment() {
    return (
        <div>	
            <div class="bk-img"></div>
            <div class="bk-blue"></div>
            <div class="main">
                <div class="title-yelow">加入睿质源教育，和我们一起共创未来</div>
                <div class="title-wight">Exciting opportunity for a creative student with a photography background to join our international education company managing the full end to end delivery on artistic projects.<br />我们在寻找一位具有创造性的对摄影摄像感兴趣的同学，能够独立完成摄影摄像及后期的全部工作。</div>
                <div class="detail-info">
                    <div class="detail-info-left">
                        <img src={pic1} class="logo_" />
                        <img src={pic2} class="logo_" />
                        <img src={pic3} class="logo_" />
                        <img src={pic4} class="logo_" />
                    </div>
                    <div class="detail-info-center">
                        <div class="detail-info-center-text">Role<br />工作职责：</div>
                        <div class="detail-info-center-text">RLocation<br />地点</div>
                        <div class="detail-info-center-text">Duration<br />工作时间:</div>
                        <div class="detail-info-center-text">Requirements:<br />能力需求：</div>
                    </div>
                    <div class="detail-info-right">
                        <div class="null1"></div>
                        <div class="detail-info-right-text">videographer and photographer<br />摄影和摄像</div>
                        <div class="detail-info-right-text">Reading<br />雷丁</div>
                        <div class="detail-info-right-text">flexible to your schedule<br />灵活机动</div>
                        <div class="detail-info-right-text">• A photographic and film background. you don't need to be a pro; you just need passion.<br />对摄影摄像感兴趣并且有一定的基础。<br />
                            • Sound and image editorial judgement, with a demonstrable ability to identify weaknesses within a film and a photo and propose improvements.<br />有一定的审美水平，对图像和声音编辑有良好的判断能力，<br />
                            Photoshop, photo manipulation, as well as br /ochure design and production are all undertaken by your own.<br />能够熟练使用Photoshop软件及其他图像处理软件，同时也可以独立制作宣传册等相关事务。<br />
                            you'll be working as a freelancer.<br />工作时间自由。<br />
                            This role is a fantastic opportunity and offers an incredible experience to the successful candidate。<br />这个角色为摄影爱好的同学提供了一个绝佳的机会，机会不容错过，等你来。
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Recruitment;