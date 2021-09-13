import React from "react";
import "./SignupLoginForm.css";

const LoginForm = () => {
    return (
        <form className="auth-form">
            <h1> Sign in</h1>
            <fieldset>
                <i class="fas fa-user"></i>
                <input placeholder="Username" type="text" />
            </fieldset>
            <fieldset>
                <i class="fas fa-lock"></i>
                <input placeholder="Password" type="text" />
            </fieldset>
            <input type="submit" value="Sign in" className="signup-btn custom-btn" />
            <p class="">Or Sign in with social platforms</p>
            <div class="social-media">
                <a href="#" class="social-icon custom-btn">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon custom-btn">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon custom-btn">
                    <i class="fab fa-google"></i>
                </a>
                <a href="#" class="social-icon custom-btn">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
        </form>
    )
}

const SignupForm = () => {
    return (
        <form className="auth-form">
            <h1> Sign up</h1>
            <fieldset>
                <i class="fas fa-user"></i>
                <input placeholder="Username" type="text" />
            </fieldset>
            <fieldset>
                <i class="fas fa-envelope"></i>
                <input type="text" placeholder="Email" />
            </fieldset>
            <fieldset>
                <i class="fas fa-lock"></i>
                <input placeholder="Password" type="text" />
            </fieldset>
            <input type="submit" value="Sign up" className="signup-btn custom-btn" />
            <p class="">Or Sign up with social platforms</p>
            <div class="social-media">
                <a href="#" class="social-icon custom-btn">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon custom-btn">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon custom-btn">
                    <i class="fab fa-google"></i>
                </a>
                <a href="#" class="social-icon custom-btn">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
        </form>
    )
}

export {
    LoginForm,
    SignupForm
};