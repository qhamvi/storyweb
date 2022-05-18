import React from "react";
import { Link } from "react-router-dom";

export default function SidebarAdmin() {
    return (
        <nav id="sidebar" className="border">
            <div className="p-4 pt-5">
                <h1><a href="/ple" className="logo">WebStory</a></h1>
                <ul className="list-unstyled components mb-5">
                    <li>
                        <Link to="/list/story">Danh sách truyện</Link>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
                            className="dropdown-toggle">Pages</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <a href="#">Page 1</a>
                            </li>
                            <li>
                                <a href="#">Page 2</a>
                            </li>
                            <li>
                                <a href="#">Page 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}