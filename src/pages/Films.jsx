import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



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
                        <div className="card" key={`film-title-${film.id}`}>
                       <div className="card-body">
                           <h5 className = "card-title">Movie Title : {film.title}</h5>
                           <p className="card-text">Release-Date: {film.release_date}</p>
                           <p className="card-text">{film.description}</p>
                           <Link to = {`/films/$film.id}`} className="btn btn-primary">Film Profile</Link>
                       </div>
                   </div>
                ))}
           </div>
        
        </div>     
            )

       }
            

      

    export default Films;
