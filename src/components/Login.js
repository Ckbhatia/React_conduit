import React, { Component } from 'react';
import '../App.scss';
import { Link } from 'react-router-dom';
import Header from './Header/Header';

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleInput = (evt) => {
        const {name, value} = evt.target;
        this.setState({
            [name]: value
        })
    }

  render() {
      return (
          <>
          <Header />
            <div className="registeration-form-container">
                <div className="form-main-container center-child">
                    <div className="form-heading-container text-center">
                        <h1 className="form-heading">Sign In</h1>
                        <Link className="login-link" to="/register">Need an account?</Link>
                    </div>
                    <div className="form-container">
                      {/* Todo: update the url */}
                        <form action="/api/users" method="POST">
                            <input 
                                type="email" 
                                name="email" 
                                className="input" 
                                placeholder="Email"
                                onChange={this.handleInput}
                            />
                            <input 
                                type="password" 
                                name="password" 
                                className="input" 
                                placeholder="Password"
                                onChange={this.handleInput}
                            />
                            <button className="submit-btn">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
      </>
      )
  }
}