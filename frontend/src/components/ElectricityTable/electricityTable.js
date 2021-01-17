import React from 'react';
import Loader from 'react-loader-spinner'
import {Table} from "react-bootstrap";
import ElectricityItem from "./electricityItem";
import {PlusCircle} from "react-bootstrap-icons";
import {Link} from "react-router-dom";

export default class ElectricityTable extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            electricityBills: [],
            sumOfRegisters: 0.0,
            sumOfBills: 0.0,
            loaderState: true
        }
    }

    componentDidMount() {
        let url = process.env.BACKEND_URL;
        if (url === undefined) {
            url = "http://localhost:8080"
        }
        fetch(`${url}/bills/?type=P`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    electricityBills: data,
                    loaderState: false
                });
            })
            .catch((error) => {
                alert("Błąd połączenia z serwerem - prąd: " + error)
            });
    }

    sumOfRegisters() {
        return this.state.electricityBills.reduce((total, register) => total + register.register_value, 0.0);
    }

    sumOfBills() {
        return this.state.electricityBills.reduce((total, register) => total + parseFloat(register.bill_amount), 0.0);
    }

    render() {
        return (
            <div style={{position: "absolute"}}>
                <div style={{textAlign: "center"}}>
                    <h4>Prąd</h4>
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
                            <th><Link to={`/electricity-add`} style={{marginTop: "16px"}}><PlusCircle/></Link></th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.electricityBills.map(electricityItem =>
                            <ElectricityItem data={electricityItem}/>
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
