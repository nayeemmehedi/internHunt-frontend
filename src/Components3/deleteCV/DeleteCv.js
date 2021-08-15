import React,{useState, useEffect} from 'react';
import { useParams,useHistory } from 'react-router';


const DeleteCv = () => {
    const history = useHistory()

    const [student1, setStudent1] = useState([]);

    
    useEffect(() => {
    

    fetch(`http://localhost:4500/companyForm/nazifarecruitmentbd@gmail.com`)
    .then((response) =>response.json())
    .then(data => setStudent1(data));

  }, []);

  const handledelete = (id) => {
    fetch(`http://localhost:4500/deleteFormCompany/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Your Registration has been deleted");
        history.replace("/company");
      });
  };





    return (
        <div>

           {
             student1.map(value => 

             <div>
              <h1>name : {value.firstName}</h1>
              <h4>git-link : {value.github}</h4>

              <button onClick={() => handledelete(value._id)}>Click me</button>
             
             
             </div>

              
               



             )
           }
        
             
            
        </div>
    );
};

export default DeleteCv;