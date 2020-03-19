import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import PreHome from './component/PreHome';
import Home from './component/Home';
import Explore from './component/Explore';
import Timeline from './component/Timeline';
import Navbar from './component/Navbar';
import BottomNav from './component/BottomNav';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={PreHome}/>
          <Route path="/Home" component={Home}/>
          <Route path="/Explore" component={Explore}/>
          <Route path="/Timeline" component={Timeline}/>
          <Route path="/Navbar" component={Navbar}/>
          <Route path="/BottomNav" component={BottomNav}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
