import React from 'react';
import './Testimony.css';

const Testimony = (props) => {
    return (
        <div className="testimonyContainer">
            <div className="userInfoSection">
                <img id="userImage" src={props.user.image} />
                <div id="userInfo">
                    <h5 id="name">{props.user.name}</h5>
                    <h5 id="type">{props.user.type}</h5>
                </div>
            </div>
            <div className="description">"{props.user.description}"</div>
        </div>
    )
}

export default Testimony;