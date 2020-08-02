import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, HashRouter  } from 'react-router-dom';

import { MovieDetalle } from '../components/MovieDetalle';
import { MovieAPP } from '../components/MovieAPP';
import { MovieFavorite } from '../components/MovieFavorite';

export const MovieRouter = () => {

    return (
        <HashRouter basename="/" >
            <div>
                <Switch>
                    <Route exact path="/" component={ MovieAPP } />
                    <Route path="/favorite" component={ MovieFavorite } />
                    <Route path="/detalle/:categoria" component={ MovieDetalle } />
                </Switch>
            </div>
        </HashRouter>
    );
};