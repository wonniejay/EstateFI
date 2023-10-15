import "./Navbar.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Navbar()  {
    return (
        <>
        <div className="top">
            <div ClassName="topLeft"></div>
            <div ClassName="topCenter"></div>
            <div ClassName="topRight"></div>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link to="/">HOME</Link>
                </li>
                <li className="topListItem">
                    <Link to="/about">ABOUT</Link>
                </li>
                <li className="topListItem">
                    <Link to="/profile">PROFILE</Link>
                </li>
                <li className="topListItem">
                    <Link to="/writing">WRITING</Link>
                </li>
                <li className="topListItem">
                    <Link to="/portfolio">PORTFOLIO</Link>
                </li>

            </ul>
        </div>
        <div className="topRight">
        </div>
        </>
    )
}