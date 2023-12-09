import React from 'react'
import { useState } from 'react'
import DIsplay from './DIsplay'
const Key = () => {

    const [expression, setExpression] = useState("")

    function handelClick(e) {

        setExpression(prevExpression => prevExpression + e.target.value)
    }
    function handelClickAc() {
        setExpression('')
    }
    function handelClickDel() {
        setExpression(prevExpression => prevExpression.slice(0, -1))
    }
    function handelClickeval() {
        const result = eval(expression)
        console.log(result);
        setExpression(String(result))
    }
    return (
        <>
            <div className='body'>
                <DIsplay name={expression} />
                <div className='top'>
                    <button onClick={(e) => handelClickAc(e)} value={"AC"} className='point a'>AC</button>
                    <button onClick={(e) => handelClickDel(e)} value={"DEL"} className='point a'>DEL</button>
                    <button onClick={(e) => handelClick(e)} value={"+"} className='point b'>+</button>
                </div>
                <div className='aKey'>
                    <button onClick={(e) => handelClick(e)} value={2} className='point'>2</button>
                    <button onClick={(e) => handelClick(e)} value={1} className='point'>1</button>
                    <button onClick={(e) => handelClick(e)} value={3} className='point'>3</button>
                    <button onClick={(e) => handelClick(e)} value={"-"} className='point'>-</button>
                    <button onClick={(e) => handelClick(e)} value={4} className='point'>4</button>
                    <button onClick={(e) => handelClick(e)} value={5} className='point'>5</button>
                    <button onClick={(e) => handelClick(e)} value={6} className='point'>6</button>
                    <button onClick={(e) => handelClick(e)} value={"*"} className='point'>*</button>
                    <button onClick={(e) => handelClick(e)} value={7} className='point'>7</button>
                    <button onClick={(e) => handelClick(e)} value={8} className='point'>8</button>
                    <button onClick={(e) => handelClick(e)} value={9} className='point'>9</button>
                    <button onClick={(e) => handelClick(e)} value={"/"} className='point'>/</button>
                </div>
                <div className='bot'>
                    <button onClick={(e) => handelClick(e)} value={"."} className='point c'>.</button>
                    <button onClick={(e) => handelClick(e)} value={0} className='point c'>0</button>
                    <button onClick={(e) => handelClickeval(e)} value={"="} className='point d'>=</button>
                </div>
            </div>
        </>
    )
}

export default Key
