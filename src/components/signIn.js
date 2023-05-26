import React from "react";

const signIn = () => {
  return (
    <div className="signUp">
      <div className="register">
        <h3>Register User</h3>
        <input placeholder="Email" minLength={8} required />
        <input placeholder="Password" minLength={8} required />
        <button> Create an account</button>
      </div>

      <div className="login">
        <h3>Login</h3>
        <input placeholder="Email" minLength={8} required />
        <input placeholder="Password" minLength={8} required />
        <button> Sign In</button>
      </div>
    </div>
  );
};

export default signIn;
