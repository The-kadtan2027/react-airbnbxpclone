import React from "react";

// import mainImg from "../images/"
// import star from "../images/star.png"

const Card = (props) => {
    let badgeText
    if(props.onSpot === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div class="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`${process.env.PUBLIC_URL}/images/`+ props.img} alt="img" className="card-img" />
            <div class="card-stat">
                <img src={process.env.PUBLIC_URL +"/images/star.png"} alt="star" className="star"/>
                <span> {props.rating}</span>
                <span className="grey">({props.reviewCount}) • </span>
                <span className="grey">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>

        </div>
    )
}

export default Card;