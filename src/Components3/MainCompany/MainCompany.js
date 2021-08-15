import React from 'react';

const MainCompany = () => {
    let user =JSON.parse(localStorage.getItem('user'));
 
    return (
        <div>
           <h1>Hello This independent company Page </h1>
           all rights reserved By nayeem
            
        </div>
    );
};

export default MainCompany;