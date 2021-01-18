import React from "react";
import {withRouter} from "react-router-dom";
import Loader from "react-loader-spinner";
import {ListGroup} from "react-bootstrap";
import CurrencyItem from "./currencyItem";

class Currency extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            rates: [],
            loaderState: true
        }

        this.url = process.env.REACT_APP_API_NBP_URL;
        if (this.url === undefined) {
            this.url = "http://api.nbp.pl/api/exchangerates"
        }
    }

    componentDidMount() {
        fetch(`${this.url}/tables/A?format=json`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    rates: data[0].rates,
                    loaderState: false
                });
            })
    }

    render() {
        return (
            <div>
                <div className={"text-center"}>
                    <h1>Waluty</h1>
                </div>
                <div>
                    <Loader className={"text-center"}
                            type="Audio"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            timeout={2000} //2 secs
                            visible={this.state.loaderState}
                    />
                    <ListGroup>
                        {
                            this.state.rates.map(rate =>
                                    <ListGroup.Item>
                                        <CurrencyItem data={rate}/>
                                    </ListGroup.Item>
                            )
                        }
                    </ListGroup>
                </div>
            </div>
        )
    }
}

export default withRouter(Currency);