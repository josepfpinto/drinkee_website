import React from 'react';
import '../styles/style.scss';
import logo_white from '../images/Drinkee_logo_white.svg';
import instagram from '../images/instagram_logo.svg';
import github from '../images/github_logo.svg';


function FunctionalComponent() {
    return (
        <div className="container">
            <div className="site-footer-inner has-top-divider">
                <div className="brand footer-brand">
                    <img src={logo_white} alt="drinkee logo" />
                </div>
                <ul className="footer-links list-reset">
                    <li>
                        <a href="mailto:appdrinkee@gmail.com">Contact</a>
                    </li>
                    <li>
                        <a href="https://github.com/drinkee-git/drinkee" target="_blank" rel="noreferrer">About us</a>
                    </li>
                </ul>
                <ul className="footer-social-links list-reset">
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <span className="screen-reader-text">Instagram</span>
                            <img src={instagram} alt="instagram logo" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/drinkee-git/drinkee" target="_blank" rel="noreferrer">
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