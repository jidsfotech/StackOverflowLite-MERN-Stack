import React, { useState } from "react";
import "./SignUpLogin.css"
import { LoginForm, SignupForm } from "../../component/Auth/SignupLoginForm";
import { Link } from "react-router-dom";
import Headeer from "../../component/Header/Header"

const SignUp_Login = () => {

    const [authMode, setAuthMode] = useState('signup-mode');

    const loginMode = () => {
        let signup_login_container = document.querySelector(".authentication-page-wrapper");
        setAuthMode('signin-mode');
        signup_login_container.classList.add(authMode);
    }

    const signupMode = () => {
        let signup_login_container = document.querySelector(".authentication-page-wrapper");
        setAuthMode('signup-mode');
        signup_login_container.classList.add(authMode);
    }

    return (
        <div>
            <Headeer />
            <div className={`authentication-page-wrapper ${authMode}`}>
                <div className="panel-container">
                    <div className="panel left-panel">
                        <div>
                            <p> Don't have an account? </p>
                            <button onClick={signupMode} className="custom-btn"> Sign UP </button>
                        </div>
                        <img className="panel-image" src={require("../../assets/img/register.svg")} alt="img" />
                    </div>
                    <div className="panel right-panel">
                        <div>
                            <p> Already have an account? </p>
                            <button onClick={loginMode} className="custom-btn"> SIGN IN</button>
                        </div>
                        <img className="panel-image" src={require("../../assets/img/log.svg")} alt="img" />
                    </div>
                </div>
                <div className="auth-forms-container">
                    <div className="signup-form-wrapper">
                        <SignupForm />
                    </div>
                    <div className="signin-form-wrapper">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp_Login;