import React from 'react';
import { Link } from 'react-router-dom';

const BackBtn = () => {
  return (
    <>
      <Link className="btn btn-outline-primary my-5" to="/recipes">
        Back To Home
      </Link>
    </>
  );
};

export default BackBtn;
