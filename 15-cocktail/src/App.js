import React from "react"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/cocktail/:id" component={SingleCocktail}/>
          <Route path= "*" component={Error}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
