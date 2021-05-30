import React, { Component} from 'react';
import { GlobalStyle } from './globalstyles';
import NavBar from './components/Navbar';

class App extends Component {
    render() {
      return (
        <div id="App" className="App">
            <GlobalStyle />
            <NavBar />
        </div>
      );
    }
  }
  
export default App;