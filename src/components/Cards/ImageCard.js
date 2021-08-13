import React from "react";
import '../../styles/Cards/ImageCard.css'

function ImageCard(props) {
    return (
        <div className="ImageCard">
            <img className="card-img" src={props.image} alt="display"/>
            <div className="card-content">
                {props.children}
            </div>
        </div>);
}

export default ImageCard;