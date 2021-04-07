import '../styles/Services.css'
import sec1 from '../assets/images/services-img/product.svg';
import sec2 from '../assets/images/services-img/service.svg';
import sec3 from '../assets/images/services-img/tech.svg';
import React from 'react'

const Services = () => {
    return (
        <div className="container">
            <div className="services">
                <h2>Product and Service</h2>
                <div className="services-flex">
                    <div className="product services-item">
                        <img src={sec1} alt="" />
                        <h2 className="diff">Our Product</h2>
                        <p>Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>
                        <button>Read More</button>
                    </div>
                    <div className="service services-item">
                        <img src={sec2} alt="" />
                        <h2 className="diff">Our Service</h2>
                        <p>DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.</p>
                        <button>Read More</button>
                    </div>
                    <div className="tech services-item">
                        <img src={sec3} alt="" />
                        <h2 className="diff">Our Technology</h2>
                        <p>First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Services
