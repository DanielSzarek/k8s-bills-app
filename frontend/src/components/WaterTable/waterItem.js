import React from 'react';

export default class WaterItem extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            waterItem: props.data
        }
    }

    onTrClick(id) {
        this.props.history.push('/water/' + id);
    }

    render() {
        return (
            <tr onClick={this.onTrClick(this.state.waterItem.id)}>
                <td>{this.state.waterItem.month_of_bill}</td>
                <td>{this.state.waterItem.register_value}</td>
                <td>{this.state.waterItem.bill_amount} zł</td>
            </tr>
        );
    }
}