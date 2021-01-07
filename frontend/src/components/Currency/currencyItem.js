import React from "react";

export default class CurrencyItem extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            rate: props.data
        }
        console.log(this.state.rate)
    }

    render() {
        return (
            <div>
                <h4>{this.state.rate.currency}</h4>
                <h5>{this.state.rate.code}</h5>
                <h6>Stawka: {this.state.rate.mid} zł</h6>
            </div>
        )
    }
}