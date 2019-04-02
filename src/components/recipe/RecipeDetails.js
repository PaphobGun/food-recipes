import React, { Component } from 'react';

import { API_KEY } from '../../Api';

class RecipeDetails extends Component {
  state = {
    recipe: []
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;

    this.fetchRecipe(id);
  };

  // fetch data from api
  fetchRecipe = async id => {
    const req = await fetch(
      `https://www.food2fork.com/api/get?key=${API_KEY}&rId=${id}`
    );

    const recipe = await req.json();

    this.setState({
      recipe: recipe.recipe
    });

    console.log(this.state.recipe);
  };

  render() {
    return (
      <div className="container mt-5">
        <h1>De</h1>
      </div>
    );
  }
}

export default RecipeDetails;
