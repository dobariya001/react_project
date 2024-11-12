import React from "react";
import img from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className="header">
                <img src={img} alt="P.H.TECH Logo" />
                <h1 className="h11">Ph Keep</h1>
            </div>
        </>
    )
}

export default Header;