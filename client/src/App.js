import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Helmet from 'react-helmet';
import Home from './components/content/home/home';
import { PostProvider } from './providers/postContext';
import Portfolio from './components/content/porfolio/portfolio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Switch>
        <PostProvider>
          <div className="App container-fluid px-0">

            <Helmet bodyAttributes={{ style: 'background-color : #0a192f' }} />
            <NavBar />

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/portfolio">
              <Portfolio />
            </Route>

          </div>
        </PostProvider>
      </Switch>
    </Router>

  );
}

export default App;
