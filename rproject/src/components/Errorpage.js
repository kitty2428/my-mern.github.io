import React from "react";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <>
    <div id="notfound">
        <div className="notfound">
          <div className="notfound404">
            <h1 className="err">404</h1>
          </div>
          
          <h2 className="error404">we are sorry page not found</h2>
          <p className="mb-5">
            The page you are looking for might have been removed had its name
            changed or its temporarily unavailable.
          </p>
          
            <NavLink to="/">Back to Home</NavLink>
          
          
        </div>
        </div>
    </>
  );
};
export default Errorpage;
