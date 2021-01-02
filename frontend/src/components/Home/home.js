import React from 'react';
import {withRouter} from 'react-router-dom';
import MyNavbar from "./navbar";

class Home extends React.Component {

    render() {
        return (
            <MyNavbar />
        )
    }
}

export default withRouter(Home);