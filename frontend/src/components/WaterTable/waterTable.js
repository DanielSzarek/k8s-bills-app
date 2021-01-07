import React from 'react';
import Loader from 'react-loader-spinner'
import {Table} from "react-bootstrap";
import WaterItem from "./waterItem";
import {PlusCircle} from "react-bootstrap-icons";
import {Link} from "react-router-dom";

export default class WaterTable extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            waterBills: [],
            sumOfRegisters: 0.0,
            sumOfBills: 0.0,
            loaderState: true
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

    sumOfRegisters() {
        return this.state.waterBills.reduce((total, register) => total + register.register_value, 0.0);
    }

    sumOfBills() {
        return this.state.waterBills.reduce((total, register) => total + parseFloat(register.bill_amount), 0.0);
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
                        timeout={2000} //2 secs
                        visible={this.state.loaderState}
                    />
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Okres rozliczeniowy</th>
                            <th>Wartość licznika</th>
                            <th>Rachunek</th>
                            <th><Link to={`/water-add`} style={{marginTop: "16px"}}><PlusCircle/></Link></th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.waterBills.map(waterItem =>
                            <WaterItem data={waterItem}/>
                        )}
                        </tbody>
                    </Table>
                    <Table striped bordered>
                        <tbody>
                        <tr>
                            <td>Podsumowanie</td>
                            <td>{this.sumOfRegisters()}</td>
                            <td>{this.sumOfBills().toFixed(2)} zł</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}
