import React from 'react';
import {Link} from "react-router-dom";

export default class WaterItem extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            waterItem: props.data
        }
        console.log(this.state)
    }

    render() {
        return (
            <tr>
                {/*<Link to={`/water/${this.state.waterItem.id}`} key={this.state.waterItem.id}*/}
                {/*      style={{marginTop: "16px"}}>*/}
                    <td>{this.state.waterItem.month_of_bill}</td>
                    <td>{this.state.waterItem.register_value}</td>
                    <td>{this.state.waterItem.bill_amount} zł</td>
                {/*</Link>*/}
            </tr>
        );
    }
}