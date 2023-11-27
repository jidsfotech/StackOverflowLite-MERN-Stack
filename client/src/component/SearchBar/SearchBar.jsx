import React from "react";
import "./SearchBar.css";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ mobileSearchRef }) => {
    return (
        <div className="searchbar" ref={mobileSearchRef}>
            <form className="s_form" action="/search" method="get">
                <div className="s_icon">
                    <BsSearch />
                </div>
                <div>
                    <input
                        name="q"
                        type="text"
                        className="srch-input"
                        placeholder="Search..."
                        autoComplete="off maxlenght=240"
                        tabIndex="1"
                    >
                    </input>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;