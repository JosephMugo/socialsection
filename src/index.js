import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TestimonList from '../src/components/Testimonies/TestimonyList/TestimonyList';

class Main extends React.Component {
    render() {
        return (
            <div>
                <TestimonList />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));