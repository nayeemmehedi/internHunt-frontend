import React from 'react';
import {Link} from "react-router-dom"

const FirstPage = () => {
    return (
        <div>
        this is first page 
        <Link to="/home"> <button>Go TO First Page</button></Link>
            
        </div>
    );
};

export default FirstPage;