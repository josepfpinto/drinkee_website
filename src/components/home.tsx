import * as React from 'react'
import '../styles/style.scss';
import phone from '../images/phone_frame.png';
import carousel from './carousel';
import features from './features';
import dots1 from './dots1';
import dots2 from './dots2';
import illustration from './main_illustration';
import logo from '../images/Drinkee_logo.svg';
import qr_code from '../images/qr_code.svg';
import Footer from './footer';
import { Component } from 'react';


export default class Home extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return <main>
            <section className="hero">
                <div className="container">
                    <div className="hero-inner">
                        <div className="hero-copy">
                            <img className="feature-logo" src={logo} alt="drinkee logo" />
                            <h1 className="hero-title mt-0">Drinkee App</h1>
                            <p className="hero-paragraph">This is a Mobile Social App dedicated to connect people in events. It was developed in Flutter and Dart and the infrastructure is in Google Cloud, with Firebase, Firestore and Firestorage.</p>
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

            <script src="dist/js/main.min.js"></script>

            <footer className="site-footer">
                {Footer()}
            </footer>
        </main>
    }
}
