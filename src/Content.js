import React, { Component } from "react";

class Content extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((itemsAsync = []) => {
        return this.setState({ items: itemsAsync });
      });
  }

  handleSubmit = event => {
    event.preventDefault();

    const { name, email, phone } = event.target;
    const newItem = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      id: Math.floor(Math.random * 1000)
    };

    return this.setState({ items: [...this.state.items, newItem] });
  };

  handleLogout = () => {
    localStorage.removeItem("auth");
    return window.location.replace("/login");
  };

  render() {
    const { items } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 table-items">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {items &&
                    items.map(item => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12">
            <h3>Add form</h3>
            <form onSubmit={this.handleSubmit} className="addForm">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-4">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4">
                  <button
                    onClick={this.handleLogout}
                    type="button"
                    className="btn btn-lg btn-danger logout"
                  >
                    Log out
                  </button>
                  <button type="submit" className="btn btn-lg btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
