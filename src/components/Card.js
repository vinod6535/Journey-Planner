import { useState } from "react";

function Card({id,image,info,name,price}, removeTour){

    const description = '${info.substring(0,200)}....';
    const [readmore,setReadMore] = useState(false);
    function readmoreHandler(){
        setReadMore(!readmore); 
    }

     

    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">

                <div className="tour-details">
                    <h4 className="tour-price"> {price}
                    </h4>
                    <h4>{name}</h4>
                </div>
                <div>
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? 'show less' : 'show more'}
                    </span>
                </div>

            </div>
            
            <button onClick={()=> removeTour(id)} className="btn-red">
                Not Intrested
            </button>

               
        </div>
    );
}

export default Card;