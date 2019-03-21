import React from 'react';
import './Main.css';
import NavBar from '../NavBar/NavBar'
import Pic from '../Pic/Pic'
import SelectPic from '../SelectPic/SelectPic'

const Main = (props) => {
    return (
        <div>
            <NavBar
                handleTaiko={props.handleTaiko}
                handleStands={props.handleStands}
                handlePercussion={props.handlePercussion}
            />
            <SelectPic
                selectPic={props.selectPic}
                list={props.list}
            />
            <Pic/>
        </div>
    )
}

export default Main;