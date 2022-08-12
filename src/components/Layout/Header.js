import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { WeChatOutlined, TouTiaoOutlined, WeiBoOutlined, RedBookOutlined, MenuOutlined, ArrowDownFillOutlined, ArrowRightFillOutlined } from '../../common/Icons'
import logo from '../../assets/睿质源logo-高清(白色).png'

import './header.scss'

// 页头
const Header = () => {
    // 设置选中的菜单
    const [active, setActive] = useState([''])
    // 是否手机端
    const [mobile, setMobile] = useState(false)

    const [vis1, setVis1] = useState(false)
    const [vis2, setVis2] = useState(false)

    const location = useLocation()

    // 根据路由更改active的内容
    useEffect(() => {
        let actives = location.pathname.split('/')
        actives.shift()
        setActive(actives)

        setMobile(false)
    }, [location])

    return (
        <>
            <div className='header'>
                <div className='left'>
                    <img src={logo} alt='logo' className='logo' />
                    <div className='menu'>
                        <span className={`menu-item ${active[0] === '' && 'active'}`}>
                            <Link to='/'><span>首页</span></Link>
                        </span>
                        <span className={`menu-item ${active[0] === 'about' && 'active'}`}>
                            <Link to='/about'><span>关于</span></Link>
                        </span>
                        <span className={`menu-item ${active[0] === 'newbook' && 'active'}`}>
                            <Link to='newbook'><span>武博新书</span></Link>
                        </span>
                        <span className={`menu-item ${active[0] === 'admissionsystem' && 'active'}`}>
                            <Link to='/admissionsystem'><span>英国升学体系</span></Link>
                        </span>
                        <span className={`menu-item ${active[0] === 'abroadprogram' && 'active'}`}>
                            <Link to='/abroadprogram'><span>留学项目</span></Link>
                        </span>
                        <span className={`menu-item consult ${active[0] === 'consult' && 'active'}`}>
                            <span>留学咨询</span>
                            <div className='list consult'>
                                <span className={`${active[1] === 'brandinfo' && 'active'}`}>
                                    <Link to='/consult/brandinfo'>品牌资讯</Link>
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
                                <span className={`${active[1] === 'cooperatecontact' && 'active'}`}>
                                    <Link to='/contact/cooperatecontact'>合作联络</Link>
                                </span>
                                <span className={`${active[1] === 'recruitment' && 'active'}`}>
                                    <Link to='/contact/recruitment'>招聘信息</Link>
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
            <div className='mobileHeader'>
                <div className='visi'>
                    <img src={logo} alt='logo' className='logo' />
                    <MenuOutlined className='menu-btn' onClick={() => setMobile(prev => !prev)} />
                </div>
                {
                    mobile && (
                        <div className='drop'>
                            <div className='menu'>
                                <span className={`menu-item ${active[0] === '' && 'active'}`}>
                                    <Link to='/'><span>首页</span></Link>
                                </span>
                                <span className={`menu-item ${active[0] === 'about' && 'active'}`}>
                                    <Link to='/about'><span>关于</span></Link>
                                </span>
                                <span className={`menu-item ${active[0] === 'newbook' && 'active'}`}>
                                    <Link to='newbook'><span>武博新书</span></Link>
                                </span>
                                <span className={`menu-item ${active[0] === 'admissionsystem' && 'active'}`}>
                                    <Link to='/admissionsystem'><span>英国升学体系</span></Link>
                                </span>
                                <span className={`menu-item ${active[0] === 'abroadprogram' && 'active'}`}>
                                    <Link to='/abroadprogram'><span>留学项目</span></Link>
                                </span>
                                <span className={`menu-item consult ${active[0] === 'consult' && 'active'} ${vis1 && 'none'}`}>
                                    <div className='opt' onClick={() => setVis1(prev => !prev)}>
                                        <span>留学咨询</span>
                                        {
                                            !vis1 
                                                ? <ArrowRightFillOutlined className='arrowIcon' /> 
                                                : <ArrowDownFillOutlined className='arrowIcon' />
                                        }
                                    </div>
                                    
                                </span>
                                <div className='list consult' style={{display: vis1 ? 'flex' : 'none'}}>
                                        <span className={`${active[1] === 'brandinfo' && 'active'}`}>
                                            <Link to='/consult/brandinfo'>品牌资讯</Link>
                                        </span>
                                        <span className={`${active[1] === 'science' && 'active'}`}>
                                            <Link to='/consult/science'>留学科普</Link>
                                        </span>
                                        <span className={`${active[1] === 'download' && 'active'}`}>
                                            <Link to='/consult/download'>资料下载</Link>
                                        </span>
                                    </div>
                                <span className={`menu-item contact ${active[0] === 'contact' && 'active'} ${vis2 && 'none'}`}>
                                    <div className='opt' onClick={() => setVis2(prev => !prev)}>
                                        <span>联系</span>
                                        {
                                            !vis2
                                                ? <ArrowRightFillOutlined className='arrowIcon' /> 
                                                : <ArrowDownFillOutlined className='arrowIcon' />
                                        }
                                    </div>
                                    
                                </span>
                                <div className='list contact' style={{display: vis2 ? 'flex' : 'none'}}>
                                        <span className={`${active[1] === 'cooperatecontact' && 'active'}`}>
                                            <Link to='/contact/cooperatecontact'>合作联络</Link>
                                        </span>
                                        <span className={`${active[1] === 'recruitment' && 'active'}`}>
                                            <Link to='/contact/recruitment'>招聘信息</Link>
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
            </div>
        </>
    )
}

export default Header