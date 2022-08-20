import React from 'react';
import '../styles/style.scss';
import phone from '../images/phone_frame.png';
import carousel from './carousel';
import features from './features';
import dots1 from './dots1';
import dots2 from './dots2';
import illustration from './main_illustration';
import logo from '../images/Drinkee_logo.svg';
// import qr_code from '../images/qr_code.svg';

function FunctionalComponent() {
    return (
        <main>
            <section className="hero">
                <div className="container">
                    <div className="hero-inner">
                        <div className="hero-copy">
                            <img className="feature-logo" src={logo} alt="drinkee logo" />
                            <h1 className="hero-title mt-0">Drinkee App</h1>
                            <p className="hero-paragraph">Break the ice and connect with new friends on your next event. (alpha version - iOS in development)</p>
                            <br></br>
                            <br></br>
                            <h2 className="hero-title mt-0"> [Coming Soon] </h2>
                            {/* <div className="hero-cta"><img className="qr-code" src={qr_code} alt="QR code" /></div> -->
                                            <div className="hero-cta"><a className="button button-shadow" href="https://qrco.de/bdCXmI" target="_blank" rel="noreferrer">Get App in Google Play Store</a></div> */}
                        </div>
                        <div className="hero-app">
                            {illustration()}
                            <section className="media section">
                                <img className="device-mockup" src={phone} alt="App preview" />
                                <div className="hero-app-dots hero-app-dots-1">
                                    {dots1()}
                                </div>
                            </section>
                            <div className="hero-app-dots hero-app-dots-2">
                                {dots2()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features section">
                {features()}
            </section>

            <section className="media section">
                <div className="container-sm">
                    <div className="media-inner section-inner media-canvas">
                        <div className="media-header text-center">
                            <h2 className="section-title mt-0">Have a quick look</h2>
                        </div>
                        <div className="carousel">
                            {carousel()}
                            <div className="hero-media-dots">
                                {dots2()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default FunctionalComponent;
