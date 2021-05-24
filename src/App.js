import React, { Component} from 'react';
import { GlobalStyle } from './globalstyles';

import Routing from './components/Routing';
import NavBar from './components/Navbar';

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