import React from "react";

import Cambridge from '../../assets/Cambridge image 1.jpeg'

import './home.scss'

function Home() {
    return (
        <div className='home'>
            <div className='static'>
                <img src={Cambridge} alt='Cambridge' className='cambridge' />
            </div>
            
        </div>
    )
}
export default Home;