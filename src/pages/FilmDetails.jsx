import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FilmDetails = () => {
    const {filmid} = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
            .then(res => res.json())
            .then(film => setFilm(film));
    }, [film.id]);

    return (
        <div className = "container">
        <div className = "row mt-3">
            <div className = "col-12">
                <h1 className = "text-center">{film?.filmid}</h1>
                <h1 className = "text-center">{film?.title}</h1>
                <p className="text">{film?.original_title}</p>
                <p className="text">{film?.description}</p>
                <p className="text">{film?.director}</p>
                <p className="text">{film?.producer}</p>
                <p className="text">{film?.release_date}</p>
        

            </div>
        </div>
        </div>
    )
}

export default FilmDetails;