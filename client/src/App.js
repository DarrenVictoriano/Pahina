import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Helmet from 'react-helmet';
import Home from './components/content/home/home';
import { PostProvider } from './providers/postContext';
import Portfolio from './components/content/porfolio/portfolio';

function App() {

  return (
    <PostProvider>
      <div className="App container-fluid px-0">

        <Helmet bodyAttributes={{ style: 'background-color : #343a40' }} />
        <NavBar />

        {/* <Home /> */}
        <Portfolio />

      </div>
    </PostProvider>
  );
}

export default App;
