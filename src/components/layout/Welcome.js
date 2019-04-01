import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome__content">
        <h1 className="welcome__content__head">
          <span>F</span>ood <span>R</span>eci<span>p</span>es
        </h1>
        <p className="welcome__content__text">
          Food Recipes Collections Powered By Food2Fork
        </p>
        <Link
          to="/recipes"
          className="btn btn-outline-primary welcome__content__start mt-5"
        >
          Get Start
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
