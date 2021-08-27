import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web';
import './boom.css';

const SecendViewC2 = () => {
    const container = useRef(null)

    useEffect(() => {

        lottie.loadAnimation({
            container: container.current, // Required

            renderer: 'svg', // Required
            loop: true, // Optional
            autoplay: true, // Optional
            animationData: require('./social.json'), // Name for future reference. Optional.
        })


    }, []);
    return (
        <div>
            <div className="row">


                <div className="col-lg-6 col-md-12 col-sm-12  secendview"> 

                    <h1 className="againsecend">jjjjWHY IS IT</h1> <br />
                    <p className="againsecend">
                       nayeem   Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptate vitae doloribus tempore recusandae ea alias optio beatae commodi, cupiditate necessitatibus, sequi magni blanditiis quibusdam officiis facilis harum odio maiores tempora! Provident soluta odit optio placeat architecto, tempore ratione tempora aperiam debitis doloremque vero eum. Nulla cupiditate commodi non facere!
                    </p>


                </div>



                <div className="col-lg-5 col-md-12 col-sm-12 pe-lg-5">

                    <br /> <br />

                    <div style={{ height: "500px" }} className="container secendviewimg" ref={container}></div>



                </div>





            </div>

        </div>


    );
};

export default SecendViewC2;








