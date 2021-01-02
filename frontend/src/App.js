import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home/home";

function App() {
    return (
        <div style={{padding: "16px"}}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
