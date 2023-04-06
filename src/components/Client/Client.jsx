import React from "react";
import "./Client.css";
import down from "../../assets/down.png"
const Client = () => {
  return (
    <div className="container_client">
      <div className="Client">
        <h1>What Clients Say</h1>
      </div>
      <div className="p_client">
        <p>1500+ Satisfied Clients</p>
      </div>
      <div className="img_client">
        <img src={down} alt="" />
      </div>
      <div className="Alice">
        <h1>Alice Williams</h1>
      </div>
      <div className="Citchen">
        <p>Kitchen Manager</p>
      </div>
      <div className="Success">
        <p>Success isn’t really that difficult. There is a significant portion of the <br /> population here in North America,  that actually want and need  success <br /> really no magic to be hard.</p>
      </div>

    </div>
  );
};

export default Client;
