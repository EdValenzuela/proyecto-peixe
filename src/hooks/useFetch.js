import React, { useState, useEffect } from 'react';
import { getMoviesAPI } from '../helpers/getMoviesAPI';

export const useFetch = (categ) => {

    const [state, setstate] = useState({
        data:[],
        cargando: true //mi bandera que cambia si hay data
    });

    useEffect(() => {
        getMoviesAPI(categ) //peticion asinc
            .then( item => {
                setstate({
                    data : [item],
                    cargando: false
                });
            });
    }, [categ]); //se ejecuta por cada categoria nueva

    return state;
}
