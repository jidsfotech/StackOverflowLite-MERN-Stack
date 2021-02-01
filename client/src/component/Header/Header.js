import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import {HiX} from "react-icons/hi";
import {
    RiMenu4Fill
} from "react-icons/ri";
import Login from "../Login/Login"
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
            document.getElementById("search-icon-mobile").style.background = "#ecf2f8";
            document.getElementById("search-icon-mobile").style.color = "#0c0d0e";
        }

        if (showSearch_OnMobile) {
            document.getElementById("search-icon-mobile").style.background = "white";
            setShowSearch_OnMobile(!showSearch_OnMobile);
        }
    }

    const toggleSideNav = () => {setShowSideNav(!showSideNav)}

    return (
        <div className="Header">
            <nav className="topNav">
                <div className="menu-icon-mobile" onClick={toggleSideNav}>
                    {showSideNav ? <HiX /> : <RiMenu4Fill className="SideIcons"/>}
                </div>
                <Link className="brandlogo links" to="/">
                    Stackoverflow-Lite
                </Link>
                < SearchBar />
                <div className="topNav-right-section">
                    <div id="search-icon-mobile" className="search-icon-mobile" onClick={toggle_searchBar_OnMobile}>
                        <BsSearch className="s_icon-forMobile" />
                    </div>
                    <div className="login-btn">
                        <button onClick={toggleLogin} >Login</button>
                    </div>
                    {showLogin ? <Login /> : null}
                    <div className="about">
                        <button>About</button>
                    </div>
                </div>
            </nav>
            { showSearch_OnMobile ?<div className="search-box-mobile"> <SearchBar showSearch_OnMobile={showSearch_OnMobile}/></div> : null }

            {/**<! Side navbar on mobile device */}

            <aside className={showSideNav ? "sideNav":"sideNav hidden" }>
                <ul> 
                    <li>home</li>
                    <li>logout</li>
                </ul>
            </aside>
        </div>
    );
        }
        
        export default Header;
