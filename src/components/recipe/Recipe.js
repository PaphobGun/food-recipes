import React from 'react';
import { Link } from 'react-router-dom';

const shortChar = (char, words) => {
  return char.length < words ? `${char}` : `${char.substring(0, words)}...`;
};

const Recipe = props => {
  const {
    image_url,
    title,
    publisher,
    publisher_url,
    recipe_id
  } = props.recipe;

  return (
    <div className="col-md-4 mb-3">
      <div className="myCard">
        <img src={image_url} alt={title} className="myCard__img" />
        <div className="myCard__text">
          <h1 className="myCard__text__title">{shortChar(title, 20)}</h1>
          <p className="leadd">Publisher: {shortChar(publisher, 19)}</p>
          <div className="myCard__text__btn">
            <Link
              className="btn btn-outline-primary mr-2"
              to={`/recipe/${recipe_id}`}
            >
              Details
            </Link>
            <a
              className="btn btn-outline-info"
              href={publisher_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Publisher
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
