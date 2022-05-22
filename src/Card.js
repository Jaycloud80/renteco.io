import React from 'react'
import './Card.css';


function Card({ src, title, description, price, alt }) {
    return (
        <div className='card'>
            {/* <div className='card__img' backgroundImage: `url(${src})`>

            </div> */}
            <img src={src} alt={alt} />
            <div className='card__info'>
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Card