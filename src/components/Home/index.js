import React from "react";

import { DownWideArrowOutlined } from "../../common/Icons";
import Cambridge from '../../assets/Cambridge image 1.jpeg'

import './home.scss'

function Home() {
    return (
        <div className='home'>
            <div className='static'>
                <img src={Cambridge} alt='Cambridge' className='cambridge' onMouseDown={e => e.preventDefault()} />
                <div className='text'>
                    <div>用高考思维无法在英国留学中胜出</div>
                    <div>英国教育常务部长认可的申请路径图,</div>
                    <div>让您的孩子向英国名校更近一步!</div>
                </div>
                <div className='blocks'>
                    <div className='box'>
                        <span>名校申请体系</span>
                        <DownWideArrowOutlined className='arrow' />
                    </div>
                    <div className='box'>
                        <span>武质博士</span>
                        <DownWideArrowOutlined className='arrow' />
                    </div>
                    <div className='box'>
                        <span>《牛津剑桥不是梦》</span>
                        <DownWideArrowOutlined className='arrow' />
                    </div>
                    <div className='box'>
                        <span>留学项目</span>
                        <DownWideArrowOutlined className='arrow' />
                    </div>
                </div>
            </div>
            <div className='main-content'>
                3213123
                23awd
                asd
            </div>
        </div>
    )
}
export default Home;