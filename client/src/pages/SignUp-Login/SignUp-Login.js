import React from "react";
import "./SignUp-Login.css"
import { LoginForm, SignupForm } from "../../component/Auth/SignupLoginForm.js";
import { Link } from "react-router-dom";

const SignUp_Login = () => {

    const loginMode = () => {
        const signup_login_container = document.querySelector(".auth-container");
        signup_login_container.classList.add("signin-mode");
    }

    const signupMode = () => {
        const signup_login_container = document.querySelector(".auth-container");
        signup_login_container.classList.remove("signin-mode");
    }

    return (
        <div className="authentiction-page">
            <header className="Header top-bar _fixed">
                <div className="menu-bar" role="menubar">
                    <Link className="brandlogo links" to="/" role="button">Stackoverflow-Lite</Link>
                    <ol className="menu-bar-items menulinks" role="presentation">
                        <li className="bar-item about">About</li>
                        <li className="bar-item products">Products</li>
                        <li className="bar-item team">Team</li>
                    </ol>
                </div>
            </header>
            <div className="auth-container">
                <div className="signupLogin-container">
                    <div className="signupLogin-forms">
                        <div className="signup"><SignupForm /></div>
                        <div className="signin"><LoginForm /></div>
                    </div>
                </div>
                <div className="panel-container">
                    <div className="panel left-panel">
                        <div>
                            <p> Don't have an account? </p>
                            <button onClick={signupMode} className="custom-btn"> Sign up </button>
                        </div>
                        <img className="panel-image" src={require("../../img/register.svg")} alt="img" />
                    </div>
                    <div className="panel right-panel">
                        <div>
                            <p> Already have an account? </p>
                            <button onClick={loginMode} className="custom-btn"> SIGN IN</button>
                        </div>
                        <img className="panel-image" src={require("../../img/log.svg")} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp_Login;