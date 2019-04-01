import React, { Component } from 'react';

import Form from '../layout/Form';
import Recipe from './Recipe';
import { API_KEY } from '../../Api';

class Recipes extends Component {
  state = {
    recipes: []
  };

  // fetch data from api
  fetchRecipes = async recipe => {
    const req = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipe}&count=9`
    );
    const res = await req.json();

    this.setState({
      recipes: res.recipes
    });

    console.log(this.state.recipes);
  };

  renderRecipe = () => {
    const { recipes } = this.state;

    return recipes.map(recipe => (
      <Recipe recipe={recipe} key={recipe.recipe_id} />
    ));
  };

  render() {
    return (
      <div>
        <Form fetchRecipes={this.fetchRecipes} />
        <div className="container mt-5">
          <div className="row">{this.renderRecipe()}</div>
        </div>
      </div>
    );
  }
}

export default Recipes;
