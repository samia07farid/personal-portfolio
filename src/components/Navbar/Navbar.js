import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-expand-md bg-dark pt-2 ">
                <Link className="navbar-brand" to="/">
                    <span style={{fontSize: '20px', color: '#08fdd8'}} >Samia Farid</span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{color: 'pink'}}>
                    <FontAwesomeIcon icon={faBars} />
                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mt-2">
                        <li className="nav-item ">
                            <Link className="nav-link ml-3" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-3" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-3" to="/work">Work</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-3" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item mr-3 ml-3">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <a class="btn resume-btn " href="https://drive.google.com/file/d/1ZqzDRJkyEefrP9x2HzYReLMphzW6CDbk/view?usp=sharing" role="button" target="_blank"><strong>Resume</strong></a>
                    </ul>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;