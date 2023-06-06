import React from "react";

import "../CSS/Home.css";
const Home = () => {
  return (
    <>
      <div className="HeroMain">
        {/* Left Side */}
        <div className="HeroLeftSide">
        <h3
          style={{
            color: "white",
            backgroundColor: "rgba(250,248,242,.1)",
            padding: "10px",
            width: "fit-content",
            borderRadius: "15px",
            textAlign:"center",
            marginLeft:"10%",
            marginTop:"10%",
          }}
        >
          WE ARE THE BEST
        </h3>
        <h1 className="HeroHeading">
            We Provide<br></br> Website Solution<br></br> For You
        </h1>
        <p>
        <p style={{color:"white",  marginLeft:"10%"}}>Mauris in enim sollicitudin quam sollicitudin fermentum ut vitae massa. <br></br>Donec venenatis accumsan nisi, sit amet maximus velit euismod sit amet.<br></br> Vivamus et sem sed ipsum pretium lobortis non vitae sem.</p>
        </p>
        <button style={{color:"#f55f8d", padding:"12px 35px", marginLeft:"10%", borderRadius:"25px", backgroundColor:"#ffffff", borderColor:"none"}}>
            Learn More
        </button>
        </div>
       

        {/*Right Side */}
        <div className="dz-media">
          <img src="pic1.jpg" alt="HeroImage" />
        </div>
      </div>
    </>
  );
};

export default Home;
