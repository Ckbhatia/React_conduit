import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Page/Home";
import Register from "./components/Page/Register";
import Login from "./components/Page/Login";

class App extends React.Component {
  state = {
    user: null
  };

  componentDidMount() {
    if (localStorage.authToken) {
      this.fetchUser(JSON.parse(localStorage.authToken));
    }
  }

  /**
   * Returns routes based on condition
   * @param {string}
   * @return {object}
   */
  Routes = user => {
    // Protected Routes
    if (user) {
      return (
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      );
    }
    // Unprotected Routes
    else {
      return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/register"
            render={() => <Register fetchUser={this.fetchUser} />}
          />
          <Route
            path="/login"
            render={() => <Login fetchUser={this.fetchUser} />}
          />
        </Switch>
      );
    }
  };

  /**
   * Fetch the user by token
   * @param {string}
   * @return {undefined}
   */
  fetchUser = token => {
    token = `Token ${token}`;
    fetch("https://conduit.productionready.io/api/user", {
      headers: {
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(user => {
        token = token.split(" ")[1];
        localStorage.setItem("authToken", JSON.stringify(token));
        this.setState({ user });
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div className="App">
        {/*TODO: Add last default Route for error 404 */}
        {this.Routes(this.state.user)}
      </div>
    );
  }
}

export default App;
