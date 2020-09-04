import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';


function App() {
  
  return (
    <Router>
      <Switch>
      <Route path="/home">
            <Home></Home>
          </Route>
         
          <Route path ="/post/:id">
            <PostDetail/>              
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <NoMatch/>
          </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
