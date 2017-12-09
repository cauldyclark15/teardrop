import React, { Component } from 'react';

const CLIENT_ID =
  '636847063226-o3n8j46htgc4c0g2vl17lc4t4uu8t3li.apps.googleusercontent.com';
const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest',
];
const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

class Login extends Component {
  state = { error: '', isSignedIn: false, test: false };

  componentDidMount() {
    this.handleClientLoad();
  }

  handleClientLoad = () => {
    window.gapi.load('client:auth2', this.initClient);
  };

  initClient = () => {
    window.gapi.client
      .init({
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scope: SCOPES,
      })
      .then(() => {
        // Listen for sign-in state changes.
        window.gapi.auth2
          .getAuthInstance()
          .isSignedIn.listen(this.updateSigninStatus);

        // Handle the initial sign-in state.
        this.updateSigninStatus(
          window.gapi.auth2.getAuthInstance().isSignedIn.get()
        );
      });
  };

  updateSigninStatus = isSignedIn => {
    if (isSignedIn) {
      this.setState({ isSignedIn });
      this.listLabels();
    } else {
      this.setState({ isSignedIn: false });
    }
  };

  handleAuthClick = event => {
    window.gapi.auth2.getAuthInstance().signIn();
  };

  handleSignoutClick = event => {
    window.gapi.auth2.getAuthInstance().signOut();
  };

  listLabels = () => {
    window.gapi.client.gmail.users.labels
      .list({
        userId: 'me',
      })
      .then(response => response.body)
      .then(jsonBody => console.log('+++++++++', jsonBody));
  };

  handleSubmit = event => {
    event.preventDefault();
    const userInput = event.target.teardrop.value;
    if (userInput === 'Teardrop') {
      localStorage.setItem('auth', 'yes1515');
      return this.props.history.push('/');
    } else {
      return this.setState({ error: 'Please use Teardrop' });
    }
  };

  render() {
    const { error, isSignedIn } = this.state;
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
          {!isSignedIn && (
            <button
              onClick={this.handleAuthClick}
              className="btn btn-lg btn-success"
              type="button"
            >
              Authorize with gmail
            </button>
          )}
          {isSignedIn && (
            <button
              onClick={this.handleSignoutClick}
              className="btn btn-lg btn-danger"
              type="button"
            >
              Signout
            </button>
          )}
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    );
  }
}

export default Login;
