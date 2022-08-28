import React from 'react';
import '../styles/style.scss';
import logo_white from '../images/Drinkee_logo_white.svg';
import github from '../images/github_logo.svg';
import { Link } from "react-router-dom";


function FunctionalComponent() {
    return (
        <div className="container">
            <div className="site-footer-inner has-top-divider">
                <div className="brand footer-brand">
                    <Link to="/"><img className="icon-button" src={logo_white} alt="drinkee logo" /></Link>

                </div>
                <ul className="footer-links list-reset">
                    <li>
                        <a href="mailto:appdrinkee@gmail.com">Contact</a>
                    </li>
                    <li>
                        <Link to="/cookies">Cookies Policy</Link>
                    </li>
                    <li>
                        <Link to="/privacy">Privacy Policy</Link>
                    </li>
                </ul>
                <ul className="footer-social-links list-reset">

                    <li>
                        <a href="https://github.com/josepfpinto/drinkee_website" target="_blank" rel="noreferrer">
                            <span className="screen-reader-text">GitHub</span>
                            <img src={github} alt="github logo" />
                        </a>
                    </li>
                </ul>
                <div className="footer-copyright">&copy; 2022 Drinkee, all rights reserved</div>
            </div>
        </div>
    )
}

export default FunctionalComponent;