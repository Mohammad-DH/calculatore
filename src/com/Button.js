import React from 'react'
import './Button.css'


function Button(props) {
    return (
        <div onClick={() => { props.click(`${props.content}`) }} className={props.class}>
            <p>{props.content}</p>
            <img className={props.class === 'num' || props.class === 'R-op' ? 'display' : 'image'} src={props.img} alt='some fucking *mage'></img>
        </div>
    )
}
export default Button