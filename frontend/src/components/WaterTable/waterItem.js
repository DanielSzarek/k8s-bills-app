import React from 'react';
import {Link} from "react-router-dom";
import {PencilSquare} from 'react-bootstrap-icons';

export default class WaterItem extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            waterItem: props.data
        }
    }

    render() {
        return (
            <tr>
                <td>{this.state.waterItem.month_of_bill}</td>
                <td>{this.state.waterItem.register_value}</td>
                <td>{this.state.waterItem.bill_amount} zł</td>
                <td><Link to={`/water/${this.state.waterItem.id}`} key={this.state.waterItem.id} style={{marginTop: "16px"}}><PencilSquare /></Link></td>
            </tr>
        );
    }
}