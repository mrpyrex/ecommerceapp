import React from "react";
import { Link, withRouter } from "react-router-dom";

const MenuItem = ({ category: { name, product }, history }) => {
  return (
    <Link to="#">
      <h2>{name}</h2>
      <ul>
        <li>{product.name}</li>
      </ul>
    </Link>
  );
};

export default withRouter(MenuItem);
