import {BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    {() => <h1>Home Page</h1>}
                </Route>
                <Route exact path="/about">
                    {() => <h1>About Page</h1>}
                </Route>
                <Route exact path="/contact">
                    {() => <h1>Contact Page</h1>}
                </Route>
                <Route exact path="/projects">
                    {() => <h1>Projects Page</h1>}
                </Route>
                <Route exact path="*">
                    {() => <h1>404 Page Not Found</h1>}
                </Route>

            </Switch>
        </BrowserRouter>
    );
};

export default App;