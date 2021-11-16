import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <ul>
      <li>
        <Link to="/useBackground"> use Background hook</Link>
      </li>
      <li>
        <Link to="/useVisible"> use visible hook</Link>
      </li>
    </ul>
  );
};

export default Home;
