import React from "react";


import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';

const Slidercards =(props)=>{
    const slides = [1,2,3];

    const slideLeft =()=>{
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const slideRight =()=>{
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;

    }

    return(
        <div className="slider-main">
            <div className="slider-container">
                <AiOutlineLeft className="slider-icon right" onClick={slideLeft}/>
                <div id="slider">
                    <div className="slider-card">
                        <div className="slide-img"></div>
                        <p className="slide-title">Locrio de Pollo</p>
                    </div>
                    <div className="slider-card">
                        <div className="slide-img"></div>
                        <p className="slide-title">Titre</p>
                    </div>
                    <div className="slider-card">
                    <div className="slide-img"></div>
                        <p className="slide-title">Titre</p>
                    </div>
                    <div className="slider-card">
                    <div className="slide-img"></div>
                    <p className="slide-title">Titre</p>

                    </div>
                    <div className="slider-card">
                        <div className="slide-img"></div>
                        <p className="slide-title">Titre</p>

                    </div>
                    <div className="slider-card">
                    <div className="slide-img"></div>
                    <p className="slide-title">Titre</p>

                    </div>
                    <div className="slider-card">
                    <div className="slide-img"></div>
                    <p className="slide-title">Titre</p>

                    </div>
                    <div className="slider-card">
                    <div className="slide-img"></div>
                    <p className="slide-title">Titre</p>

                    </div>
                    <div className="slider-card">
                    <div className="slide-img"></div>
                    <p className="slide-title">Titre</p>

                    </div>
                    <div className="slider-card">
                    <div className="slide-img"></div>
                    <p className="slide-title">Titre</p>

                    </div>
                    <div className="slider-card">
                    <div className="slide-img"></div>
                    <p className="slide-title">Titre</p>

                    </div>

                </div>
                <AiOutlineRight className="slider-icon left" onClick={slideRight}/>
            </div>
        </div>
    )
}
export default Slidercards