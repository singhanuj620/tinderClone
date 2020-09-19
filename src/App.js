import React from 'react';
import './App.css';
import Header from './Components/Header'
import Chats from './Components/Chats'
import SwipeButtons from './Components/SwipeButtons'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TinderCards from './Components/TinderCards'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
            <Header/>
            <TinderCards/>
            <SwipeButtons/>
          </Route>
          <Route exact path="/chat" >
            <Header backButton="/"/>
            <Chats/>
          </Route>

        </Switch>
        
        {/*  Header */}
        {/* Cards */}
        {/* Buttons on last */}
        {/* Chats screen */}
        {/* Individual chat screen */}
      </Router>
      

    </div>
  );
}

export default App;
