import React from 'react';
import {Link} from "react-router-dom";
import {PencilSquare} from 'react-bootstrap-icons';

export default class ElectricityItem extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.months = {
            1: 'styczeń',
            2: 'lity',
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
            electricityItem: props.data
        }
    }

    getMonth(index) {
        return this.months[index];
    }

    render() {
        return (
            <tr>
                <td>{this.state.electricityItem.year_of_bill} - {this.getMonth(this.state.electricityItem.month_of_bill)}</td>
                <td>{this.state.electricityItem.register_value}</td>
                <td>{this.state.electricityItem.bill_amount} zł</td>
                <td><Link to={`/electricity/${this.state.electricityItem.id}`} key={this.state.electricityItem.id}
                          style={{marginTop: "16px"}}><PencilSquare/></Link></td>
            </tr>
        );
    }
}