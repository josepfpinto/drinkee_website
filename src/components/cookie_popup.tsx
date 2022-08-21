import React from 'react';
import '../styles/style.scss';
import CookieConsent from "react-cookie-consent";
import {Button, OnClickActions} from './buttons';


function FunctionalComponent(props: OnClickActions) {
    const cookiesButton = { onClick: props.cookies, type: 'cookies', location: 'popup' }
    const privacyButton = { onClick: props.privacy, type: 'privacy', location: 'popup' }

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
        This website uses cookies. <Button {...cookiesButton} />
    </CookieConsent>
}

export default FunctionalComponent;