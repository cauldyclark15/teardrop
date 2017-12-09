import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="not-found">
    <h1>404: Page not found</h1>
    <h3>This means you hack the URL.</h3>
    <Link to="/">Home</Link>
  </div>
);

export default NotFound;
