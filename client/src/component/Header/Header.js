import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { HiX } from "react-icons/hi";
import {RiMenu4Fill } from "react-icons/ri";
import {LoginForm} from "../Auth/SignupLoginForm";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSearch_OnMobile, setShowSearch_OnMobile] = useState(false);
    const [showSideNav, setShowSideNav] = useState(false);

    const toggleLogin = () => {
        if (!showLogin) {
            setShowLogin(true);
        }
        if (showLogin) {
            setShowLogin(!showLogin);
        }
    }

    /**const handleFocus = () => {
        setShowLogin(false)
    }*/

    const toggle_searchBar_OnMobile = () => {
        if (!showSearch_OnMobile) {
            setShowSearch_OnMobile(true);
            document.getElementById("smtphone-search-icon").style.background = "#ecf2f8";
            document.getElementById("smtphone-search-icon").style.color = "#0c0d0e";
        }

        if (showSearch_OnMobile) {
            setShowSearch_OnMobile(!showSearch_OnMobile);
            document.getElementById("smtphone-search-icon").style.background = "#fafafb";
        }
    }

    const toggleSideNav = () => { setShowSideNav(!showSideNav) }

    return (
        <header className="Header top-bar _fixed">
            <div className="menu-bar" role="menubar">
                <div className="menu-icon-mobile" onClick={toggleSideNav}>
                    {showSideNav ? <HiX /> : <RiMenu4Fill className="SideIcons" />}
                </div>
                <Link className="brandlogo links" to="/" role="button">
                    Stackoverflow-Lite
                </Link>
                <ol className="menu-bar-items menulinks" role="presentation">
                    <li className="bar-item about">About</li>
                    <li className="bar-item products">Products</li>
                    <li className="bar-item team">Team</li>
                </ol>
                < SearchBar />
                <ol className="menu-bar-items menubtns" role="auth-btn">
                    <li id="smtphone-search-icon" className="smtphone-search-icon" onClick={toggle_searchBar_OnMobile}>
                        <BsSearch className="s_icon-forMobile" />
                    </li>
                    <li className="bar-item login-btn custom-btn">
                        <Link onClick={toggleLogin} className="links" role="button"> Login </Link>
                    </li>
                    {showLogin ? <LoginForm /> : null}
                    <li className="bar-item register-btn custom-btn">
                        <Link className="links" to="/authenticate" role="button"> register </Link>
                    </li>
                </ol>
            </div>
            {showSearch_OnMobile ? <div className="smtphone-searchbar"><SearchBar showSearch_OnMobile={showSearch_OnMobile} /></div> : null}

            {/**<! Side navbar on mobile device */}

            <aside className={showSideNav ? "sideNav" : "sideNav hidden"}>
                <ul>
                    <li>home</li>
                    <li>logout</li>
                </ul>
            </aside>
        </header>
    );
}

export default Header;
