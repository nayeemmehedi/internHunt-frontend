import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faBug } from '@fortawesome/free-solid-svg-icons'
import { faAmbulance } from '@fortawesome/free-solid-svg-icons'



const Forthc2 = () => {
    return (
        <div className='p-5'>
            <h1 className="text-center pb-5">Working Steps</h1>
            <div className="row" >
                <div className="col-4">
                    <div class='d-flex justify-content-center'>
                        <div style={{ height: '70px', width: '70px',borderRadius:'10px ',boxShadow:'0 0 5px 4px #c7c6c5' }}>

                       <FontAwesomeIcon className='pt-2' icon={faCoffee} size="3x"  color="#632940" ></FontAwesomeIcon>


                        </div>
                    </div>
                    <br />
                    <div className='text-center'>
                        <h5>Learn <span style={{color:'red'}}>and Learn</span></h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, in!</p>

                    </div>

                </div>
                <div className="col-4">

                    <div class='d-flex justify-content-center'>
                        <div style={{ height: '70px', width: '70px',borderRadius:'10px ',boxShadow:'0 0 5px 4px #c7c6c5' }}>

                        <FontAwesomeIcon className='pt-2' icon={faBug} size="3x"  color="#5259ab"></FontAwesomeIcon>


                        </div>
                    </div>
                    <br />
                    <div className='text-center'>
                        <h5>Apply<span style={{color:'#4750a1'}}> For Job</span> </h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, in!</p>

                    </div>


                </div>
                <div className="col-4">
                    <div class='d-flex justify-content-center'>
                        <div style={{ height: '70px', width: '70px',borderRadius:'10px ',boxShadow:'0 0 5px 4px #c7c6c5'}}>

                       
                        <FontAwesomeIcon className='pt-2' icon={faAmbulance} size="3x"  color="#73452a"></FontAwesomeIcon>
                       


                        </div>
                        
                    </div>
                    <br /> 
                    <div className='text-center'>
                        <h5>Get <span style={{color:'red'}}> Job</span></h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, in!</p>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default Forthc2;