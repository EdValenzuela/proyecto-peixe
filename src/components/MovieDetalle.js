import React, { useState } from 'react';
import { Navbar } from '../shared/Navbar';
import { useParams, useLocation, useHistory } from 'react-router-dom';


export const MovieDetalle = (props, {history}) => {
    const data = props.location.masDetalles;
    
    const regresar = useHistory();
   
    const handleReturn = () => {
        //Si no hay información me devuelvo al home
        if(regresar.length <= 2){
            regresar.push('/');
        }else{
            regresar.goBack();
        }
    }
    return (
        <>
            <Navbar/>
            <div className="container mt-5">

                {
                    (!data) && <div className="alert alert-danger mt-2">
                        Hubo un error en los datos
                    </div>
                }

                {
                    (data) &&
                    <>
                    <h1>Movie Detalle "{ data.Title }"</h1>

                    <div className="card mt-5 animate__animated animate__fadeIn">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={ data.Poster } className="card-img" alt={ data.Title }/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{ data.Title }</h5>
                                    <p className="card-text">Actores : { data.Actors }</p>
                                    <p className="card-text">Premios : { data.Awards }</p>
                                    <p className="card-text">Director : { data.Director }</p>
                                    <p className="card-text">Producción : { data.Production }</p>
                                    <p className="card-text">Clasificación : { data.Rated }</p>
                                    <p className="card-text"><small className="text-muted">Año : { data.Year }</small></p>
                                    <button onClick={ handleReturn } className="btn btn-outline-success">
                                        Volver
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    </>
                }
            </div>
            
        </>
    )
}
