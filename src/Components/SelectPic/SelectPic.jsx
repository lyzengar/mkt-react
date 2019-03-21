import React from 'react';
import './SelectPic.css';

const SelectPic = (props) => {
    let menuItems = props.list ? props.list.map((item, i) => (
        <button key={i} value={item.URL} data-value={item.caption} onClick={(e) => props.selectPic(e)}>{item.menu}</button>
    )): ""
    return (
        <div className="select-pic">
                {menuItems}
        </div>
    )
}

export default SelectPic;