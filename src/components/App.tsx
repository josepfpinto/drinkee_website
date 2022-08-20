import React from 'react';
import '../styles/style.scss';
import main from './main';
import footer from './footer';
import cookies from './cookie_popup';

interface Navigation {
    page: string;
}

class App extends React.Component<any, any> {
    constructor(props: Navigation) {
        super(props);
        this.handleHomeClick = this.handleHomeClick.bind(this);
        this.handleCookiesClick = this.handleCookiesClick.bind(this);
        this.handlePrivacyClick = this.handlePrivacyClick.bind(this);
        this.state = { page: 'home' };
    }

    handleHomeClick() {
        this.setState({ page: 'home' });
        window.scrollTo(0, 0);
    }

    handleCookiesClick() {
        this.setState({ page: 'cookies' });
        window.scrollTo(0, 0);
    }

    handlePrivacyClick() {
        this.setState({ page: 'privacy' });
        window.scrollTo(0, 0);
    }
    
    render() {
        let currentPage = this.state.page;
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
                    {cookies({cookies: this.handleCookiesClick, privacy: this.handlePrivacyClick, home: this.handleHomeClick})}
                    <body className="is-boxed has-animations">
                        <div className="body-wrap boxed-container">
                            {main(currentPage, {cookies: this.handleCookiesClick, privacy: this.handlePrivacyClick, home: this.handleHomeClick})}
                            <footer className="site-footer">
                                {footer({cookies: this.handleCookiesClick, privacy: this.handlePrivacyClick, home: this.handleHomeClick})}
                            </footer>
                        </div>

                        <script src="dist/js/main.min.js"></script>
                    </body>
                </html>
            </div>
        );
    }
}

export default App;
