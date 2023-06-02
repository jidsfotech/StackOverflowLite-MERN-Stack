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

    const togglePopOver = () => {
        !showPopover ? setPopOver(true) : setPopOver(false);
    }

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
