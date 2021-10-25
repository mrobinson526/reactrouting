import { useState, useEffect } from 'react';


    const Films = () => {
        const [films, setFilms] = useState([]);

        useEffect (() => {
            fetch("https://ghibliapi.herokuapp.com/films/ ")
            .then(res => res.json())
            .then(films => setFilms(films));
        }, []);
            
            return (
                <div className="container">
                <div className="row justify-content-center mt-5">
           {films.map(film => (
                        <div className="card">
                       <div className="card-body">
                           <h5 className = "card-title">{film.title}</h5>
                           <p className="card-text">{film.release_date}</p>
                           <p className="card-text">{film.description}</p>
                       </div>
                   </div>
                ))}
           </div>
        
        </div>     
            )

       }
            
           


    
      

    export default Films;
