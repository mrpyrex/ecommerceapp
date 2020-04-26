import React, { Component } from "react";
import { auth, signInWithGoogle } from "../firebase/config";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            value={this.state.email}
            required
            type="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            name="password"
            value={this.state.password}
            required
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
          <button onClick={signInWithGoogle}>Google Singin</button>
        </form>
      </div>
    );
  }
}

export default Login;
