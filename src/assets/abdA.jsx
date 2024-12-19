import React from "react";
import  "../styles/style.css";
function AbdA(){
    return(
        <div class="card" style={{"width": "10rem;"}}>
        <img class="card-img-top" src="./abcdA.jpg" alt="Card image cap"/>
        <div class="card-body">
          <h1 style={{"textAlign":"center"}}><b>Black Sigatoka Disease</b></h1>
          <div className="card-content">
            <ol>
              <li>Scientific name: Mycosphaerella sp</li>
              <li>Causes dark lesions on banana leaves.</li>
              <li>Leads to premature leaf drop.</li>
              <li>Control with cultural practices and fungicides.</li>
            </ol>
          </div>
        </div>
      </div>
    );}

export default AbdA;