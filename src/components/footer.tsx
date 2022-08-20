import React from 'react';
import '../styles/style.scss';
import logo_white from '../images/Drinkee_logo_white.svg';
import github from '../images/github_logo.svg';
import { Button, OnClickActions, ButtonInfo } from './buttons';


function FunctionalComponent(props: OnClickActions) {
    const cookiesButton = { onClick: props.cookies, type: 'cookies', location: 'footer' }
    const privacyButton = { onClick: props.privacy, type: 'privacy', location: 'footer' }
    const homeAction = (event: React.MouseEvent<HTMLImageElement>) => {
        event.stopPropagation();
        props.home();
    };

    return (
        <div className="container">
            <div className="site-footer-inner has-top-divider">
                <div className="brand footer-brand">
                    <img className="icon-button" src={logo_white} alt="drinkee logo" onClick={homeAction}  />
                </div>
                <ul className="footer-links list-reset">
                    <li>
                        <a href="mailto:appdrinkee@gmail.com">Contact</a>
                    </li>
                    <li>
                        <Button {...cookiesButton} />
                    </li>
                    <li>
                        <Button {...privacyButton} />
                    </li>
                </ul>
                <ul className="footer-social-links list-reset">

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