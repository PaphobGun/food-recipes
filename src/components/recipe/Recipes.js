import React, { Component } from 'react';

import paginate from 'paginate-array';

import Form from '../layout/Form';
import Recipe from './Recipe';
import Header from '../layout/Header';
import { API_KEY } from '../../Api';

class Recipes extends Component {
  state = {
    recipes: [],
    size: 9,
    page: 1,
    currPage: null
  };

  previousPage = () => {
    const { page, size, recipes } = this.state;

    if (page > 1) {
      const newPage = page - 1;
      const newCurrPage = paginate(recipes, newPage, size);

      this.setState({
        ...this.state,
        page: newPage,
        currPage: newCurrPage
      });
    }
  };

  nextPage = () => {
    const { currPage, page, size, recipes } = this.state;

    if (page < currPage.totalPages) {
      const newPage = page + 1;
      const newCurrPage = paginate(recipes, newPage, size);
      this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
    }
  };

  // fetch data from api
  fetchRecipes = async recipe => {
    const req = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipe}`
    );
    const res = await req.json();

    const { page, size } = this.state;

    const currPage = await paginate(res.recipes, page, size);

    this.setState({
      recipes: res.recipes,
      currPage
    });
  };

  renderRecipe = currPage => {
    if (currPage.data.length < 1) return <h1>Not Found...</h1>;

    return currPage.data.map(recipe => (
      <Recipe recipe={recipe} key={recipe.recipe_id} />
    ));
  };

  render() {
    const { currPage } = this.state;

    return (
      <div>
        <Header />
        <Form fetchRecipes={this.fetchRecipes} />
        <div className="container mt-5">
          <div className="row">{currPage && this.renderRecipe(currPage)}</div>
        </div>

        {currPage && (
          <nav aria-label="..." className="container mt-5">
            <ul className="pagination pagination-md">
              <li
                className={
                  // If first page >> disable
                  currPage.currentPage === 1
                    ? 'page-item disabled'
                    : 'page-item'
                }
              >
                <button className="page-link" onClick={this.previousPage}>
                  Previous Page
                </button>
              </li>
              <li
                className={
                  // If last page >> disabled
                  currPage.currentPage === currPage.totalPages
                    ? 'page-item disabled'
                    : 'page-item'
                }
              >
                <button className="page-link" onClick={this.nextPage}>
                  Next Page
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    );
  }
}

export default Recipes;
