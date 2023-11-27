import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Popover.css"


export const Popover = ({ showPopover, popOverRef }) => {
    const handleProductsClick =  (e)=>{
       document.getElementById('productsTab').focus();
    }
    return (
        <div 
        className={showPopover ? "popover-pane" : "hide-popover"} ref={popOverRef}
        id="productsTypesPopver"
        >
            <div className="popover-arrow" ></div>
            <div className="products-list-popover" onClick={handleProductsClick}>
                <ol>
                    <li>
                        <Link to="/questions">
                            <div className="popover-title"> Stack Overflow </div>
                            <div className="popover-content"> public questions & answers </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <div className="popover-title"> Stack Overflow for Teams </div>
                            <div className="popover-content">
                                Where developers & technologist share private knowledge with cowokers
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <div className="popover-title"> Talent </div>
                            <div className="popover-content"> Build your employer brand</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <div className="popover-title"> Advertising </div>
                            <div className="popover-content">
                                Reach developers & technologist worldwide
                            </div>
                        </Link>
                    </li>
                </ol>
            </div>
            <section>
                <Link to="#">
                    <span>About the company </span>
                </Link>
            </section>
        </div>
    )
}

