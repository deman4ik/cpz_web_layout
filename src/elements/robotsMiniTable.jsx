import React from 'react';
//import {Row, Col} from 'reactstrap';

//import * as d3 from "d3";

import * as ReactD3 from "react-d3-components";
//import {Chart} from "react-stockcharts";



var AreaChart = ReactD3.AreaChart;
var LineChart = ReactD3.LineChart;


export default class RobotsMiniTable extends React.Component {
    data;

    constructor(props) {
        super(props);

        this.data = this.props.data;

    }

    render() {
        return (

            <div className={'Chart_container'}>

                <AreaChart
                    data={this.data}
                    width={110}
                    height={50}
                    margin={{top: 0, bottom: 0, left: 0, right: 0}}
                    colorScale={this.props.color}>



                </AreaChart>
                <div className="LineChart_container">
                    <LineChart
                        data={this.data}
                        width={110}
                        height={50}
                        margin={{top: 0, bottom: 0, left: 0, right: 0}}
                        colorScale={this.props.color2}
                    />
                </div>
            </div>

        )
    }
}