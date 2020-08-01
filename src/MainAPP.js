import React from 'react'
import { MovieRouter } from './routers/MovieRouter';
import { MovieAPP } from './components/MovieAPP';


export const MainAPP = () => {
    return (
        <>
            <MovieRouter>
                <MovieAPP />
            </MovieRouter> 
        </>
    )
}
