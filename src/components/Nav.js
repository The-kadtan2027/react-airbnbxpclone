import React from "react";
// import logo from "../images/airbnb.svg"
// import logo from "../images/vector.png"

const Nav = () => {
    return (
        <nav >
        <img src={process.env.PUBLIC_URL +"/images/vector.png"} alt="logo" className="logo" />

        </nav>
    )
}

export default Nav;