import React from 'react';
import { Link } from 'react-router-dom';

const GridCard = ( { data: {title, child=[]} } ) => {
    // const { data } = props;
    return (
        <div className='grid-card'>
            <h2>{title}</h2>
            <div className='card-internal-grid'>
                {
                    child.map(({img, title})=>{
                        return(
                            <div key={title}>
                                <img src={img}></img>
                                <p>{title}</p>
                            </div>
                        );
                    })
                }
                <div className='moreoptions'>
                    <Link to= "/ProductPage">See More</Link>
                </div>
            </div>
        </div>
    )
}

export default GridCard;