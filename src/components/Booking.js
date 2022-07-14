import React from "react";
import '../booking.css'

function Booking() {
    return (
        <div>
            <div className="line">
                <div className="cube">
                    <div className="frame">
                        <div className="TitleText">信息采集表(示例)</div>
                    </div>
                </div>
            </div>
            <div className="null1"></div>
            <div className="line">
                <div className="cube">
                    <div className="myText">怎么称呼您？</div>
                    <input className="userInput" />
                </div>
                <div className="cube">
                    <div className="myText">目前所在国家:</div>
                    <select id="xx" className="userForm">
                        <option value="中国">中国</option>
                        <option value="英国">英国</option>
                    </select>
                </div>
                <div className="cube">
                    <div className="myText">孩子年龄:</div>
                    <select className="userForm">
                        <option value="<6">&lt;6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value=">18">&gt;18</option>
                    </select>
                </div>
            </div>
            <div className="null2"></div>
            <div className="line">
                <div className="cube">
                    <div className="myText">微信号/手机号：</div>
                    <input className="userInput" />
                </div>
            </div>
            <div className="line">
                <div className="cube">
                    <div className="myText">常用邮箱：</div>
                    <input className="userInput" />
                </div>
            </div>
            <div className="line">
                <div className="cube">
                    <div className="myText">想要咨询的问题：</div>
                    <input className="userInput" />
                </div>
            </div>
            <div className="line">
                <div className="cube">
                    <div className="myText">空闲时间（可多选）：</div>
                    <select className="userForm">
                        <option value="11:00-12:00">11:00-12:00</option>
                        <option value="12:00-1:00">12:00-1:00</option>
                        <option value="1:00-2:00">1:00-2:00</option>
                        <option value="......">......</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
export default Booking;