import React from "react";
import { auth } from "../firebase/config";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../cart/CartIcon";

const Navbar = ({ currentUser }) => {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Shop</li>

        {currentUser ? (
          <li onClick={() => auth.signOut()}>Signout</li>
        ) : (
          <Link to="/login">
            <li> Signin</li>
          </Link>
        )}
        <li>
          {" "}
          <CartIcon />{" "}
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Navbar);
