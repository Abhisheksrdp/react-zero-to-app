import { useState } from "react";
import Restrocard from "./Restrocard";
import { Hydrestaurents } from "../utils/mockData.js";





const Body = () => {

  const [restaurentss, setrestaurentss] = useState(Hydrestaurents) ;
  return (
    <div className="body">
      <div className="input-container">
        {/* <input type="text" style={{ border: "1px solid black" }} /> */}

        <button style={{margin:'10px'}}
        onClick ={() => {

         let filter = restaurentss.filter((Restaurents) => { return Restaurents.rating >= 4.5} )

         setrestaurentss(filter)
         
          
          

        }} >find restaurents above 4.5 rating</button>
      </div>

      <div
        className="restaurents"
        style={{
          width: "100%",
          border: "2px solid red",
          minHeight: "500px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {restaurentss.map((restro) => (
          <Restrocard
            key={restro.id}
            id={restro.id}
            restName={restro.restName}
            image={restro.image}
            dishTitle={restro.dishTitle}
            cuisines={restro.cuisines}
            rating={restro.rating}
            waitTime={restro.waitTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
