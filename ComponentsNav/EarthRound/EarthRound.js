import React from 'react';
import sample from './earth.mp4'
import './newVideo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"

const EarthRound = () => {
    return (
        <div>

            <div>

                <div className="heroContainer">

                    <div className="heroBg">

                        <video className="vdo" autoPlay muted loop >
                            <source src={sample} type="video/mp4" />
                        </video>


                    </div>

                    <div className="heroContent">

                        <h2 style={{ color: "white", textAlign: "center" }}> Lorem ipsum dolor sit met. ..</h2>
                        <h4 style={{ color: "white", textAlign: "center" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquam impedit consequuntur natus minima consectetur!</h4>
                    <Link to="/home">    <button className="btn btn-lg" style={{ backgroundColor: 'rgb(73, 180, 194)' }}>Intern Page <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></Link>


                    </div>

                </div>


            </div>


        </div>
    );
};

export default EarthRound;