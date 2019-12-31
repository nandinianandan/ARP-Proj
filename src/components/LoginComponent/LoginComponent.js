import React, { Component } from "react";
import "./LoginComponent.css";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      loginClicked: false,
      errorData: {
        errorUserName: "",
        errorPassword: ""
      }
    };
    this.onChange = this.onChange.bind(this);
    this.validData = this.validData.bind(this);
    this.login = this.login.bind(this);
    this.moveToRegister = this.moveToRegister.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.id]: e.target.value }, () => {
      if (this.state.loginClicked) {
        this.validData();
      }
    });
  }
  login(e) {
    e.preventDefault();
    this.setState({ loginClicked: true });
    if (this.validData()) {
      console.log("SUCCESS");
    }
  }
  moveToRegister() {
    this.props.history.push("/registration/");
  }
  validData() {
    this.setState({
      errorData: {
        errorUserName: "",
        errorPassword: ""
      }
    });
    var isValid = true;
    if (this.state.userName === "" || this.state.userName === undefined) {
      this.setState(prevState => ({
        errorData: {
          ...prevState.errorData,
          errorUserName: "Username cannot be empty"
        }
      }));
      isValid = false;
    }
    if (this.state.password === "" || this.state.password === undefined) {
      this.setState(prevState => ({
        errorData: {
          ...prevState.errorData,
          errorPassword: "Password cannot be empty"
        }
      }));
      isValid = false;
    }
    return isValid;
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Login</h5>
                <form className="form-signin">


                  <div className="form-label-group">
                    <label htmlFor="userName">User Name</label>
                    <input
                      type="text"
                      id="userName"
                      className="form-control text-center"
                      placeholder="Enter user name"
                      name="userName"
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  {this.state.errorData.errorUserName !== "" && (
                    <div className="errormsg mb-2">
                      {this.state.errorData.errorUserName}
                    </div>
                  )}
                  <div className="form-label-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control text-center"
                      placeholder="Enter password"
                      name="password"
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  {this.state.errorData.errorPassword !== "" && (
                    <div className="errormsg mb-2">
                      {this.state.errorData.errorPassword}
                    </div>
                  )}
                  <div className="login">
                    <button type="submit" onClick={this.login}>
                      Login
            </button>
                    <div> Haven't registered yet? </div>
                    <a href="#" className="anchor_tag" onClick={this.moveToRegister}>
                      Register here.
            </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginComponent;
