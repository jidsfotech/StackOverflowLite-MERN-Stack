import React, { useState } from "react";
import profilePics from "../../assets/img/majeed.png";
import "./NavBadge.css"

const NavBadge = () => {
    return (
        <div class="nav-item menu-box">
            <div class="badge">
                <a href="#"> <img src={profilePics} alt=""></img> </a>
                <a href="#">
                    <div class="repute"> 8 </div>
                </a>
                <a href="#" class="silver"><i class="fa-solid fa-circle"></i> 10</a>
                <a href="" class="bronze"><i class="fa-solid fa-circle"></i> 23</a>
            </div>
            <div class="menu-icon">
                <a href="#"><i class="fa-solid fa-inbox"></i></a>
            </div>
            <div class="menu-icon">
                <a href="#"><i class="fa-solid fa-trophy"></i></a>
            </div>
            <div class="menu-icon">
                <a href="#"><i class="fa-solid fa-circle-question"></i></a>
            </div>
            <div class="menu-icon">
                <a href=""><i class="fa-solid fa-bars-staggered"></i></a>
            </div>
        </div>
    )
}

export default NavBadge;