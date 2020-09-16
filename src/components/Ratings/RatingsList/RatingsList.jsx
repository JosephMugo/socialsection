//                 RATINGS COMPONENT
//                      ----> RATING COMPONENT
//     Rated 5 Stars in Reviews
//     Rated 5 Stars in Report Guru
//     Rated 5 Stars in BestTech
import React from 'react';
import Rating from '../Rating/Rating';
import './RatingsList.css';

const rating = {
    amount: 5,
    author: 'Reviews'
}

const RatingsList = (props) => {
    return (
        <div className="ratingListContainer">
            <Rating key='1' rating={rating} />
            <Rating key='2' rating={rating} />
            <Rating key='3' rating={rating} />
        </div>
    )
}

export default RatingsList;