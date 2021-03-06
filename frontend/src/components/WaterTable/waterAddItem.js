import React from "react";
import {withRouter} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

class WaterAddItem extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            settlingPeriodMonth: 1,
            settlingPeriodYear: 2015,
            registerValue: 0.0,
            billAmount: 0.0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        let url = process.env.REACT_APP_BACKEND_URL;
        if (url === undefined) {
            url = "http://localhost:8080"
        }
        fetch(`${url}/bills/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Connection": "close"
            },
            body: JSON.stringify({
                bill_type: 'W',
                month_of_bill: this.state.settlingPeriodMonth,
                year_of_bill: this.state.settlingPeriodYear,
                register_value: this.state.registerValue,
                bill_amount: this.state.billAmount
            })
        })
            .then(response => {
                if (response.ok) {
                    this.props.history.push(`/`)
                } else {
                    alert("Niepoprawne dane, sprawdź czy taka data już istnieje!")
                }
            });
    }

    render() {
        const months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
        const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]

        return (
            <div>
                <h1>Dodaj - woda</h1>
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Miesiąc</Form.Label>
                            <Form.Control onChange={this.handleChange} name={"settlingPeriodMonth"} as="select">
                                {months.map((month, index) =>
                                    <option key={index} value={index+1}>{month}</option>
                                )}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Rok</Form.Label>
                            <Form.Control onChange={this.handleChange} name={"settlingPeriodYear"} as="select">
                                {years.map((year, index) =>
                                    <option key={year} value={year}>{year}</option>
                                )}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Wartość licznika</Form.Label>
                            <Form.Control type={"number"} step={0.001} name={"registerValue"}
                                          placeholder={"Wartość licznika"}
                                          value={this.state.registerValue}
                                          onChange={this.handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Wartość rachunku</Form.Label>
                            <Form.Control type={"number"} step={0.01} name={"billAmount"}
                                          placeholder={"Wartość rachunku"}
                                          value={this.state.billAmount}
                                          onChange={this.handleChange}></Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">Dodaj</Button>
                    </Form>
                </div>
            </div>

        );
    }
}

export default withRouter(WaterAddItem)