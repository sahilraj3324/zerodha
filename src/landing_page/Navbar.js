import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom ">
      <div class="container-fluid p-3">
        <Link class="navbar-brand" to="/">
          <img src="media/images/logo.svg" style={{ width: "20%" }}  className="ml-5" />
        </Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/signup">
                Sign Up
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/productpage">
                Product
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/supportpage">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
