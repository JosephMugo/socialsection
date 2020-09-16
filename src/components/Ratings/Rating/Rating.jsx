import React from 'react';
import './Rating.css';
import star from '../../../images/icon-star.svg';

const Rating = (props) => {
    const startRating = []
    for (var a = 0; a < props.rating.amount; a++) {
        startRating.push(<img className='key' key={`star${a}`} alt='rating' src={star} />)
    }
    return (
        <div className="ratingContainer">
            <div className="stars">
                {
                    startRating.map((rating) => (
                        rating
                    ))
                }
            </div>
            <div className="description">
                <h6>Rated {props.rating.amount} starts in {props.rating.author}</h6>
            </div>
        </div>
    )
}

export default Rating;