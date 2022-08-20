import React from 'react';
import home from './home';
import cookies from './cookie_policy';
import privacy from './privacy_policy';
import '../styles/style.scss';
import { OnClickActions } from './buttons';


function FunctionalComponent(currentPage: string, props: OnClickActions) {
    let onClickActions = props;
    if (currentPage === 'home') {
        return (
            <div>
                {home()}
            </div>
        );
    } else if (currentPage === 'cookies') {
        return (
            <div>
                {cookies(onClickActions)}
            </div>
        );
    } else {
        return (
            <div>
                {privacy(onClickActions)}
            </div>
        );
    }
}

export default FunctionalComponent;
