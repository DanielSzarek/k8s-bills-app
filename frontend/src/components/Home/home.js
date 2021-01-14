import React from 'react';
import {withRouter} from 'react-router-dom';
import WaterTable from "../WaterTable/waterTable";
import ElectricityTable from "../ElectricityTable/electricityTable";

class Home extends React.Component {

    render() {
        return (
            <div className={"container"} style={{paddingTop: '10px'}}>
                <div className={"row"}>
                    <div className={"col"}>
                        <WaterTable/>
                    </div>
                    <div className={"col"}>
                        <ElectricityTable/>
                    </div>
                </div>
                <footer className="footer footer-copyright text-center">
                    Service created by Daniel Szarek
                </footer>
            </div>
        )
    }
}

export default withRouter(Home);