import React from "react";
import {withRouter} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

class WaterEditItem extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            id: this.props.match.params.id,
            waterBill: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch(`http://localhost:8080/bills/${this.state.id}/`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    waterBill: data,
                    registerValue: data.register_value,
                    billAmount: data.bill_amount
                })
            })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (!this.state.registerValue || this.state.registerValue < 0) {
            alert("Wartość licznika jest nieprawidłowa!");
            return;
        }

        if (!this.state.billAmount || this.state.billAmount < 0) {
            alert("Wartość rachunku jest nieprawidłowa!");
            return;
        }

        const waterBill = this.state.waterBill;
        waterBill.register_value = this.state.registerValue;
        waterBill.bill_amount = this.state.billAmount;

        fetch(`http://localhost:8080/bills/${this.state.id}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(waterBill)
        })
            .then(response => {
                this.props.history.push(`/water/${this.state.id}`)
            });
    }

    render() {
        return (
            <div>
                <h1>Edycja - woda</h1>
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Wartość licznika</Form.Label>
                            <Form.Control type={"number"} step={0.001} name={"registerValue"}
                                          placeholder={"Edytuj wartość licznika"}
                                          value={this.state.registerValue}
                                          onChange={this.handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Wartość rachunku</Form.Label>
                            <Form.Control type={"number"} step={0.01} name={"billAmount"}
                                          placeholder={"Edytuj wartość rachunku"}
                                          value={this.state.billAmount}
                                          onChange={this.handleChange}></Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">Edytuj</Button>
                    </Form>
                </div>
            </div>

        );
    }
}

export default withRouter(WaterEditItem);