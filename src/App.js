import React, { Component} from 'react';
import { GlobalStyle } from './globalstyles';

import Intro from './components/Intro';
import Routing from './components/Routing';
import NavBar from './components/Navbar';
import Work from './components/Work';
import Projects from './components/Projects';
import Footer from './components/Footer';

class App extends Component {
    render() {
      return (
        <div id="App" className="App">
            <GlobalStyle />
            <NavBar />
            <Routing />
        </div>
      );
    }
  }
  
export default App;