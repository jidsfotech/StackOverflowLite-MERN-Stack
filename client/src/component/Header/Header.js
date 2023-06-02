import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { HiX } from "react-icons/hi";
import { RiMenu4Fill } from "react-icons/ri";
import { LoginForm } from "../Auth/SignupLoginForm";
import SearchBar from "../SearchBar/SearchBar";
import NavBadge from "../NavBadge/NavBadge";
import profilePics from "../../assets/img/majeed.png";
import brabdLogo from "../../assets/img/brand.png";
import {Popover, PopoverArrow} from "../Popover/Popover";
import { DropDownLoginForm } from "../Auth/SignupLoginForm";

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSearch_OnMobile, setShowSearch_OnMobile] = useState(false);
    const [showSideNav, setShowSideNav] = useState(false);
    const [showPopover, setPopOver] = useState(false)
    const headerRef = useRef(null);
    const dropDownLoginRef = useRef(null);
    const popOverRef = useRef(null);

    const toggleLogin = () => {
        !showLogin ? setShowLogin(true) : setShowLogin(!showLogin);
    }

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

<<<<<<< HEAD
    const togglePopOver = () => {
        !showPopover ? setPopOver(true) : setPopOver(false);
    }
=======
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
                    {/* <li className="bar-item login-btn custom-btn">
                        <Link onClick={toggleLogin} className="links" role="button"> Login </Link>
                    </li> */}
                    {showLogin ? <LoginForm /> : null}
                    <li className="bar-item register-btn custom-btn">
                        <Link className="links" to="/authenticate" role="button"> register </Link>
                    </li>
                </ol>
            </div>
            {showSearch_OnMobile ? <div className="smtphone-searchbar"><SearchBar showSearch_OnMobile={showSearch_OnMobile} /></div> : null}
>>>>>>> 3424c00bfb614e0e0d9fedce9d7ba7bcc0df5625

    const handleClickOutside = (e) => {
        if (dropDownLoginRef.current && !dropDownLoginRef.current.contains(e.target)) {
            setShowLogin(false);
        }
        if (popOverRef.current && !popOverRef.current.contains(e.target)) {
            setPopOver(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="header-wrapper" ref={headerRef}>
            <div className="notify"></div>
            <header>
                <nav className="nav">
                    <div className="nav-box">
                        <div className="nav-icon-mobile" onClick={toggleSideNav}>
                            {showSideNav ? <HiX /> : <RiMenu4Fill className="SideIcons" />}
                        </div>
                        <div className="nav-item brand-logo-wrapper">
                            <Link to="/">
                                <img src={brabdLogo} alt="brand-logo"></img>
                            </Link>
                        </div>
                        <div className="nav-item aboout nav-link" tabIndex="1">
                            Aboout
                        </div>
                        <div className="nav-item products nav-link" tabIndex="1" onClick={togglePopOver}>
                            Products
                        </div>
                        <PopoverArrow showPopover={showPopover} popOverRef={popOverRef}/>
                        <Popover showPopover={showPopover} popOverRef={popOverRef} />
                        <div className="nav-item for-teams nav-link" tabIndex="1">
                            For Teams
                        </div>
                        < SearchBar />
                        <div className="nav-item auth-btns">
                            <div onClick={toggleLogin} className="login-btn custom-btn-light-blue">
                                Login
                            </div>
                            <DropDownLoginForm displayStatus={showLogin} dropDownLoginRef={dropDownLoginRef} />
                            <div className="signup-btn custom-btn-dark-blue">
                                <Link className="links" to="/authenticate" role="button"> Sign up </Link>
                            </div>
                        </div>
                    </div>
                    {/**<! Side navbar on mobile device */}
                    {showSearch_OnMobile ? <div className="smtphone-searchbar"><SearchBar showSearch_OnMobile={showSearch_OnMobile} /></div> : null}
                    <aside className={showSideNav ? "sideNav" : "sideNav hidden"}>
                        <ul>
                            <li>home</li>
                            <li>logout</li>
                        </ul>
                    </aside>
                </nav>
            </header >
        </div>
    )
}

export default Header;
