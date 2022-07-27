import React from 'react';
import '../styles/style.scss';
import phone from '../images/phone_frame.png';
import carousel from './carousel';
import features from './features';
import footer from './footer';
import dots1 from './dots1';
import dots2 from './dots2';
import illustration from './main_illustration';
import logo from '../images/Drinkee_logo.svg';
// import qr_code from '../images/qr_code.svg';

function App() {
    return (
        <div className="App">
            <html lang="en" className="no-js">
                <head>
                    <meta charSet="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Drinke App</title>
                    <link href="https://fonts.googleapis.com/css?family=Heebo:400,500,700|Playfair+Display:700" rel="stylesheet" />
                    <link rel="stylesheet" href="styles/style.css" />
                </head>
                <body className="is-boxed has-animations">
                    <div className="body-wrap boxed-container">
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

                        <footer className="site-footer">
                            {footer()}
                        </footer>
                    </div>

                    <script src="dist/js/main.min.js"></script>
                </body>
            </html>
        </div>
    );
}

export default App;
