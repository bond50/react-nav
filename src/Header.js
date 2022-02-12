import React from 'react';
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="logo"><a href="index.html">BizLand<span>.</span></a></h1>
                <Navbar/>
            </div>
        </header>
    );
};

export default Header;