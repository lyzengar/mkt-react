import React from 'react';
import './SelectPic.css';

const SelectPic = (props) => {
    let menuItems = props.list ? props.list.map((item, i) => (
        <li key={i} value={item.URL}>{item.menu}</li>
    )): ""
    return (
        <div className="select-pic">
            <ul>
                {menuItems}
            </ul>
        </div>
    )
}

export default SelectPic;