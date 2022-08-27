import React from 'react';
import '../styles/style.scss';
import feature_interface from '../interfaces/Feature';

function FunctionalComponent(props: feature_interface) {
    return (
        <div className="feature is-revealing">
            <div className="feature-inner">
                <div className="feature-icon">
                    <img src={props.icon} alt="icon feature" />
                </div>
                <h3 className="feature-title mt-24">{props.title}</h3>
                <p className="text-sm mb-0">{props.text}</p>
            </div>
        </div>
    )
}

export default FunctionalComponent;