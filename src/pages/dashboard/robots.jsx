import React from 'react';
import {Row, Col} from 'reactstrap';

import RobotsElement from './robotsElement.jsx';
import * as d3 from "d3";
import {scaleLinear} from 'd3-scale'
import {interpolateLab} from 'd3-interpolate'

export default class RobotsBlock extends React.Component {
    data;
    robots;

    constructor(props) {
        super(props);
        this.colorScale = d3.scaleOrdinal()
            .domain([1, 2])
            .range(['url(#MyGradientGreen)']);
        this.colorScale2 = d3.scaleOrdinal()
            .domain([1, 2])
            .range(['#65F5E5']);

        this.colorScaleRed = d3.scaleOrdinal()
            .domain([1, 2])
            .range(['url(#MyGradientRed)']);
        this.colorScale2Red = d3.scaleOrdinal()
            .domain([1, 2])
            .range(['#F56565']);

        this.data = [
            {
                label: 'somethingA',
                values: [
                    {x: 0, y: 8},
                    {x: 1.3, y: 5},
                    {x: 3, y: 6},
                    {x: 3.5, y: 6.5},
                    {x: 4, y: 6},
                    {x: 4.5, y: 6},
                    {x: 5, y: 7},
                    {x: 5.5, y: 8}]

            }

        ];
        console.log(this.props);
    }

    render() {
        console.log(this);
        return (
            <div className="robots_container">
                <div className="col-12 robots_title">
                    Robots
                </div>

                <div className="col-12 robots_line">
                    <Row>
                        <div className="col-1">
                            <div className="row">
                                Robot Name
                            </div>
                        </div>
                        <div className="col-1">
                            Coin
                        </div>
                        <div className="col-1">
                            Exchange
                        </div>
                        <div className="col-2">
                                Initial Capital
                        </div>
                        <div className="col-2">
                            Robot Balance
                        </div>
                        <div className="col-2 col-2_5">
                                Performance
                        </div>
                        <div className="col-2 col-2_5">
                            <div className="row">
                                Started
                            </div>
                        </div>
                    </Row>
                </div>

                {this.props.robots.map(robot => (
                    <RobotsElement key={robot.id} color={this.colorScale} color2={this.colorScale2} robot_name={robot.robot_name}
                        coin_name={robot.coin_name} coin_class={robot.coin_class}
                        exchange={robot.exchange} 
                        initial_capital={robot.initial_capital.current} initial_capital_old={robot.initial_capital.old}
                        robot_balance={robot.robot_balance.current} robot_balance_old={robot.robot_balance.old}
                        performance_val={robot.performance_val.current} performance_val_old={robot.performance_val.old}
                        performance_class={robot.performance_class}
                        started={robot.started} started_day={'24 Days Active'} 
                        button_val={robot.button_val} button_class={robot.button_class}
                        data={this.data}
                     />
                ))}
            </div>)
    }
}