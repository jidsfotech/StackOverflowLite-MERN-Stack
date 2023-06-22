import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { BsStackOverflow } from "react-icons/bs";
import { LoginForm } from "../Auth/SignupLoginForm";
import SearchBar from "../SearchBar/SearchBar";
import NavBadge from "../NavBadge/NavBadge";
import profilePics from "../../assets/img/majeed.png";
import brabdLogo from "../../assets/img/brand.png";
import { Popover } from "../Popover/Popover";
import { DropDownLoginForm } from "../Auth/SignupLoginForm";
import LeftSideBar from "../SideBar/LeftSideBar";

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const [showMobileDropDownMenu, setShowMobileDropDownMenu] = useState(false);
    const [showPopover, setPopOver] = useState(false)
    const headerRef = useRef(null);
    const dropDownLoginRef = useRef(null);
    const popOverRef = useRef(null);
    const asideMobileMenuRef = useRef(null);
    const mobileSearchRef = useRef(null);
    const navBoxRef = useRef(null);

    const toggleLogin = () => {
        !showLogin ? setShowLogin(true) : setShowLogin(!showLogin);
    }

    const toggleMobileSearchInput = () => {
        setShowMobileSearch(!showMobileSearch);
    }

    const toggleMobileDropDownMenu = () => {
        setShowMobileDropDownMenu(!showMobileDropDownMenu)
    }

    const togglePopOver = (e) => {
        const ele = document.getElementById('productsTab');
        adjustProductsTabPopoverPosition(ele);
        if (!showPopover) {
            setPopOver(true);
            ele.classList.add('popover-isactive');
        }
        // !showPopover ? setPopOver(true) : setPopOver(false);
    }

    const handleClickOutside = (e) => {
        if (dropDownLoginRef.current && !dropDownLoginRef.current.contains(e.target)) {
            setShowLogin(false);
        }
        if (popOverRef.current && !popOverRef.current.contains(e.target)) {
            setPopOver(false);
            const ele = document.getElementById('productsTab');
            ele.classList.remove('popover-isactive');
        }

        if (mobileSearchRef.current && !mobileSearchRef.current.contains(e.target)) {
            setShowMobileSearch(false);
        }
    }

    // get an element coordinate
    const getOffset = (el) => {
        const rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY
        };
    }

    // adjust the position of the products menu popver dropdown
    const adjustProductsTabPopoverPosition = (ele) => {
        const { left, top } = getOffset(ele);
        document.getElementById('productsTypesPopver').style.left = `${left - 70}px`;

    }
    
    useEffect(() => {
        window.addEventListener('resize', (e) => {
            const ele = document.getElementById('productsTab');
            const { left, top } = getOffset(ele);
            document.getElementById('productsTypesPopver').style.left = `${left - 66}px`;
            if (window.innerWidth > 530) {
                setShowMobileDropDownMenu(false)
            }
        });
        document.addEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="header-wrapper" ref={headerRef}>
            <div className="notify"></div>
            <nav className="nav">
                <div className="nav-box" ref={navBoxRef}>
                    {/* Mobile top nav icons */}
                    {showMobileDropDownMenu ?
                        <div className="nav-icon-mobile xIcon" onClick={toggleMobileDropDownMenu}><HiX /></div> :
                        <div className="nav-icon-mobile" onClick={toggleMobileDropDownMenu}> <FaBars /></div>
                    }
                    <aside className={showMobileDropDownMenu ? "showMobileDropDownMenu" : "hide-mobileDropDownMenu"}>
                        < LeftSideBar showMobileDropDownMenu={showMobileDropDownMenu} />
                    </aside>
                    <div className="nav-icon-mobile" >
                        <Link to="/" style={{ textDecoration: "none" }}><BsStackOverflow className="mobilleLogoIcon" /></Link>
                    </div>
                    <div className="nav-item brand-logo-wrapper">
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <img src={brabdLogo} alt="brand-logo"></img>
                        </Link>
                    </div>
                    <div className="nav-item aboout nav-link">
                        Aboout
                    </div>
                    <div
                        className="nav-item nav-link"
                        id="productsTab"
                        tabIndex="1"
                        onClick={togglePopOver}>
                        Products
                    </div>
                    <Popover showPopover={showPopover} popOverRef={popOverRef} />
                    {/* Mobile search Icon  */}
                    <div className="nav-icon-mobile mobile-search-icon-wrapper" onClick={toggleMobileSearchInput}>
                        <BsSearch />
                    </div>
                    {/* Mobile search icon end */}
                    <div className="nav-item for-teams nav-link">
                        For Teams
                    </div>
                    <div className="searchWBarWrapper">
                        < SearchBar />
                    </div>
                    <div className="nav-item auth-btns">
                        <div onClick={toggleLogin} className="login-btn custom-btn-light-blue">
                            Login
                        </div>
                        <DropDownLoginForm displayStatus={showLogin} dropDownLoginRef={dropDownLoginRef} />
                        <div className="signup-btn custom-btn-dark-blue">
                            <Link style={{ textDecoration: "none", color: 'white' }} to="/authenticate" role=""> Sign up </Link>
                        </div>
                    </div>
                    {/* <NavBadge /> */}
                </div>
            </nav >
            {/* mobile search */}
            < div className={showMobileSearch ? "mobileSearchWrapper" : "hide-mobileSearchWrapper"} >
                < SearchBar mobileSearchRef={mobileSearchRef} />
            </div >
        </div >
    )
}

export default Header;
