import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../../abroad.css';

function Board(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings} className='board'>
            {props.pics.map((pic) => (<img src={pic} style={{
                width: '540px',
                height: '730px',
            }} />))}
        </Slider>
    )

}
export default Board;