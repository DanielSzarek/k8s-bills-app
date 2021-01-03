import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MyNavbar from "./components/Home/navbar";
import React from "react";
import Home from "./components/Home/home";
import waterEditItem from "./components/WaterTable/waterEditItem";

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
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
