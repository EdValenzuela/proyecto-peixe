import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { MovieDetalle } from '../components/MovieDetalle';
import { MovieAPP } from '../components/MovieAPP';
import { MovieFavorite } from '../components/MovieFavorite';

export const MovieRouter = () => {

    return (
        <BrowserRouter >
            <div>
                <Switch>
                    <Route exact path="/" component={ MovieAPP } />
                    <Route exact path="/favorite" component={ MovieFavorite } />
                    <Route exact path="/detalle/:categoria" component={ MovieDetalle } />
                    <Redirect to='/' />
                </Switch>
            </div>
        </BrowserRouter>
    );
};