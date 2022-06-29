import React from 'react';
import { Link,Routes,Route } from 'react-router-dom';

const Logonav = () => {
    return(
        <div>
            <nav>
                <Link to="/">Chico's</Link>
                <Link to="/whbm">WHBM</Link>
                <Link to="/soma">SOMA</Link>
                <Link to="/offthecrack">
                    Chico's
                    <small>OFF THE RACK</small>
                </Link>
                <Link to="/account">Account</Link>
            </nav>
        </div>
    )
}
export default Logonav