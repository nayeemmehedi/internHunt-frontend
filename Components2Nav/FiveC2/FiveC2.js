import React, {useEffect,useState } from 'react';
import Carousel from 'react-elastic-carousel';


const  items= [
      {id: 1,name:'Nayeem',position:'teacher', title: ' lorem20 name found me that is awesome man ok this is really bad talk for use lorem20 name found me that is awesome man ok this is really bad talk for use lorem20 name found me '},
      {id: 2,name:'Borsha',position:'student',  title: 'lorem20 name found me that is awesome man ok this is really bad talk for use'},
      {id: 3,name:'Sazid',position:'Nub student',  title: 'lorem20 name found me that is awesome man ok this is really bad talk for use'},
      {id: 4,name:'Mahiha',position:'market manager',  title: 'lorem20 name found me that is awesome man ok this is really bad talk for use'},
      {id: 5,name:'Coiti',position:'',  title: 'lorem20 name found me that is awesome man ok this is really bad talk for use'}
    ]

    
  
 

//  #63056328
//#6f22b83a

const FiveC2 = () => {

    const [review,setreview] = useState([])


     useEffect(() => {
    fetch(`http://localhost:4500/reviewItem`)
      .then((response) => response.json())
      .then((data) => setreview(data));
  }, []);

  console.log(review)
   
    return (
        <div>
        <i style={{fontSize:'30px'}} className='ps-5 text-bold italic'>Valuable Comments in Our Valuable person - </i>
            {
                  <Carousel >
                  {review.map(item => <div className=' mt-5 pt-5' style ={{height:'200px',width:'600px',backgroundColor:"#63056328", borderRadius:"10px 10px"}} key={item.id}>
                      
                     
                      
                     <div className='ps-4 pe-5'>
                     <i>  {item.textmessage}</i>

                     <div className='text-end'>

                        <h5>{item.firstName}</h5>
                       <i>{item.profession}</i>
                     
                     
                     
                     </div>
                     
                     </div>
                      
                      
                      
                      
                      
                      </div>)}
                </Carousel>
            }
            
        </div>
    );
};

export default FiveC2;