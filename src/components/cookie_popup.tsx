import React from 'react';
import '../styles/style.scss';
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";


function FunctionalComponent() {
    return <CookieConsent
        buttonClasses="button button-cookies"
        buttonWrapperClasses="button-wrapper-cookies"
        containerClasses="cookies"
        contentClasses="cookies-content"
        buttonText="OK"
        style={{ background: "#242A37", fontSize: "15px" }}
        buttonStyle={{ backgroundColor: "#F54B64", fontSize: "15px" }}
        expires={120}
    >
        This website uses cookies. <Link to="/cookies">Cookies Policy</Link>
    </CookieConsent>
}

export default FunctionalComponent;