import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import { BrowserRouter, Match, Link } from 'react-router';
import { rootElement, getDataAttr } from './util' ;

const baseUrl = getDataAttr(rootElement, 'base-url') || '/';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1>Welcome to Argelpargel!</h1>
                    </div>
                    <nav className="App-navigation">
                        <ul>
                            <li><Link to={`${baseUrl}`}>Home</Link></li>
                            <li><Link to={`${baseUrl}about`}>About</Link></li>
                            <li><Link to={`${baseUrl}topics`}>Topics</Link></li>
                        </ul>
                    </nav>
                    <Match exactly pattern={`${baseUrl}`} component={Home} />
                    <Match pattern={`${baseUrl}about`} component={About} />
                    <Match pattern={`${baseUrl}topics`} component={Topics} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
