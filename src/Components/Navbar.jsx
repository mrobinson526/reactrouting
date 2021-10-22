import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav 
            style = {{
            display: "flex",
            justifyContent: "space-around",
            borderBottom: "1px solid black",
        }}>
        
            <NavLink exact to = "/" style={{ textDecoration: "none"}} activeStyle={{color: "blue"}}>Home</NavLink>
            <NavLink exact to = "/films" style={{ textDecoration: "none"}} activeStyle={{color: "blue"}}>Films</NavLink>
            <NavLink exact to = "/people" style={{ textDecoration: "none"}} activeStyle={{color: "blue"}}>People</NavLink>
            <NavLink exact to = "/vehicles" style={{ textDecoration: "none"}} activeStyle={{color: "blue"}}>Vehicles</NavLink>
        </nav>
    );
};

export default Navbar;