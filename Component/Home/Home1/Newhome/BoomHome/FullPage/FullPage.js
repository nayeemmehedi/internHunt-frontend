import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import {Link} from "react-router-dom";
import Addme from "./Addme/Addme"
import backman from "./img/backman.jpg"
import blackmoon from "./img/blackmoon.jpg"

import handshake from "./img/handshake.jpg"


 function FullPage () {
  const { id } = useParams();
 
  const [newvalue1, setvalue] = useState({});

  

  useEffect(() => { 
    

      fetch(`http://localhost:4500/event/${id}`)
    .then((response) =>response.json())
    .then(data => setvalue(data));




  }, []);





  const {
    _id,
    skill,
   
    companyname,
    your_role,
    company_description,
    city,
    job_tital,
    money,
    office_time,
    vacancies,
    datetime,
    you_have

  } = newvalue1;


  return (
    <div>



  
     

     <div>
     <Addme newvalue={newvalue1}></Addme> 
     </div>

  
  
  
  
  </div>
  )
};

export default FullPage;
