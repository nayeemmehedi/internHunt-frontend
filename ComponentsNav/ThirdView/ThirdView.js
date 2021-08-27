import React from 'react';
import {Link} from 'react-router-dom'

const ThirdView = () => {
    return (
        <div className='container'>
            <div class="row">
                <div class="col-sm-5 text-center m-3 p-3">
                    <h2>
                        Learn Something..
                    </h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique unde minima reprehenderit itaque voluptas porro! <br />
                        <button className='btn btn-secondary'>click</button>
                    </p>


                </div>
                <div class="col-sm-5 text-center m-3 p-3">
                    <h2>
                        get job 
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia fugit deleniti eligendi ullam esse nemo veniam corporis labore  <br />

                        <Link to="./home"> <button className='btn btn-dark'>Intern</button> </Link>
                       
                    </p>


                </div>
            </div>

        </div>
    );
};

export default ThirdView;