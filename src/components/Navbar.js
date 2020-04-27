import React from "react";
import { auth } from "../firebase/config";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Navbar);
