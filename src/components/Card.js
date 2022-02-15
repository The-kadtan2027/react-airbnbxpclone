import React from "react";

import mainImg from "../images/katie-zaferes.png"
import star from "../images/star.png"

const Card = () => {

    return (
        <div class="card">
            <img src={mainImg} alt="img" className="card-img" />
            <div class="card-stat">
                <img src={star} alt="star" className="star"/>
                <span> 5</span>
                <span className="grey">(6) • </span>
                <span className="grey">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>

        </div>
    )
}

export default Card;