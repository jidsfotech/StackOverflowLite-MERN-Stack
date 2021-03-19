import React from "react";
import "./SearchBar.css";
import { BsSearch } from "react-icons/bs";

const SearchBar = (props) => {
    if (props.showSearch_OnMobile) {
        document.getElementById("searchbar").classList.add("searchbar-4smtphone");
        document.getElementById("searchbar").classList.remove("searchbar");
    }

    return (
        <div className={props.showSearch_OnMobile ? "searchbar-4smtphone" : "searchbar"}>
            <form id="searchbar" action="/search" method="get">
                <div className="ps--relative">
                    <div className="s_icon">
                        <BsSearch />
                    </div>
                    <input name="q" type="text" className="s-input" placeholder="Search..." autoComplete="off maxlenght=240"></input>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;