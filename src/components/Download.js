import React from "react";
import abroadback from '../assets/abroadback.png';
import '../abroad.css'
import videoqr from '../assets/留学疑问.png';
import redqr from '../assets/留学咨询.png';

function Download() {
    return (
        <div style={{ height: '1025px' }}>
            <div className='cover'>
                <img className='bgimg2' src={abroadback} />
                <div className='title' style={{
                    top: '106px',
                    left: '648px',
                    fontSize: '36px'
                }}>资料下载</div>
                <div className='title' style={{
                    top: '174px',
                    left: '541px',
                    fontSize: '28px'
                }}>教材书单/申请日历/备考真题</div>
            </div>
            <div className="dltitle" style={{
                left: '80px',
                top: '445px',
                fontSize: '20px'
            }}>
                教材书单
            </div>
            <div className="dldiv" style={{
                left: '80px',
                top: '525px',
            }}>
                <div>英国小升初必备Bond11+教材</div>
                <div>英国小升初必备Bond11+教材</div>
                <div>英国小升初必备Bond11+教材</div>
                <div>英国小升初必备Bond11+教材</div>
            </div>
            <div className="dltitle" style={{
                left: '520px',
                top: '445px',
                fontSize: '20px'
            }}>
                申请攻略
            </div>
            <div className="dldiv" style={{
                left: '520px',
                top: '525px',
            }}>
                <div>英国小升初必备Bond11+教材</div>
                <div>英国小升初必备Bond11+教材</div>
                <div>英国小升初必备Bond11+教材</div>
                <div>英国小升初必备Bond11+教材</div>
            </div>
            <div className="dltitle" style={{
                left: '960px',
                top: '445px',
                fontSize: '20px'
            }}>
                备考真题
            </div>
            <div className="dldiv" style={{
                left: '960px',
                top: '525px',
            }}>
                <div>英国小升初必备Bond11+教材</div>
                <div>英国小升初必备Bond11+教材</div>
                <div>英国小升初必备Bond11+教材</div>
                <div>英国小升初必备Bond11+教材</div>
            </div>
            <div className="dlend">更多留学资料，请关注武博在英伦或添加小助理</div>
            <img src={videoqr} style={{
                position: "absolute",
                left: '537px',
                top: '842px',
                width: '160px',
                height: '160px',
            }} />
            <img src={redqr} style={{
                position: "absolute",
                left: '783px',
                top: '842px',
                width: '160px',
                height: '160px',
            }} />
            <div className="qrend" style={{
                left: '578px',
                top: '1011px',
            }}>武博在英伦</div>
            <div className="qrend" style={{
                left: '815px',
                top: '1011px',
            }}>睿质源小助理</div>
        </div>
    )
}
export default Download;