import React from 'react'

function historypage(props) {


    var data = props.data
    data = data.split(";");

    const copytext = (input) => {
        window.navigator.clipboard.writeText(input.e);
        document.querySelector('.alert').classList.add('alert-animation')
        setTimeout(() => {
            document.querySelector('.alert').classList.remove('alert-animation')
        }, 4000);
    }




    return (
        <div className='history'>

            <span className='alert'>
                Done
            </span>

            <div onClick={() => { document.querySelector('.history').classList.remove('history-d') }} className='close'>
                Back
            </div>


            <div className='history-inner'>
                {data.map((e) => (
                    <>
                        <div className='history-context'>
                            <p className={e === "" ? 'display' : 'history-text'}>{e}</p>
                            <span onClick={() => copytext({ e })} className={e === "" ? 'display' : 'copy'}>copy</span>
                        </div>

                    </>
                ))}
            </div>
        </div >
    )
}
export default historypage