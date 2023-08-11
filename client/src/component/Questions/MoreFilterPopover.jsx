import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./MoreFilterPopover.css"


export const MoreFilterPopover = ({ showMoreFilterPopover, MoreFilterPopoverRef }) => {
    return (
        <div
            className={showMoreFilterPopover ? "more-filters" : "hide-more-filters"} ref={MoreFilterPopoverRef}
            id="moreFiltersPopver"
        >
            <div className="more-filters-popver-arrow" ></div>
            <div className="more-filters-popover">
                <ol>
                    <li>
                        <Link to="/#">
                            <div className="filter-by-frequents"> Frequents</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/#">
                            <div className="filter-by-score"> Score</div>
                        </Link>
                    </li>
                </ol>
            </div>
            <section>
                <Link to="#">
                    <span>Unanswered ( my tags )</span>
                </Link>
            </section>
        </div>
    )
}

