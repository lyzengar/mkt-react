import React from 'react';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div className="nav-bar">
            <div className="nav-head">
                <h2>Makoto Taiko Equipment</h2>
                <h2>真鼓音</h2>
            </div>
            <div class="nav-sections">
                <h3 onClick={props.handleTaiko}>Taiko</h3>
                <h3 onClick={props.handleStands}>Stands</h3>
                <h3 onClick={props.handlePercussion}>Misc.</h3>
            </div>
        </div>
    )
}

export default NavBar;