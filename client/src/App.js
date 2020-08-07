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
import PostForm from './components/content/posts/postForm';
import Login from './components/auth/login';
import { useCookies } from 'react-cookie';
import PageNotFound from './components/notfound/pageNotFound';

function App() {

  const [cookies] = useCookies(['token']);

  return (
    <PostProvider>
      <Router>
        <div className="App container-fluid px-0">

          <Helmet bodyAttributes={{ style: 'background-color : #0a192f' }} />
          <NavBar />

          <Switch> {/* switch should only contain routes and no other elements, otherwise it wont work correctly */}
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/postform" component={cookies.token ? PostForm : PageNotFound} />
            <Route exact path="/deets" component={Login} />
            <Route exact path="/blog" component={PostPage} />
            <Route path="/blog/:id" component={PostBody} />

            <Route component={PageNotFound} />
          </Switch>

        </div>
      </Router>
    </PostProvider>
  );
}

export default App;
