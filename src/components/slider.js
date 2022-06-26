import React from "react";
import slider1 from '../images/slider.jpg';
import '../css/slider.styles.scss';

const Slider = (() =>{
    return(
        <div className="slider_container">
            <div className="slider">
                <div className="slider_img_div">
                    <img className="slider_img" src={slider1} alt="slider image first" />
                </div>
            </div>
        </div>
    )
});
export default Slider;