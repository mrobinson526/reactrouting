import {BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Films from "./pages/Films";
import FilmDetails from "./pages/FilmDetails";
import People from "./pages/People";
import Locations from "./pages/Locations";



const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main className="container mt-5">
            <Switch>
                <Route exact path="/">
                    {() => <h1>Home Page</h1>}
                    <Home />
                </Route>
                <Route exact path="/films">
                    {() => <h1>Film Page</h1>}
                    <Films />
                </Route>
                <Route exact path="/films/:filmsid">
                    {() => <h1>Film Detail Page</h1>}
                    <FilmDetails />
                </Route>
                <Route exact path="/people">
                    {() => <h1>People Page</h1>}
                    <People />
                </Route>
                <Route exact path="/locations">
                    {() => <h1>Locations Page</h1>}
                    <Locations />
                </Route>
                <Route exact path="*">
                    {() => <h1>404 Page Not Found</h1>}
                </Route>
            </Switch>
        </main>
    </BrowserRouter>
    );
};

export default App;