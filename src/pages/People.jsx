import { useState, useEffect } from 'react';


    const People = () => {
        const [people, setPeople] = useState([]);

        useEffect (() => {
            fetch("https://ghibliapi.herokuapp.com/people/ ")
            .then(res => res.json())
            .then(people => setPeople(people));
        }, []);
            
            return (
                <div className="container">
                <div className="row justify-content-center mt-5">
           {people.map(person => (
                        <div className="card">
                       <div className="card-body">
                           <h5 className = "card-title">Name   : {person.name}</h5>
                           <p className="card-text">Gender: {person.gender}</p>
                           <p className="card-text">Eyes   : {person.eye_color}</p>
                           <p classNmae="card-text">Hair   : {person.hair_color}</p>
                       </div>
                   </div>
                ))}
           </div>
        
        </div>     
            )

       }


       export default People;