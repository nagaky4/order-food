import React from 'react'
import * as classes from './Backdrop.module.css';


const Backdrop = (props) => {


    return (
        <div className={props.show ? classes.BackDrop : ''} onClick={props.closeModal} >
        </div>
    )
}



export default Backdrop

