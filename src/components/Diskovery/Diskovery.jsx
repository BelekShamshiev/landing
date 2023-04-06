import React from "react";
import "./Diskovery.css";
import Coffe from "../Coffe/Coffe";
const Diskovery = () => {
    
  return (
    <div className="Diskovery">
        <div className="Diskovery_title">
            <h1>Discover Menu</h1>
            <p>What Happens Here</p>
        </div>
        <div className="Menu_coffees">
            <Coffe/>
        </div>
    </div>
  );
};

export default Diskovery;
