import React from 'react';

const About = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-header">
              <h2>
                How to use <i className="fas fa-question-circle" />
              </h2>
            </div>
            <div className="card-body">
              All you have to do is type in the name of the food that you want
              to see a recipes on a search bar. You can the recipe ( ingredients
              ) on the web or you can visit the publisher website directly.
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 mx-auto my-5">
          <div className="card">
            <div className="card-header">
              <h2>
                Information <i className="fas fa-exclamation-circle" />
              </h2>
            </div>
            <div className="card-body">
              This application is built and developed by Paphob
              Aneakpoonsinsuk.Using React and Bootstrap the API that being use
              is a{' '}
              <span style={{ color: 'red' }}>
                free api from food2fork , So some recipe won't show correct
                information about recipe and it can be fetch only 50 times/day
                so if it doesn't work please try again next day.
              </span>
            </div>
            <div className="card-footer">
              <a
                href="https://github.com/PaphobGun/food-recipes"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Repository
              </a>{' '}
              Here is link to github repository.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
