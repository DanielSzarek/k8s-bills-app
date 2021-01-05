import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MyNavbar from "./components/Home/navbar";
import React from "react";
import Home from "./components/Home/home";
import waterEditItem from "./components/WaterTable/waterEditItem";
import waterAddItem from "./components/WaterTable/waterAddItem";

function App() {
    return (
        <div style={{padding: "16px"}}>
            <div>
                <MyNavbar/>
            </div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/water/:id" component={waterEditItem}/>
                    <Route path="/water-add/" component={waterAddItem}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
