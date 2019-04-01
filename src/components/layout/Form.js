import React, { Component } from 'react';

class Form extends Component {
  state = {
    recipe: ''
  };

  // control input
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // send the 'search keyword to fetch'
  onSubmit = e => {
    e.preventDefault();
    this.props.fetchRecipes(this.state.recipe);
  };

  render() {
    return (
      <form className="container mt-5" onSubmit={this.onSubmit}>
        <div className="form-group">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-8 mx-auto">
              <input
                className="form-control"
                type="search"
                placeholder="Search For Recipes..."
                aria-label="Search"
                name="recipe"
                value={this.state.search}
                onChange={this.onChange}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
