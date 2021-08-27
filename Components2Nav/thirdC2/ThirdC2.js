import React from "react";
import imgA from "../../imgIllustrationNav/interview.jpg";
import "./Thirdc2.css"

const ThirdC2 = () => {
  return (
    <div className="thirdc2">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img  className="imgstyle"
            
            src={imgA}
            alt=""
          />
        </div>

        <div
          className=" col-sm-12 col-md-6 col-lg-6 imgstylemessage">
          <h1 className="boom">What IS IT</h1> <br />
          
          <p className="boom">
          
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            voluptate vitae doloribus tempore recusandae ea alias optio beatae
            commodi, cupiditate necessitatibus, sequi magni blanditiis quibusdam
            officiis facilis harum odio maiores tempora! Provident soluta odit
            optio placeat architecto, tempore ratione tempora aperiam debitis
            doloremque vero eum. Nulla cupiditate commodi non facere!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdC2;
