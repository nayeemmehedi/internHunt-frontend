import React,{useState, useEffect} from 'react';


const Showcv = () => {
    const [student1, setStudent1] = useState([]);

    
    useEffect(() => {
    

    fetch(`http://localhost:4500/companyForm/nazifarecruitmentbd@gmail.com`)
    .then((response) =>response.json())
    .then(data => setStudent1(data));

  }, []);
  


    return (
        <div>

           {
             student1.map(value => 

             <div>
              <h1>name : {value.firstName}</h1>
              <h4>git-link : {value.github}</h4>
             
             
             </div>

              
               



             )
           }
        
             
            
        </div>
    );
};

export default Showcv;