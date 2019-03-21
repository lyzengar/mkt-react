import React from 'react';
import './Pic.css';


const Pic = (props) => {
    return (
        <div class="pic">
            { props.URL ? <img src={props.URL} alt=""></img> : null }
            {/* <h3>{props.caption}</h3> */}
        </div>
    )
}

export default Pic;