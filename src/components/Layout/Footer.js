import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/睿质源logo-高清(白色).png'
import Consult from '../../assets/留学咨询.png'
import Question from '../../assets/留学疑问.png'

import './footer.scss'

// 页脚
const Footer = () => {
    return (
        <div className='footer'>
            <img src={logo} alt='logo' className='logo' />
            <div className='line'></div>
            <div className='right'>
                <div className='part part1'>
                    <span>电话：+86 183 2712 3175</span>
                    <span>邮箱：info@wisdomspringedu.com</span>
                    <a href='https://www.wisdomspringedu.com/'>
                        <span id='part1-link'>睿智源教育·英国</span>
                    </a>                    
                </div>
                <div className='part part2'>
                    <Link to='/admissionsystem'>
                        <span>ACED™️爱思读™️英国升学体系及测评</span>
                    </Link>                    
                    <Link to='/consult/download'>
                        <span>留学资料下载</span>
                    </Link>
                    <Link to='/about/booking'>
                        <span>预约武博讲座</span>
                    </Link>
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