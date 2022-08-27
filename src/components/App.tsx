import * as React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/style.scss';
import Main from './main';
import Home from './home';
import Privacy from './privacy_policy';
import Cookies from './cookie_policy';

export default function App() {
    return <div className="App">
        <html lang="en" className="no-js">
            <head>
                <meta charSet="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Drinkee App</title>
                <link href="https://fonts.googleapis.com/css?family=Heebo:400,500,700|Playfair+Display:700" rel="stylesheet" />
                <link rel="stylesheet" href="styles/style.css" />
            </head>
            <body className="is-boxed has-animations">
                <div className="body-wrap boxed-container">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Main />}>
                                <Route index element={<Home />} />
                                <Route path="privacy" element={<Privacy />} />
                                <Route path="cookies" element={<Cookies />} />
                                <Route path="*" element={<Home />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>

                </div>
            </body>
        </html>
    </div>
}
