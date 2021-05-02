import React from 'react'
import './Input.css'


function Input(props) {
    return (
        <div className='input'>
            <div className='lastinput'><p>{props.lastinput}</p></div>
            <div className='input-val'><p>{props.input}</p></div>
        </div>
    )
}
export default Input