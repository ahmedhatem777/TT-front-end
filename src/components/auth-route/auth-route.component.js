import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../userContext';


// Authorized route that redirects to the homepage if user is not logged in
const AuthRoute = props => {
    const user = useContext(UserContext);

    return (
        !!user.loggedIn ?
            <Route {...props} />
        : 
            <Redirect to="/" />                 
    )
    
}

export default AuthRoute;