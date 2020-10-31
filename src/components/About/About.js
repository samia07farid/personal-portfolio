import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css'
import { Spring } from 'react-spring/renderprops';

const About = () => {
    return (
        <div>
            <Navbar/>

            <div className="d-flex justify-content-center row mt-5 pt-5">
                <div className="col-md-6 col-sm-12 pl-3">
                    <p className="p-sty">
                        Hi, I'm a Samia Farid, a front-end developer.
                    </p>
                    <p className="p-sty">
                    I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
                    </p>
                    <a class="btn contact-btn" href="https://drive.google.com/file/d/1ZqzDRJkyEefrP9x2HzYReLMphzW6CDbk/view?usp=sharing" role="button" target="_blank"><strong>Download Resume</strong></a>
                </div>
                <div className="col-md-4 col-sm-12">
                    <img src={"https://i.imgur.com/cUHJKcI.png"} className="abt-img" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default About;