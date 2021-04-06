import React, { Component } from "react";
import './Login.css';
import { Link}from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div className="not-found">
            <form>
                <h1>Sign In</h1>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group sizepagepass">
                    <label className="nameinp">Password</label>
                    <input type="password" className="form-control inp" placeholder="Enter password" />
                </div>

                <div className="form-group rememberme">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <Link className="btn button1" to="/add-patient">Submit </Link>
            </form>
            </div>
        );
    }
}


export default Login