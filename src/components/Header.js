import React from 'react';
import '../styles/Header.css';
import logo from '../assets/images/header-icons/logo.svg';
import home from '../assets/images/header-icons/home.svg';
import mail from '../assets/images/header-icons/mail.svg';
import reset from '../assets/images/header-icons/reset.svg';
import arrow from '../assets/images/header-icons/arrow-down.svg';
import toggle from '../assets/images/header-icons/navtoggle.svg';
import new2 from '../assets/images/header-icons/new2.svg';
const Header = () => {
    return (
        <div className="container nav">
            <nav className="navbar">
                <div className="logo">
                    <a href="/"><img src={logo} alt="" />
                        <img src={new2} alt="" /></a>
                </div>
                <div className="links">
                    <a href="/">Services</a>
                    <a href="/">Products</a>
                    <a href="/">Technology</a>
                    <a href="/">About<span style={{ marginLeft: '5px' }}><img src={arrow} alt="" /></span></a>
                    <a href="/">Client<span style={{ marginLeft: '5px' }}><img src={arrow} alt="" /></span></a>
                    <a href="/">Partner</a>
                </div>
                <div className="icons">
                    <img src={home} alt="" />
                    <img src={mail} alt="" />
                    <img src={reset} alt="" />
                </div>
                <div className="navtoggle">
                    <img src={toggle} alt="" />
                </div>
            </nav>
        </div>
    )
}

export default Header;
