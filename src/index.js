import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import TestimonList from '../src/components/Testimonies/TestimonyList/TestimonyList';
import RatingsList from '../src/components/Ratings/RatingsList/RatingsList';
import './index.css';

class Main extends React.Component {
    render() {
        return (
            <div className="sectionContainer">
                <div className="firstSection">
                    <Header />
                    <RatingsList />
                </div>
                <div className="secondSection">
                    <TestimonList />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));