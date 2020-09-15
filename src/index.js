import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>Main</h1>
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));