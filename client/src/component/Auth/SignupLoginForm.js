import React, { useState, useRef } from "react";
import "./SignupLoginForm.css";
import Axios from "../../utilities/client"

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        let loginDetails = {
            email: email,
            password: password,
        }
        // call login endpoint and pass to it login data
        if (email && password) {
            Axios.post("/user/login", loginDetails)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
        else {
            console.log("provide user email and password")
        }
    }

    return (
        <form className="auth-form">
            <h1> Sign in</h1>
            <fieldset>
                <i class="fas fa-user"></i>
                <input placeholder="Email" type="text" onChange={e => setEmail(e.target.value)} />
            </fieldset>
            <fieldset>
                <i class="fas fa-lock"></i>
                <input placeholder="Password" type="text" onChange={e => setPassword(e.target.value)} />
            </fieldset>
            <input type="submit" value="Sign in" className="btn custom-btn" onClick={onSubmit} />
            <p class="">Or Sign in with social platforms</p>
            <div class="social-media">
                <a href="/social" class="social-icon custom-btn">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="/social" class="social-icon custom-btn">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="/social" class="social-icon custom-btn">
                    <i class="fab fa-google"></i>
                </a>
                <a href="/social" class="social-icon custom-btn">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
        </form>
    )
}

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        let userData = {
            email: email,
            password: password,
            username: username
        }
        console.log(userData)
        // call register endpoint and pass to it user data
    }
    return (
        <form className="auth-form">
            <h1> Sign up</h1>
            <fieldset>
                <i class="fas fa-user"></i>
                <input placeholder="Username" type="text" onChange={e => setUsername(e.target.value)} />
            </fieldset>
            <fieldset>
                <i class="fas fa-envelope"></i>
                <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            </fieldset>
            <fieldset>
                <i class="fas fa-lock"></i>
                <input placeholder="Password" type="text" onChange={e => setPassword(e.target.value)} />
            </fieldset>
            <input type="submit" value="Sign up" className="btn custom-btn" onClick={onSubmit} />
            <p class="">Or Sign up with social platforms</p>
            <div class="social-media">
                <a href="/social" class="social-icon custom-btn">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="/social" class="social-icon custom-btn">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="/social" class="social-icon custom-btn">
                    <i class="fab fa-google"></i>
                </a>
                <a href="/social" class="social-icon custom-btn">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
        </form>
    )
}

const DropDownLoginForm = ({ displayStatus, dropDownLoginRef }) => {
    return (
        <div 
        className={displayStatus ? "showDropDownLoginForm" : "hideDropDownLoginForm"} 
        ref={dropDownLoginRef}
        >
            <form action="/" method="post">
                <div className="email"><input type="text" placeholder="email"></input></div>
                <div className="paswword"><input type="test" placeholder="Password"></input></div>
                <div className="submit" ><button className="submit custom-btn-dark-blue">Login</button></div>
            </form>
        </div>
    )
}
export {
    LoginForm,
    SignupForm,
    DropDownLoginForm
};