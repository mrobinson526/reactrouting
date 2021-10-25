import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav 
            style = {{
            display: "flex",
            justifyContent: "space-around",
            borderBottom: "1px solid black",
        }}>
        
            <NavLink exact to = "/" style={{ textDecoration: "none"}} activeStyle={{color: "blue"}}>Go Home</NavLink>
            <NavLink exact to = "/Films" style={{ textDecoration: "none"}} activeStyle={{color: "blue"}}>View Films</NavLink>
            <NavLink exact to = "/People" style={{ textDecoration: "none"}} activeStyle={{color: "blue"}}>View People</NavLink>
            <NavLink exact to = "/Locations" style={{ textDecoration: "none"}} activeStyle={{color: "blue"}}>Explore Locations</NavLink>
        </nav>
    );
};

export default Navbar;