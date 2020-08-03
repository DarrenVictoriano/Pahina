import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Helmet from 'react-helmet';
import Home from './components/content/home/home';
import { PostProvider } from './providers/postContext';
import Portfolio from './components/content/porfolio/portfolio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostPage from './components/content/posts/postPage';
import PostBody from './components/content/posts/postBody';

function App() {

  return (
    <Router>
      <Switch>
        <PostProvider>
          <div className="App container-fluid px-0">

            <Helmet bodyAttributes={{ style: 'background-color : #0a192f' }} />
            <NavBar />

            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/posts" component={PostPage} />
            <Route exact path="/post/:id" component={PostBody} />

          </div>
        </PostProvider>
      </Switch>
    </Router>

  );
}

export default App;
