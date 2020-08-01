import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useFormInput } from '../hooks/useFormInput';

export const MovieInputAdd = ({setCategmovie}) => {

    const [values, handleInputChange, reset] = useFormInput('');
    const { nuevoValor = '' } = values;

    useEffect(() => {
        console.log("cambio el nuevo valor");
    }, [nuevoValor]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(nuevoValor.trim().length > 1){
            setCategmovie( catg =>[
                
                nuevoValor, //mi valor nuevo
                ...catg, //aqui el por defecto batman, copio la cat
            ]);
            reset();
        }
        //console.log(nuevoValor);
        //console.log("submit realizado");
    }

    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor="movie">Movie :</label>
            <input 
                className="form-control form-control-lg" 
                type="text" 
                placeholder="Escribe una movie o serie"
                id="movie"
                autoComplete="off"
                name="nuevoValor"
                value={nuevoValor}
                onChange={ handleInputChange }
            />
            <button
                type="submit"
                className="btn mt-3 btn-block btn-outline-success"
                >
                Buscar
            </button>

            {
                (nuevoValor.length == 1) && <div className="alert alert-danger mt-2">
                    Ingrese alguna palabra mayor a un caracter!
                </div>
            }
            {
                (nuevoValor === '') && <div className="alert alert-info mt-2">
                    Peliculas a buscar
                </div>
            }
        </form>
    )
}


//Lo declaro como requerido para que siempre tenga una categoria por defecto
MovieInputAdd.propTypes = {
    setCategmovie : PropTypes.func.isRequired
}
