import React,{ useState, useEffect} from 'react';

import BoomHome from './BoomHome/BoomHome'

const NewHome = () => {

    const [alldata, setalldata] = useState([])
    useEffect(() => {

        fetch("http://localhost:4500/event")
        .then(res=>res.json())
        .then(data =>setalldata(data))        


    }, [])
    
    
    return (
        <div>
        
       

        {
            alldata.map(value=>
               

                 <BoomHome valuename={value}></BoomHome>
                


        )
        }



        

        </div>
       
    );
};

export default NewHome;