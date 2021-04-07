import React from 'react'
import logo from '../assets/images/header-icons/logo.svg';
import micro from '../assets/images/contact-img/microsoft.svg';
import new2 from '../assets/images/header-icons/new2.svg';
import dotnet from '../assets/images/contact-img/dotnet.svg';
import java from '../assets/images/contact-img/java.svg';
import ios from '../assets/images/contact-img/ios.svg';
import android from '../assets/images/contact-img/android.svg';
import blackberry from '../assets/images/contact-img/blackberry.svg';
import '../styles/Contact.css'

const Contact = () => {
    return (
        <div className="container">
            <div className="contact">
                <div className="contact-sec">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <img src={new2} alt="" />
                    </div>
                    <h3>PT Dwidasa Samsara Indonesia</h3>
                    <p>Ruko Jalur Sutera 29A No. 53<br/>
                    Alam Sutera Serpong, Tangerang 15323
                    </p>
                </div>
                <div className="contact-sec">
                    <h2>Contact</h2>
                    <p>Phone : +62.21.5314.1135<br/>
                    Fax : +62.21.5314.1135<br/>
                    Email : community@dwidasa.com</p>
                </div>
                <div className="contact-sec sec-img">
                    <div className="contact-sec-row">
                        <img src={micro} alt="" />
                        <img src={dotnet} alt="" />
                        <img src={java} alt="" />
                    </div>
                    <div className="contact-sec-row row-2">
                        <img src={ios} alt="" />
                        <img src={android} alt="" />
                        <img src={blackberry} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
