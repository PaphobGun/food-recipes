import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import { API_KEY } from '../../Api';
import BackBtn from '../layout/BackBtn';
import Spinner from '../layout/Spinner';

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
  };

  // Capitalize word
  getUpperCase = word => {
    // turn to array
    const wordArr = word.split(' ');
    const uppered = [];

    for (let i of wordArr) {
      // Uppercase first alphabet + the rest of the word
      if (i[0]) {
        let cur = i[0].toUpperCase() + i.slice(1);
        uppered.push(cur);
      }
    }

    if (uppered) return uppered.join(' ');

    return word;
  };

  render() {
    const {
      image_url,
      title,
      ingredients,
      publisher,
      source_url,
      social_rank
    } = this.state.recipe;

    if (this.state.recipe.ingredients) {
      return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-5 mb-resp">
              <img style={{ width: '100%' }} src={image_url} alt={title} />
            </div>
            <div className="col-md-7">
              <div className="container">
                <h1 className="myTitle">{title}</h1>
                <p className="lead">Publisher: {publisher}</p>
                <p className="score">Score: {social_rank.toFixed(2)}</p>
                <hr />
                <div className="row">
                  {ingredients.map(item => {
                    return (
                      <div className="col-md-6" key={uuidv4()}>
                        {this.getUpperCase(item)}
                      </div>
                    );
                  })}
                </div>
                <div className="my-4">
                  <a
                    href={source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-info"
                  >
                    Source
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <BackBtn />
          </div>
        </div>
      );
    } else {
      return (
        <div className="container my-5 spinner">
          <Spinner />
        </div>
      );
    }
  }
}

export default RecipeDetails;
