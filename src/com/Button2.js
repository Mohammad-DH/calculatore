import React, { useState } from 'react'
import './Button.css'



function Button2(props) {
    const [state, setstate] = useState('./img/sun.png')

    function change() {
        if (state === 'undefined') {
            setstate('./img/sun.png')
        }
        if (state === './img/night.png') {
            setstate('./img/sun.png')
            document.querySelector('html').classList.remove('Night')
            document.querySelector('.input').classList.remove('input-Night')

            document.querySelectorAll('.num').forEach(e => {
                e.classList.remove('num-Night')
            });

        } else {
            setstate('./img/night.png')
            document.querySelector('html').classList.add('Night')
            document.querySelector('.input').classList.add('input-Night')

            document.querySelectorAll('.num').forEach(e => {
                e.classList.add('num-Night')
            });

        }
    }

    return (
        <div onClick={() => change()} className={props.class}>
            <p>{props.content}</p>
            <img id='mode' className={props.class === 'num' || props.class === 'R-op' ? 'display' : 'image'} src={state} alt='some fucking *mage'></img>
        </div>
    )
}
export default Button2