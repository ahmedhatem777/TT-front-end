import React from 'react';

const UserContext = React.createContext({
    loggedIn: null,
    setLoggedIn: () => {},
})

export default UserContext;