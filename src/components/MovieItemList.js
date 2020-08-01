import React from 'react';
import { Link } from 'react-router-dom';

export const MovieItemList = (props) => {

    //const { Title, Year, Rated, Released, Runtime, Actors, Awards, Director, Genre, Languague, Production, Poster } = props.detalle;
    const detalleMovie = props.detalle;
    console.log(detalleMovie);

    return (
        <div className="card mt-5 animate__animated animate__fadeIn" style={{'width': '20rem'}}>
            <img src={detalleMovie.Poster} className="card-img-top img-fluid img-thumbnail" alt={detalleMovie.Title}/>
            <div className="card-body">
                <h5 className="card-title text-uppercase">{ detalleMovie.Title }</h5>
                <p className="card-text text-muted">{ detalleMovie.Year }</p>
                <Link to={{ 
                            pathname: `./detalle/${detalleMovie.Title}`,
                            masDetalles: detalleMovie
                        }} 
                    className="btn btn-success"
                >
                    Ver más
                </Link>
            </div>
        </div>
    )
}
