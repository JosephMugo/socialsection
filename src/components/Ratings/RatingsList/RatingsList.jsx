//                 RATINGS COMPONENT
//                      ----> RATING COMPONENT
//     Rated 5 Stars in Reviews
//     Rated 5 Stars in Report Guru
//     Rated 5 Stars in BestTech
import React from 'react';
import Rating from '../Rating/Rating';

const rating = {
    amount: 5,
    author: 'Reviews'
}

const RatingsList = (props) => {
    return (
        <div className="ratingListContainer">
            <Rating key={rating.author} rating={rating} />
        </div>
    )
}

export default RatingsList;