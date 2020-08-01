import React, { useState, useMemo } from 'react'
import { MovieInputAdd } from './MovieInputAdd';
import { MovieItem } from './MovieItem';
import { MovieRouter } from '../routers/MovieRouter';
import { Navbar } from '../shared/Navbar';

export const MovieAPP = () => {

    const [categMovie, setCategmovie] = useState(['batman']);
    
    return (
        <>
        <Navbar />
        <div className="container mt-5">
            
            <h1> Buscar Movie / <strong>omdbapi</strong> </h1>
            {
            /* Aqui llamo al input buscador 
            que cambiara el estado del useState 
            y le paso la categoria */
            }
            
            <MovieInputAdd setCategmovie={ setCategmovie }/>

            {
                categMovie.map( categ =>{
                    return <MovieItem 
                                key={categ} 
                                categ={categ}
                            /> 
                })
            } 
        </div>
        </>
    )
}
