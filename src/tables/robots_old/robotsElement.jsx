import React from 'react';
import {Row, Col} from 'reactstrap';

import * as d3 from "d3";

import * as ReactD3 from "react-d3-components";


var AreaChart = ReactD3.AreaChart;
var LineChart = ReactD3.LineChart;


export default class RobotsElement extends React.Component {
    data;

    constructor(props) {
        super(props);

        this.data = this.props.data;

    }

    render() {
        return (

            <div className={'col-12 robots_content_line'}>
                <Row>
                    <div className="col-2 align-self-center">
                        <Row>
                            <span>{this.props.robot_name}</span>
                        </Row>
                    </div>
                    <div className="col-1 align-self-center">
                        <Row>
                            <span className={'coin_icon ' + this.props.coin_class}>{this.props.coin_name}</span>
                        </Row>
                    </div>
                    <div className="col-1 align-self-center">
                        <span>{this.props.exchange}</span>
                    </div>
                    <div className="col-2 align-self-center">

                        <span>{this.props.initial_capital} {this.props.coin_name}</span>
                        <span className={'old_coin_value'}>{this.props.initial_capital_old}</span>
                    </div>
                    <div className="col-2 align-self-center">
                        <span>{this.props.robot_balance} {this.props.coin_name}</span>
                        <span className={'old_coin_value'}>{this.props.initial_capital_old}</span>
                    </div>
                    <div className="col-2 align-self-center">
                        <div className="row">
                            <div className="col-7">
                                <div className="Chart_container">
                                    <AreaChart
                                        data={this.data}
                                        width={120}
                                        height={50}
                                        margin={{top: 0, bottom: 0, left: 0, right: 0}}
                                        colorScale={this.props.color}
                                        xAxis={{ label: "x-label"}}
                                    />
                                    <div className="LineChart_container">
                                        <LineChart
                                            data={this.data}
                                            width={120}
                                            height={50}
                                            margin={{top: 0, bottom: 0, left: 0, right: 0}}
                                            colorScale={this.props.color2}
                                            xAxis={{label: "x-label"}}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-5">
                                <span className={this.props.performance_class}>{this.props.performance_val}</span>
                                <span
                                    className={this.props.performance_class + ' old_coin_value'}>{this.props.performance_val_old}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 align-self-center">
                        <div className="d-flex align-self-center justify-content-between">
                            <div className="col-6 align-self-center">
                                <Row>
                                    <span>{this.props.started}</span>
                                    <span className={'old_coin_value'}>{this.props.started_day}</span>
                                </Row>
                            </div>
                            <div className="d-flex align-self-center button_container">
                                <Row>
                                    <button className={this.props.button_class}>{this.props.button_val}</button>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Row>
                <a href="#"></a>

            </div>

        )
    }
}