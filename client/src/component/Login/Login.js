import React, {} from "react";
import "../Login/Login.css";

const Login = ( ) => {
    return (
        <div className="login" tabindex="-1">
            <form method="post" action="/">
                <fieldset className="inputs">
                    <input className="username" type="email" placeholder="User Name" required></input>
                    <input classsName="password" type="password" placeholder="Password" required></input>
                </fieldset>
                <fieldset className="login-actions">
                    <input className="submit-btn" type="submit" value="login" />
                    <label><input type="checkbox" checked="checked" />Keep me signed in</label>
                </fieldset>
            </form>
        </div>)
}

export default Login;