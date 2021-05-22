import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalstyles';

import Intro from './components/Intro';
import NavBar from './components/Navbar';
import Work from './components/Work';
import Projects from './components/Projects';

export const App = () => {
    return (
        <Router >
            <GlobalStyle />
            <NavBar />
            <Intro />
            <Work />
            <Projects />
        </Router>
    )
}

export default App;
