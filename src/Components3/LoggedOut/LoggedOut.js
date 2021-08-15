import React from 'react';
import {Link,useHistory} from 'react-router-dom'

const LoggedOut = () => {

    const history =useHistory()



    const logout = () => {
    localStorage.clear();
    history.push('/')
    window.location.reload();

  }
    return (
        <div>
        <button onClick={logout}>LOgged Out</button>
            
        </div>
    );
};

export default LoggedOut;