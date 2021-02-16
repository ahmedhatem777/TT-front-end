import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute({ loggedIn, ...rest }) {
    return (
        !!loggedIn ?
            <Route {...rest} />
        : 
            <Redirect to="/" />                 
    )
}

export default AuthRoute;