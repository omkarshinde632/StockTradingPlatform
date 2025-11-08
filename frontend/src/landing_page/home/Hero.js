import React from "react";
import {Link} from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/homeHero1.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
         <Link 
            to="/signup" 
            className="btn btn-primary btn-lg px-4 fs-5 col-2 offset-5"
          >
            Sign Up Now
          </Link>
      </div>
    </div>
  );
}

export default Hero;