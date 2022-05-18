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
                            className="dropdown-toggle">Topic</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <Link to="/list/topic">Page 1</Link>
                            </li>
                            <li>
                                <Link to="/create/topic">Page 2</Link>
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
