import React from "react";
import { auth } from "../firebase/config";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser }) => {
  return (
    <div>
      <ul>
        <li>Home</li>

        {currentUser ? (
          <li onClick={() => auth.signOut()}>Signout</li>
        ) : (
          <Link to="/login">
            <li> Signin</li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
