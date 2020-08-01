import React from "react";
import PropTypes from "prop-types";
import LoginButton from "./LoginButton";

const Login = (props) => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign into your store's inventory</p>
    <LoginButton
      provider="Github"
      id="github"
      authenticate={props.authenticate}
    />
    <LoginButton
      provider="Twitter"
      id="twitter"
      authenticate={props.authenticate}
    />
    <LoginButton
      provider="Facebook"
      id="facebook"
      authenticate={props.authenticate}
    />
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default Login;
