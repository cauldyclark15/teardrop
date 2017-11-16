import React, { Component } from "react";

import Login from "./Login";
import Content from "./Content";
import NotFound from "./NotFound";

class App extends Component {
  state = {
    routes: ["/", "/login"],
    notFound: false,
    error: ""
  };

  componentWillMount() {
    const { pathname } = window.location;
    const auth = localStorage.getItem("auth");
    if (!auth && pathname !== "/login") {
      window.location.assign("/login");
    } else if (!this.state.routes.includes(pathname)) {
      this.setState({ notFound: true });
    }
  }

  handleSubmitAuthForm = event => {
    event.preventDefault();

    const userInput = event.target.teardrop.value;
    if (userInput === "Teardrop") {
      localStorage.setItem("auth", "yes1515");
      this.setState({ error: "", notFound: false });
      return window.location.assign("/");
    } else {
      return this.setState({ error: "Please use Teardrop" });
    }
  };

  render() {
    const { pathname } = window.location;
    const { notFound, error } = this.state;
    const auth = localStorage.getItem("auth");
    return (
      <div>
        {!auth &&
          pathname === "/login" && (
            <Login handleSubmit={this.handleSubmitAuthForm} error={error} />
          )}
        {auth && pathname === "/" && <Content />}
        {notFound && <NotFound />}
      </div>
    );
  }
}

export default App;
