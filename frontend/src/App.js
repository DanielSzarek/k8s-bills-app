import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home/home";
import MyNavbar from "./components/Home/navbar";
import React from "react";

function App() {
    return (
        <div style={{padding: "16px"}}>
            <div>
                <MyNavbar/>
            </div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/water/:id"/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
