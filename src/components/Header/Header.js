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
                                <img src={"https://i.imgur.com/QBpchWG.png"} className="img-fluid img-style ml-5" alt="" />
                            </div>
                        )}
                    </Spring>
                </div>
                <div className="col-md-6 col-sm-12 pt-5">
                    <h1 className="h1-sty ml-3">
                        Hi, <br />
                        I'm <span className="name-sty">Samia Farid Ahammed</span>,<br />
                        web developer.
                    </h1>
                    <h2 style={{color: 'salmon'}} className="ml-3">Front End Developer </h2>
                    <Spring
                        from={{ opacity: 0, marginBottom: 500 }}
                        to={{ opacity: 1, marginBottom: 0 }}
                        config={{ delay: 510, duration: 1000 }}
                    >
                        {props => (
                            <div style={props} className="mb-3 ml-3">
                                <a class="btn contact-btn mt-3" href="https://drive.google.com/file/d/1BfgJrLU2an2iGUT6zj4t3VB_govt20fb/view?usp=sharing" role="button" rel="noreferrer" target="_blank"><strong>Download Resume</strong></a>
                            </div>
                        )}
                    </Spring>
                </div>
            </div>
        </div>
    );
};

export default Header;