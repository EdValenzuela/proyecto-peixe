import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { MovieItemList } from './MovieItemList';

export const MovieItem = ({categ}) => {

    const {data:misDatos, cargando} = useFetch(categ);
    //console.log(misDatos);

    return (
        <>
        <h3 className="mt-5 text-uppercase"> {categ} </h3>

        {
        cargando &&
            <button className="btn btn-danger animate__animated animate__flash" type="button" disabled>
                <span className="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
                cargando...
            </button> 
        }

        {
            misDatos.map( (item) =>{
                return <MovieItemList key={item.Title} detalle={item}/> 
            })
        }
           
        
        </>
    )
}
