import React, { Component } from "react";

class Login extends Component {
  state = { error: "" };

  handleSubmit = event => {
    event.preventDefault();
    const userInput = event.target.teardrop.value;
    if (userInput === "Teardrop") {
      localStorage.setItem("auth", "yes1515");
      return this.props.history.push("/");
    } else {
      return this.setState({ error: "Please use Teardrop" });
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div className="login-form">
        <h3>USE 'Teardrop' TO LOGIN</h3>
        <form onSubmit={this.handleSubmit}>
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
  }
}

export default Login;
