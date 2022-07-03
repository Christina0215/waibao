import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { WeChatOutlined, TouTiaoOutlined, WeiBoOutlined, RedBookOutlined } from '../../common/Icons'
import logo from '../../assets/睿质源logo-高清(白色).png'

import './header.scss'

// 页头
const Header = () => {
    // 设置选中的菜单
    const [active, setActive] = useState([''])

    const location = useLocation()

    // 根据路由更改active的内容
    useEffect(() => {
        let actives = location.pathname.split('/')
        actives.shift()
        setActive(actives)
    }, [location])

    return (
        <div className='header'>
            <div className='left'>
                <img src={logo} alt='logo' className='logo' />
                <div className='menu'>
                    <span className={`menu-item ${active[0] === '' && 'active'}`}>
                        <span>
                            <Link to='/'>首页</Link>
                        </span>
                    </span>
                    <span className={`menu-item ${active[0] === 'about' && 'active'}`}>
                        <span>
                            <Link to='/about'>关于</Link>
                        </span>
                    </span>
                    <span className={`menu-item ${active[0] === 'newbook' && 'active'}`}>
                        <span>
                            <Link to='newbook'>武博新书</Link>
                        </span>
                    </span>
                    <span className={`menu-item ${active[0] === 'system' && 'active'}`}>
                        <span>
                            <Link to='/Admissionsystem'>英国升学体系</Link>
                        </span>
                    </span>
                    <span className={`menu-item ${active[0] === 'program' && 'active'}`}>
                        <span>
                            <Link to='/program'>留学项目</Link>
                        </span>
                    </span>
                    <span className={`menu-item consult ${active[0] === 'consult' && 'active'}`}>
                        <span>留学咨询</span>
                        <div className='list consult'>
                            <span className={`${active[1] === 'brand' && 'active'}`}>
                                <Link to='/consult/brand'>品牌资讯</Link>
                            </span>
                            <span className={`${active[1] === 'science' && 'active'}`}>
                                <Link to='/consult/science'>留学科普</Link>
                            </span>
                            <span className={`${active[1] === 'download' && 'active'}`}>
                                <Link to='/consult/download'>资料下载</Link>
                            </span>
                        </div>
                    </span>
                    <span className={`menu-item contact ${active[0] === 'contact' && 'active'}`}>
                        <span>联系</span>
                        <div className='list contact'>
                            <span className={`${active[1] === 'coop' && 'active'}`}>
                                <Link to='/contact/coop'>合作联络</Link>
                            </span>
                            <span className={`${active[1] === 'recruit' && 'active'}`}>
                                <Link to='/contact/recruit'>招聘信息</Link>
                            </span>
                        </div>
                    </span>
                </div>
            </div>
            <div className='right'>
                <a href='https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5NDU3MTIyOQ==&scene=124#wechat_redirect' target='_blank' rel="noopener noreferrer">
                    <WeChatOutlined className='icons' />
                </a>
                <a href='https://profile.zjurl.cn/rogue/ugc/profile/?user_id=2207452675189710&media_id=1692216694337539&request_source=1&active_tab=dongtai&app_name=news_article&enter_keyword=%E6%AD%A6%E5%8D%9A%E5%9C%A8%E8%8B%B1%E4%BC%A6&a11y_config=000' target='_blank' rel="noopener noreferrer">
                    <TouTiaoOutlined className='icons' />
                </a>
                <a href='https://weibo.com/u/7467711547?refer_flag=1005050010_' target='_blank' rel="noopener noreferrer">
                    <WeiBoOutlined className='icons' />
                </a>
                <a href='https://www.xiaohongshu.com/user/profile/5ed7adcf000000000100026d?xhsshare=CopyLink&appuid=5ed7adcf000000000100026d&apptime=1652808083' target='_blank' rel="noopener noreferrer">
                    <RedBookOutlined className='icons' />
                </a>
            </div>
        </div>
    )
}

export default Header