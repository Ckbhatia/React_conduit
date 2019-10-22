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
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      );
    }
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
