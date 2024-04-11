import React from "react";
import data from '../../../../AMAZON DATA/carousel/carousal1.json'

const carouselDeal = ()=>{
    return(
        <div className="carouselDeal">
            <div className="deal-heading">
            <h2>Today's Deals</h2>
            </div>
            <div className="deal-slider">
            
            {data.map((item, index) => {
                return(
                    <div className="deal-item" key={index}>
                        <div className="item-img">
                            <img src={item.img}></img>
                        </div>
                        <div className="item-discount">
                            <div className="discount">
                                <p>{item.discount}</p>
                            </div>
                            <div className="limited">
                                <p><b>Limited time deal</b></p>
                            </div>
                        </div>
                        <div className="item-title">
                            <p>{item.item}</p>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
} 

export default carouselDeal;