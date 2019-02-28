import React from 'react';
import { render } from 'react-dom';
import Chart from './Chart';
import { getData } from "./utils"

import { TypeChooser } from "react-stockcharts/lib/helper";

export default class MovingAverage extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        getData().then(data => {
            this.setState({ data })
        })
    }
    render() {
        if (this.state == null) {
            return <div>Loading...</div>
        }
        if (this.props.activeElem != 1) {
            return <div>Loading...</div>
        }
        return (
            <TypeChooser>
                {type => <Chart  data={this.state.data} />}
            </TypeChooser>
        )
    }
}

