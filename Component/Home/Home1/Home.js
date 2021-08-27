import React from "react";

import NewHome from "./Newhome/NewHome";
import LottieFile from "./LottieFile";
import n1 from "../../img/n1.jpg";
import n2 from "../../img/n2.jpg";
import n3 from "../../img/n3.jpg";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#828594" }}>
      <div className="row">
        <div className="col-3"></div>

        <div className="col-4">
          <br />
          <h1>
            <span>
              Find Your <span style={{ color: "red" }}>Intern here</span>
            </span>{" "}
          </h1>{" "}
          <br />
          <NewHome></NewHome>
        </div>

        <div className="col-4 ">
          <div className="position-fixed">
            <LottieFile></LottieFile>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
