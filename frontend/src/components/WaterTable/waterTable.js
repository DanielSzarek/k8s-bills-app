import React from 'react';
import Loader from 'react-loader-spinner'
import {Table} from "react-bootstrap";
import WaterItem from "./waterItem";

export default class WaterTable extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            waterBills: []
        }
    }

    componentDidMount() {
        // TODO Configuration for endpoint
        fetch("http://localhost:8080/bills/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    waterBills: data,
                    loaderState: false
                });
            })
    }

    render() {
        return (
            <div style={{position: "absolute"}}>
                <div style={{textAlign: "center"}}>
                    <h4>Woda</h4>
                    <Loader
                        type="Audio"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={1000} //1 secs
                        visible={this.state.loaderState}
                    />
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Data</th>
                            <th>Wartość licznika</th>
                            <th>Rachunek</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.waterBills.map(waterItem =>
                            <WaterItem data={waterItem}/>
                        )}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}
