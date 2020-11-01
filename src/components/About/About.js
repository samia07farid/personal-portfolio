import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css'
import { Spring } from 'react-spring/renderprops';

const About = () => {
    return (
        <div>
            <Navbar/>
            <div className="d-flex justify-content-center row mt-5 pt-5">
                <div className="col-md-6 col-sm-12 pl-3 ml-3">
                    <h2 className="about-me">About me</h2>
                    <p className="p-sty mt-3">
                        Hi, I'm a Samia Farid, a front-end developer.
                    </p>
                    <p className="p-sty mt-3">
                    I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
                    </p>
                    <a class="btn contact-btn" href="/contact" role="button"><strong>Contact Me !</strong></a>
                </div>
                <div className="col-md-4 col-sm-12 ml-3">
                    <img src={"https://i.imgur.com/cUHJKcI.png"} className="mt-3 img-fluid abt-img" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default About;