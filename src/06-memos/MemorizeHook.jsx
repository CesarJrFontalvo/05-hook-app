import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small';

const heavyStuuf = (iterationNumber) => {
    for(let i = 0; i< iterationNumber; i++){
        console.log('ahí vamos...')
    }
    return `${iterationNumber} iteraciones realizadas `;
}

export const MemorizeHook = () => {
    const { counter, increment } = useCounter(1000);
    const [show, setShow] = useState(true);

   const memorizedValue = useMemo(() => heavyStuuf(counter), [counter])
    return (
        <>
            <h1>Memorize <small>{counter}</small></h1>
            <hr />

            {memorizedValue}
            <button className='btn btn-primary mt-2'
                onClick={() => increment()}
            >
                + 1
            </button>
            <button className='btn btn-outline-primary' onClick={() => setShow(!show)} >
                Show/Hide {JSON.stringify(show)}
            </button>


        </>
    )
}
