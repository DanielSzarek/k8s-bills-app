import React from 'react';
import {withRouter} from 'react-router-dom';
import MyNavbar from "./navbar";
import WaterTable from "../WaterTable/waterTable";

class Home extends React.Component {

    render() {
        return (
            <div>
                <div style={{display: "inline-block", width: "50%"}}>
                    <WaterTable/>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);