import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Board(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };
    return (
        <Slider {...settings} className='board'>
            {props.pics.map((pic, index) => (<img src={pic} style={{
                width: '540px',
                height: '730px',
            }} key={index} />))}
        </Slider>
    )

}
export default Board;