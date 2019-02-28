import React from 'react';
import {Row, Col} from 'reactstrap';

import RobotsElement from './robotsElement.jsx';
import * as d3 from "d3";
import {scaleLinear} from 'd3-scale'
import {interpolateLab} from 'd3-interpolate'

export default class RobotsBlock extends React.Component {
    data;

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
    }

    render() {
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

                <RobotsElement color={this.colorScale} color2={this.colorScale2} robot_name={'Robot  Name'}
                               coin_name={'ETH'} coin_class={'coin_icon_eth'}
                               exchange={'OKEX'} initial_capital={'13.87365489'} initial_capital_old={'13.87365489'}
                               robot_balance={'13.87365489 '} robot_balance_old={'13.87365489'}
                               performance_val={'+ 3,90%'} performance_val_old={'+ 3,90%'}
                               performance_class={'green_info'}
                               started={'18/17/2019'} started_day={'24 Days Active'} button_val={'Stop'}
                               button_class={''}
                               data={this.data}
                />


                <RobotsElement color={this.colorScale} color2={this.colorScale2} robot_name={'Robot  Name'}
                               coin_name={'XRP'} coin_class={'coin_icon_RIPPLE'}
                               exchange={'BITFINEX'} initial_capital={'13.87365489'} initial_capital_old={'13.87365489'}
                               robot_balance={'13.87365489'} robot_balance_old={'13.87365489'}
                               performance_val={'+ 3,90%'} performance_val_old={'+ 3,90%'}
                               performance_class={'green_info'}
                               started={'18/17/2019'} started_day={'24 Days Active'} button_val={'Stop'}
                               button_class={''}
                               data={this.data}
                />

                <RobotsElement color={this.colorScale} color2={this.colorScale2} robot_name={'Robot  Name'}
                               coin_name={'ETH'} coin_class={'coin_icon_eth'}
                               exchange={'OKEX'} initial_capital={'13.87365489'} initial_capital_old={'13.87365489'}
                               robot_balance={'13.87365489 ETH'} robot_balance_old={'13.87365489'}
                               performance_val={'+ 3,90%'} performance_val_old={'+ 3,90%'}
                               performance_class={'green_info'}
                               started={'18/17/2019'} started_day={'24 Days Active'} button_val={'Resume'}
                               button_class={'button_resume'}
                               data={this.data}
                />

                <RobotsElement color={this.colorScale} color2={this.colorScale2} robot_name={'Robot  Name'}
                               coin_name={'BTC'} coin_class={'coin_icon_bitcoin'}
                               exchange={'OKEX'} initial_capital={'13.87365489'} initial_capital_old={'13.87365489'}
                               robot_balance={'13.87365489 ETH'} robot_balance_old={'13.87365489'}
                               performance_val={'+ 3,90%'} performance_val_old={'+ 3,90%'}
                               started={'18/17/2019'} started_day={'24 Days Active'}

                               performance_class={'green_info'}
                               button_val={'Resume'}
                               button_class={'button_resume'}
                               data={this.data}
                />
                <RobotsElement color={this.colorScaleRed} color2={this.colorScale2Red} robot_name={'Robot  Name'}
                               coin_name={'ETH'} coin_class={'coin_icon_eth'}
                               exchange={'OKEX'} initial_capital={'13.87365489'} initial_capital_old={'13.87365489'}
                               robot_balance={'13.87365489 ETH'} robot_balance_old={'13.87365489'}
                               performance_val={'+ 3,90%'} performance_val_old={'+ 3,90%'}
                               performance_class={'red_info'}
                               started={'18/17/2019'} started_day={'24 Days Active'}
                               button_val={'Run'}
                               button_class={'button_run'}
                               data={this.data}
                />


            </div>)
    }
}