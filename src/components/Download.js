import React from "react";
import abroadback from '../assets/abroadback.png';
import '../abroad.scss'
import videoqr from '../assets/留学疑问.png';
import redqr from '../assets/留学咨询.png';

function Download() {
    return (
        <div className="abDownload">
            <div className='cover2'>
                <img className='bgimg2' src={abroadback} />
                <div className='title' style={{
                    lineHeight: '51px',
                    fontSize: '36px'
                }}>资料下载</div>
                <div className='title' style={{
                    lineHeight: '40px',
                    marginTop: '17px',
                    fontSize: '28px'
                }}>教材书单/申请日历/备考真题</div>
            </div>
            <div className="dlcontainer">
                <div className="dlBox">
                    <div className="dltitle" style={{
                        fontSize: '20px'
                    }}>
                        教材书单
                    </div>
                    <div className="dldiv">
                        <a href={videoqr} download='' className="dlcontent">英国小升初必备Bond11+教材</a>
                        <a href={videoqr} download='' className="dlcontent">英国小升初必备Bond11+教材</a>
                        <a href={videoqr} download='' className="dlcontent">英国小升初必备Bond11+教材</a>
                        <a href={videoqr} download='' className="dlcontent">英国小升初必备Bond11+教材</a>
                    </div>
                </div>
                <div className="dlBox">
                    <div className="dltitle" style={{
                        fontSize: '20px'
                    }}>
                        申请攻略
                    </div>
                    <div className="dldiv">
                        <a href={videoqr} download='' className="dlcontent">英国小升初必备Bond11+教材</a>
                        <a href={videoqr} download='' className="dlcontent">英国小升初必备Bond11+教材</a>
                        <a href={videoqr} download='' className="dlcontent">英国小升初必备Bond11+教材</a>
                        <a href={videoqr} download='' className="dlcontent">英国小升初必备Bond11+教材</a>
                    </div>
                </div>
                <div className="dlBox">
                    <div className="dltitle" style={{
                        fontSize: '20px'
                    }}>
                        备考真题
                    </div>
                    <div className="dldiv">
                        <a href={videoqr} download='' className="dlcontent">英国小升初必备Bond11+教材</a>
                        <a href={videoqr} download='' className="dlcontent">英国小升初必备Bond11+教材</a>
                        <a href={videoqr} download='' className="dlcontent">英国小升初必备Bond11+教材</a>
                        <a href={videoqr} download='' className="dlcontent">英国小升初必备Bond11+教材</a>
                        <a href={videoqr} download='' className="dlcontent">英国小升初必备Bond11+教材</a>
                        <a href={videoqr} download='' className="dlcontent">英国小升初必备Bond11+教材</a>
                        <a href={videoqr} download='' className="dlcontent">英国小升初必备Bond11+教材</a>
                        <a href={videoqr} download='' className="dlcontent">英国小升初必备Bond11+教材</a>
                    </div>
                </div>
            </div>
            <div className="dlend">
                更多留学资料，请关注武博在英伦或添加小助理
            </div>
            <div className="dlQRcode">
                <div className="qrcode">
                    <img src={videoqr} />
                    <div className="qrend">
                        武博在英伦
                    </div>
                </div>
                <div className="qrcode">
                    <img src={redqr} />
                    <div className="qrend">
                        睿质源小助理
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Download;