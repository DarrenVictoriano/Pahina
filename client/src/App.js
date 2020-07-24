import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Helmet from 'react-helmet';

function App() {
  return (
    <div className="App container-fluid px-0">
      <Helmet bodyAttributes={{ style: 'background-color : #343a40' }} />
      <NavBar />
      <div className="home-content text-center">
        <p className="text-light mb-0 p-0 home-content-title">
          Software Engineer
        </p>
        <hr className="title-hr" />
        <p className="text-muted lead">
          Specializing in test automation and developing FullStack web application.
        </p>
        <div className="media-icons">
          <a href="https://www.linkedin.com/in/darren-victoriano/" target="_blank" data-toggle="tooltip"
            data-placement="top" title="Tooltip on top">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/DarrenVictoriano" target="_blank">
            <i class="fab fa-github fa-2x"></i>
          </a>
          {/* <a href="images/VR040.pdf" target="_blank">
            <i class="fas fa-file-alt fa-2x"></i>
          </a> */}
          <a href="mailto:darren.victoriano@gmail.com">
            <i class="fas fa-envelope fa-2x"></i>
          </a>
        </div>
      </div>
      {/* <div className="footer text-center text-muted">
        <hr className="footer-hr" />
        &copy; Copyright 2020 by Darren Victoriano
      </div> */}
    </div>
  );
}

export default App;
