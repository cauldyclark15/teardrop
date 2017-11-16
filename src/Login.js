import React from "react";

const Login = ({ handleSubmit, error }) => (
  <div className="login-form">
    <h3>USE 'Teardrop' TO LOGIN</h3>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="teardrop"
          placeholder="Enter Teardrop here"
          required
        />
      </div>
      <button className="btn btn-lg btn-primary" type="submit">
        Submit
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  </div>
);

export default Login;
