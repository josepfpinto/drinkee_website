import React  from 'react';
import '../styles/style.scss';

export interface OnClickActions {
    cookies: Function;
    privacy: Function;
    home: Function;
}

export interface ButtonInfo {
    onClick: any;
    type: string;
    location: string;
}

function Button(props: ButtonInfo) {
    const currentClass = props.location === 'popup' ? 'cookies-link-popup' : 'cookies-link-footer';
    return (
        <button className={currentClass} onClick={props.onClick}>
            {props.type === 'cookies' ? 'Cookies' : 'Privacy Policy'}
        </button>
    );
}


export {Button};