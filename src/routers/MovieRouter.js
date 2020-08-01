import React from 'react';
import { BrowserRouter as Router,
        Switch,
        Route,
        Redirect } 
from 'react-router-dom';

import { MovieDetalle } from '../components/MovieDetalle';
import { MovieAPP } from '../components/MovieAPP';
import { MovieFavorite } from '../components/MovieFavorite';

export const MovieRouter = () => {
    return (
        <Router>
            <div>
                <Switch basename='/miApp'>
                    <Route exact path="/" component={ MovieAPP } />
                    <Route exact path="/favorite" component={ MovieFavorite } />
                    <Route exact path="/detalle/:categoria" component={ MovieDetalle } />
                    <Redirect to='/' />
                </Switch>
            </div>
        </Router>
    )
}