import React from "react";
import {withRouter} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

class WaterEditItem extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            id: this.props.match.params.id,
            waterBill: {},
            registerValue: 1,
            billAmount: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);

        this.url = process.env.REACT_APP_BACKEND_URL;
        if (this.url === undefined) {
            this.url = "http://localhost:8080"
        }
    }

    componentDidMount() {
        fetch(`${this.url}/bills/${this.state.id}/`, {
            headers: new Headers({
                "Connection": "close",
                "Content-Type": "application/x-www-form-urlencoded"
            }),
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    waterBill: data,
                    registerValue: data.register_value,
                    billAmount: data.bill_amount
                })
            })
            .catch((error) => {
                alert("Błąd połączenia z serwerem" + error)
            });
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


        fetch(`${this.url}/bills/${this.state.id}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Connection": "close"
            },
            body: JSON.stringify(waterBill)
        })
            .then(response => {
                if (response.ok) {
                    this.props.history.push('/')
                } else {
                    alert("Błąd podczas edycji!")
                }
            });
    }

    onDeleteClick() {
        fetch(`${this.url}/bills/${this.state.id}/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Connection": "close"
            },
        })
            .then(response => {
                if (response.ok) {
                    this.props.history.push('/')
                } else {
                    alert("Błąd podczas usuwania!")
                }
            });
    }

        render()
        {
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
                            <Button variant="primary" type="submit"
                                    style={{position: "absolute", left: "15px"}}>Edytuj</Button>
                            <Button variant="danger" onClick={() => {
                                if (window.confirm('Czy na pewno chcesz usunąc ten wpis?')) this.onDeleteClick()
                            }}
                                    style={{position: "absolute", left: "100px"}}>Usuń</Button>
                        </Form>
                    </div>
                </div>

            );
        }
    }

    export
    default

    withRouter(WaterEditItem);