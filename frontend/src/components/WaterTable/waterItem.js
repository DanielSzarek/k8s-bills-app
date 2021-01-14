import React from 'react';
import {Link} from "react-router-dom";
import {PencilSquare} from 'react-bootstrap-icons';

export default class WaterItem extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.months = {
            1: 'styczeń',
            2: 'luty',
            3: 'marzec',
            4: 'kwiecień',
            5: 'maj',
            6: 'czerwiec',
            7: 'lipiec',
            8: 'sierpień',
            9: 'wrzesień',
            10: 'październik',
            11: 'listopad',
            12: 'grudzień'
        }

        this.state = {
            waterItem: props.data
        }
    }

    getMonth(index) {
        return this.months[index];
    }

    render() {
        return (
            <tr>
                <td>{this.state.waterItem.year_of_bill} - {this.getMonth(this.state.waterItem.month_of_bill)}</td>
                <td>{this.state.waterItem.register_value}</td>
                <td>{this.state.waterItem.bill_amount} zł</td>
                <td><Link to={`/water/${this.state.waterItem.id}`} key={this.state.waterItem.id}
                          style={{marginTop: "16px"}}><PencilSquare/></Link></td>
            </tr>
        );
    }
}