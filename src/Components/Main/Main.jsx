import React from 'react';
import './Main.css';
import Pic from '../Pic/Pic'
import SelectPic from '../SelectPic/SelectPic'

const Main = (props) => {
    return (
        <div class="main">           
            <SelectPic
                selectPic={props.selectPic}
                list={props.list}
            />
            <Pic
                URL={props.URL}
                caption={props.caption}
            />
        </div>
    )
}

export default Main;