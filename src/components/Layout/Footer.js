import React from 'react'

import logo from '../../assets/睿质源logo-高清(白色).png'
import Consult from '../../assets/留学咨询.png'
import Question from '../../assets/留学疑问.png'

import './footer.scss'

// 页脚
const Footer = ({ }) => {
    return (
        <div className='footer'>
            <img src={logo} alt='logo' className='logo' />
            <div className='line'></div>
            <div className='right'>
                <div className='part part1'>
                    <span>地址：</span>
                    <span>邮箱：</span>
                    <span>睿智源教育·英国</span>
                </div>
                <div className='part part2'>
                    <span>ACED™️爱思读™️英国升学体系及测评</span>
                    <span>留学资料下载</span>
                    <span>预约武博讲座</span>
                </div>
                <div className='part part3'>
                    <img src={Consult} alt='qrcode' />
                    <span>更多留学资讯请关注武博在英伦</span>
                </div>
                <div className='part part4'>
                    <img src={Question} alt='qrcode' />
                    <span>任何留学疑问欢迎添加睿质源小助理</span>
                </div>
            </div>
        </div>
    )
}

export default Footer