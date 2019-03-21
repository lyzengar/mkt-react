import React from 'react';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div className="nav-bar">
            <h3 onClick={props.handleTaiko}>Taiko</h3>
            <h3>Stands</h3>
            <h3>Percussion</h3>
        </div>
    )
}

export default NavBar;