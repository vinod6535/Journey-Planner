import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours"; 


const App = () => {
  const [tours,setTours] = useState(data);

  function removeTour (id){
    const newTour = tours.filter(tour=> tour.id !== id);
    setTours(newTour);
  }

    // To set all the data again if we don't have any king of data left (select not intrested again and again )

    if(tours.length === 0){
      return(

        <div className="refresh">
          <h2>No Tours <span>Left</span></h2>
          <button className="btn-white" onClick={()=>{
            setTours(data); 
          }}>
            Refresh
          </button>
        </div>

      );
    }

  return  (
    <div className="App">
      <Tours tours={tours} removeTour = {removeTour}></Tours>
    </div> 
  )
};

export default App;
