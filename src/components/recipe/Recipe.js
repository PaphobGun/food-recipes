import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div className="col-md-4">
      <div className="myCard">
        <img
          src={recipe.image_url}
          alt={recipe.title}
          className="myCard__img"
        />
        <h1 className="myCard__title">
          {recipe.title.length < 25
            ? `${recipe.title}`
            : `${recipe.title.substring(0, 25)}...`}
        </h1>
      </div>
    </div>
  );
};

export default Recipe;
