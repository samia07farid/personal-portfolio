import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'
import { Spring } from 'react-spring/renderprops';

const Header = () => {

    return (
        <div className="header">
            <Navbar />
            <div className="d-flex justify-content-center row mt-5 pt-5">
                <div className="col-md-6 col-sm-12 pl-5">
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        config={{ delay: 500, duration: 1000 }}
                    >
                        {props => (
                            <div style={props}>
                                <img src={"https://i.imgur.com/QBpchWG.png"} className="img-style" alt="" />
                            </div>
                        )}
                    </Spring>
                </div>
                <div className="col-md-6 col-sm-12 pt-5">
                    <h1 className="h1-sty">
                        Hi, <br />
                        I'm Samia Farid Ahammed,<br />
                        web developer.
                    </h1>
                    <h2>Front End Developer </h2>
                    <Spring
                        from={{ opacity: 0, marginBottom: 500 }}
                        to={{ opacity: 1, marginBottom: 0 }}
                        config={{ delay: 510, duration: 1000 }}
                    >
                        {props => (
                            <div style={props}>
                                <a class="btn contact-btn mt-5" href="/contact" role="button" target="_blank"><strong>Contact Me !</strong></a>
                            </div>
                        )}
                    </Spring>
                </div>
            </div>
        </div>
    );
};

export default Header;