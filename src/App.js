import React, { useState } from 'react'
import * as math from 'mathjs'



import Historypage from './com/historypage'
import Button from './com/Button'
import Button2 from './com/Button2'
import Input from './com/Input'

import './App.css'
import './media.css'


function App() {


    window.addEventListener('keydown', (e) => {
        if (96 <= e.keyCode && e.keyCode <= 111) {
            addToInput(e.key)
        }

    })

    const [input, setinput] = useState('')
    const [lastinput, setlastinput] = useState('')
    const [id, setid] = useState(1)
    const [History, setHistory] = useState('')


    const addToInput = val => {

        let L = input.length
        if (val === '/' && input[L - 1] === '/') { }
        else if (val === '.' && input.includes('.')) { }
        else if (val === '*' && input[L - 1] === '*') { }
        else if (val === '-' && input[L - 1] === '-') { }
        else if (val === '+' && input[L - 1] === '+') { }
        else {
            setinput(input + val)
        }


    }
    const remove = () => {
        let string = input.toString()
        var L = string.length
        setinput(string.substring(0, L - 1))
    }

    const equal = () => {
        setlastinput(input + ' =')
        setinput(math.evaluate(input))
        setid(id + 1)
        setHistory(History + ';' + input + "=" + (math.evaluate(input)))

    }

    return (

        <div className='body'>

            <Historypage data={History} />

            <div className='cal'>

                <div>
                    <Input input={input} lastinput={lastinput} />
                </div>
                <div className='keypad'>
                    <div className='left-side'>
                        <div className='left-inner'>
                            <Button click={() => { document.querySelector('.history').classList.add('history-d') }} class='op' img='./img/clock.png' />
                            <Button2 class='op' />
                            <Button click={remove} class='op' img='./img/delete.png' />
                        </div>
                        <div className='left-inner'>
                            <Button click={addToInput} class='num' content='7' />
                            <Button click={addToInput} class='num' content='8' />
                            <Button click={addToInput} class='num' content='9' />
                        </div>
                        <div className='left-inner'>
                            <Button click={addToInput} class='num' content='4' />
                            <Button click={addToInput} class='num' content='5' />
                            <Button click={addToInput} class='num' content='6' />
                        </div>
                        <div className='left-inner'>
                            <Button click={addToInput} class='num' content='1' />
                            <Button click={addToInput} class='num' content='2' />
                            <Button click={addToInput} class='num' content='3' />
                        </div>
                        <div className='left-inner'>
                            <Button click={() => { setinput(''); setlastinput('') }} class='op' img='./img/restart2.png' />
                            <Button click={addToInput} class='num' content='0' />
                            <Button click={addToInput} class='num' content='.' />
                        </div>

                    </div>

                    <div className='right-side'>
                        <div className='right-inner'>
                            <Button click={addToInput} class='R-op' content='+' />
                            <Button click={addToInput} class='R-op' content='-' />
                            <Button click={addToInput} class='R-op' content='/' />
                            <Button click={addToInput} class='R-op' content='*' />
                            <Button click={equal} class='R-op' content='=' />
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )

}



export default App
