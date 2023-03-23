import React from 'react'
import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-example';
// import { Quote } from './Quote';

const Layout = () => {
    const { counter, increment } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`)

    // console.log({ data, hasError, isLoading })
    const { name, species } = !!data && data;
    return (
        <div className='container'>
            <h1>rick and morty api </h1>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote author={name} quote={species} />
            }
            <button
                className="btn btn-primary"
                disabled={isLoading}
                onClick={() => increment()}>
                Next character
            </button>

        </div>
    )
}

export default Layout