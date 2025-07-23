const Restrocard = ({id, restName, dishTitle,image,cuisines,rating, waitTime}) => {
  return(

    <div className="restaurent-container" >

          <div className="restro-card">

            <div className="restro-card-container">

              <img src={image} alt={restName} />
              <h2>title : {dishTitle}</h2>
              <h3>cuisines: {cuisines.join(", ")}</h3>
              <h4>ratings: {rating}</h4>
              <h4>delivery time : {waitTime}</h4>

            </div>

          </div>
        </div>
  );
}


export default Restrocard;