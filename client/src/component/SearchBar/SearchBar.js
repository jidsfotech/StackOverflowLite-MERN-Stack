import React, { useState } from "react";
import "./SearchBar.css";
import { BsSearch } from "react-icons/bs";

const SearchBar = (props) => {
   /** if (props.showSearch_OnMobile) {
        console.log(props.showSearch_OnMobile)
        document.getElementById("searchBar").classList.add("searchBox-onMobile");
        document.getElementById("searchBar").classList.remove("navBar-searchBox");
        console.log(document.getElementById("searchBar"))
    }*/

    return (
        <div>
            <form action="/" method="get" className={props.showSearch_OnMobile ? "searchBox-onMobile":"navBar-searchBox"}>
                <div className="s_icon"><BsSearch /></div>
                <input name="q" type="text" placeholder="search..."></input>
            </form>
        </div>
    );
}

export default SearchBar;