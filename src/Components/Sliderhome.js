import {React, useState, useEffect} from 'react';

const Sliderhome = () => {

  const [sliders, setSliders] = useState([]);
  useEffect(() => {
     fetch('https://api.wisitech.in/api/sliders')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setSliders(data.sliders);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);




    return(
    <>
   
   {sliders.map((slider) => {
          <div>{slider.image}</div>
         
        
        })}

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

        {sliders.map((slider) => {
         return (

          <div className="carousel-item active">
            <img src={slider.image} className="d-block w-100" alt={slider.title}/>
          </div>
          
          );
        
        })}

        </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
      
        </>
    )
}

export default Sliderhome;