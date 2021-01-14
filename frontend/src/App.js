import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MyNavbar from "./components/Home/navbar";
import React from "react";
import Home from "./components/Home/home";
import waterEditItem from "./components/WaterTable/waterEditItem";
import waterAddItem from "./components/WaterTable/waterAddItem";
import electricityAddItem from "./components/ElectricityTable/electricityAddItem";
import electricityEditItem from "./components/ElectricityTable/electricityEditItem";
import Currency from "./components/Currency/currency";

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
                    <Route path="/electricity/:id" component={electricityEditItem}/>
                    <Route path="/electricity-add/" component={electricityAddItem}/>
                    <Route path="/currency/" component={Currency}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
