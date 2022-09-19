import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../utils";
import { useSnapshot } from 'valtio';
import { setDarkTheme, setLightTheme } from '../utils';

function Header() {
    const snap = useSnapshot(theme);
    return (
        <div>
            <nav className={"pt-2 pb-1 " + snap.mode }>
                <button type="button" className={"btn btn-" + snap.mode + " border-dark me-4"} ><Link to="/">HOME</Link></button>
                <button type="button" className={"btn btn-" + snap.mode + " border-dark me-4"} onClick={() => setDarkTheme()}>DARK</button>
                <button type="button" className={"btn btn-" + snap.mode + " border-dark me-4"} onClick={() => setLightTheme()}>LIGHT</button>
                <button type="button" className={"btn btn-" + snap.mode + " border-dark me-4"}  ><Link to="cart">CART</Link></button>
            </nav>
        </div>
    );
}

export default Header;
