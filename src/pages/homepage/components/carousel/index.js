import React from 'react';
import { useState, useEffect } from 'react';
import "./index.css";


const Carousel = () => {
    const [carouselData, setCarouselData] = useState([])
    useEffect(() => {
        fetch('http://localhost:1400/api/maincarousel')
            .then(res => res.json())
            .then((data) => {
                setCarouselData(data);
            });
    }, []);
    return (
        <div className="carousel">
            {carouselData.map((item, index) => {
                return (
                    <img src={item.src} alt={item.title} key={index} />
                )
            })}
        </div>
    )
}

export default Carousel;