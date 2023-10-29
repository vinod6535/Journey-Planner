
import Card from "./Card";

function Tours({tours,removeTour}) {
  return (
    <div className="container">

      <div >
        <h2 className="title"><span>J</span>ourney <span>P</span>lanning With <span>V</span>inod</h2>
      </div>

      <div className="cards">
        {tours.map( (tour) => {
          return <Card key={tour.id} {...tour} removeTour = {removeTour}></Card>;
        })}
      </div>

    </div>
  );
}

export default Tours;



