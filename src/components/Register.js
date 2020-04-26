import React, { Component } from "react";

import { auth, createUserProfileDocument } from "../firebase/config";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div>
        <h3>Register</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            name="displayName"
            value={displayName}
            type="text"
            placeholder="Displayname"
            onChange={this.handleChange}
          />

          <input
            name="email"
            value={email}
            type="email"
            placeholder="Email"
            onChange={this.handleChange}
          />

          <input
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />

          <input
            name="confirmPassword"
            value={confirmPassword}
            type="password"
            placeholder="Confirm Password"
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
