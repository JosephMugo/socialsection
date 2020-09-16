import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TestimonList from '../src/components/Testimonies/TestimonyList/TestimonyList';
import RatingsList from '../src/components/Ratings/RatingsList/RatingsList';
import './index.css';

class Main extends React.Component {
    render() {
        return (
            <div>
                <RatingsList />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));