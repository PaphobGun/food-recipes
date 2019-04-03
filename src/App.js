import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Welcome from './components/layout/Welcome';
import Recipes from './components/recipe/Recipes';
import About from './components/layout/About';
import RecipeDetails from './components/recipe/RecipeDetails';
import Error404 from './components/layout/Error404';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="/about" exact component={About} />
          <Route path="/recipe/:id" exact component={RecipeDetails} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
