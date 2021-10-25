import { useState, useEffect } from 'react';


    const Locations = () => {
        const [locations, setLocations] = useState([]);

        useEffect (() => {
            fetch("https://ghibliapi.herokuapp.com/locations/ ")
            .then(res => res.json())
            .then(locations => setLocations(locations));
        }, []);
            
            return (
                <div className="container">
                <div className="row justify-content-center mt-5">
           {locations.map(location => (
                        <div className="card">
                       <div className="card-body">
                           <h5 className = "card-title">{location.name}</h5>
                           <p className="card-text">{location.climate}</p>
                           <p className="card-text">{location.terrain}</p>
                           <p className="card-text">{location.surface_water}</p>
                       </div>
                   </div>
                ))}
           </div>
        
        </div>     
            )

       }
            
           


    
      

    export default Locations;