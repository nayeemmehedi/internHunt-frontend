import React,{useState, useEffect} from 'react';

const Main = () => {

    const [job, setJob] = useState([]);
    const [student, setStudent] = useState([]);


  

  useEffect(() => {
    

    fetch(`http://localhost:4500/event`)
    .then((response) =>response.json())
    .then(data => setJob(data));

  }, []);

  useEffect(() => {
    

    fetch(`http://localhost:4500/form`)
    .then((response) =>response.json())
    .then(data => setStudent(data));

  }, []);



  


  


    return (
        <div>
           <h1>This is Admin Page..</h1>
           <br /> <br />

            <div>

                 <div className="row">
                     <div className="col-7">

                       <h3 className="text-center">Our Total Job now - {job.length}</h3>

                       {

                           job.map(value => 

                              <div style={{height:'150px'}}>

                               <h4>Company Name : {value.companyname}</h4>

                                <ol>
                                <li>Email : {value.email} </li>
                                <li>Location : {value.city}</li>
                                <li>Vacancy : {value.vacancies}</li>
                                
                                
                                </ol>

                                  
                              
                              
                              
                              </div>
                           
                           
                           
                           )



                       }
                     
                     
                     </div>
                     <div className="col-4">

                     <h3 className="text-center">Total Applications for Job - {student.length}</h3>


                     {

                           student.map(valuename => 

                              <div style={{height:'150px'}}>

                               <h4>Name : {valuename.firstName}</h4>

                                <ol>

                                <li>Email : {valuename.email} </li>
                                 <li>Phone : {valuename.MobileNumber} </li>
                                  <li>Apply comapany : {valuename.companyname} </li>
                                  <li>Apply comapany mail : {valuename.companymail} </li>
                                  <li>ID : {valuename._id}</li>

                                
                                
                                
                                </ol>

                                  
                              
                              
                              
                              </div>
                           
                           
                           
                           )



                       }
                     
                     
                     
                     
                     </div>
                 </div>
            
            
            </div>
       
        </div>
    );
};

export default Main;