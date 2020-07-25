import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Helmet from 'react-helmet';
import Home from './components/content/home/home';

function App() {

  return (
    <div className="App container-fluid px-0">
      <Helmet bodyAttributes={{ style: 'background-color : #343a40' }} />
      <NavBar />
      <Home />

    </div>
  );
}

export default App;
