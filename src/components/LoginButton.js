import React from "react";

const LoginButton = (props) => (
  <button
    className={props.id}
    onClick={() => props.authenticate(props.provider)}
  >
    Login with {props.provider}
  </button>
);

export default LoginButton;
