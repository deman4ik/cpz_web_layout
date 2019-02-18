import React from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';
import classnames from 'classnames';

import RobotsPageElement from './robotsPageElement.jsx';
import RobotsElementCollapse from './robotsElementCollapse.jsx';


import RobotsPageTableTabs from './robotsPageTableTabs.jsx';
import RobotsInfoTabs from './robotsInfoTabs.jsx';
import * as d3 from "d3";

import TotalPerfomance from "../tables/totalPerformance/totalPerfomance.jsx"

export default class RobotsPage extends React.Component {
    elem;


    constructor(props) {
        super(props);

        // this.elem = {
        //     robot_name: "Robot  Name",
        //     coin_name: "ETH",
        //     coin_class: "coin_icon_eth",
        //     exchange: "OKEX",
        //     button_checkbox: "checked",
        //     button_type: "",
        //     initial_capital: "13.87365489",
        //     initial_capital_old: "13.87365489",
        //     performance_class: "green_info",
        //     performance_val: "+ 3,90%",
        //     performance_val_old: "+ 3,90%",
        //     robot_balance: "13.87365489",
        //     robot_balance_old: "13.87365489",
        //     started: "18/17/2019",
        //     started_day: "24 Days Active",
        // }


        this.colorScale = d3.scaleOrdinal()
            .domain([1, 2])
            .range(['url(#MyGradientGreenNew)']);


        this.colorScale2 = d3.scaleOrdinal()
            .domain([1, 2])
            .range(['#65F5E5']);

        this.colorScaleRed = d3.scaleOrdinal()
            .domain([1, 2])
            .range(['url(#MyGradientRedNew)']);
        this.colorScale2Red = d3.scaleOrdinal()
            .domain([1, 2])
            .range(['#F56565']);


        this.toggleBlockTest = this.toggleBlockTest.bind(this);


        this.data = [
            {
                label: 'somethingA',
                values: [{x: 0, y: 2}, {x: 1.3, y: 5}, {x: 3, y: 6}, {x: 3.5, y: 6.5}, {x: 4, y: 6}, {
                    x: 4.5,
                    y: 6
                }, {x: 5, y: 7}, {x: 5.5, y: 8}]

            }

        ];

        this.state = {elementStat: this.elem};
        this.setState(state => ({
            elementStat: this.elem
        }));

    }

    toggleBlockTest(elem) {


        this.setState(state => ({
            elementStat: elem
        }));


    }


    render() {
        if (!this.state.elementStat) {


            return (
                <div>



                    <div className={'robots_container robots_page_container'}>
                        <svg height={0} width={0} style={{
                            overflow: 'hidden',
                            display: 'inline-block',
                            float: 'left'
                        }}>
                            <defs>
                                <linearGradient id="MyGradientGreenNew" x1="0" y1="100%" x2="0" y2="0%">
                                    <stop offset="0%" stopColor="#65F5E5" stopOpacity={0}/>
                                    <stop offset="50%" stopColor="#65F5E5" stopOpacity={0.3}/>
                                    <stop offset="100%" stopColor="#65F5E5" stopOpacity={0.6}/>
                                </linearGradient>

                                <linearGradient id="MyGradientRedNew" x1="0" y1="100%" x2="0" y2="0%">
                                    <stop offset="0%" stopColor="#CD3E60" stopOpacity={0}/>
                                    <stop offset="50%" stopColor="#CD3E60" stopOpacity={0.3}/>
                                    <stop offset="100%" stopColor="#CD3E60" stopOpacity={0.6}/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="row">
                            <div className="col-12 robots_title">Robots</div>
                        </div>
                        <div className={'col-12 robots_line'}>
                            <Row>
                                <div className="col-2 align-self-center">
                                    <Row>
                                        Robot Name
                                    </Row>
                                </div>
                                <div className="col-1 align-self-center">
                                    Coin
                                </div>
                                <div className="col-1 align-self-center">
                                    Exchange
                                </div>
                                <div className="col-2 align-self-center">
                                    Initial Capital
                                </div>
                                <div className="col-2 align-self-center">
                                    Robot Balance
                                </div>
                                <div className="col-3 align-self-center">
                                    Performance
                                </div>
                                <div className="col-1 align-self-center text-right">
                                    <div className="row  justify-content-end">
                                        Status

                                    </div>
                                </div>
                            </Row>


                        </div>
                        <RobotsElementCollapse onClick={this.toggleBlockTest} robot_name={'Robot  Name'}
                                               coin_name={'ETH'} coin_class={'coin_icon_eth'}
                                               exchange={'OKEX'} initial_capital={'13.87365489'}
                                               initial_capital_old={'13.87365489'}
                                               robot_balance={'13.87365489'} robot_balance_old={'13.87365489'}
                                               performance_val={'+ 3,90%'} performance_val_old={'+ 3,90%'}
                                               performance_class={'green_info'}
                                               started={'18/17/2019'} started_day={'24 Days Active'}
                                               button_type={''}
                                               button_checkbox={'checked'}
                                               data={this.data}
                                               color={this.colorScale} color2={this.colorScale2}/>

                        <RobotsElementCollapse onClick={this.toggleBlockTest} robot_name={'Robot  Name'}
                                               coin_name={'XRP'} coin_class={'coin_icon_RIPPLE'}
                                               exchange={'BITFINEX'}
                                               initial_capital={'0.87235789'} initial_capital_old={'0.78365479'}
                                               robot_balance={'0.87235789'} robot_balance_old={'0.78365479'}
                                               performance_val={'+ 3,90%'} performance_val_old={'+ 3,90%'}
                                               performance_class={'green_info'}
                                               started={'18/17/2019'} started_day={'24 Days Active'}
                                               button_type={'text'}
                                               button_checkbox={'checked'}
                                               data={this.data}
                                               color={this.colorScale} color2={this.colorScale2}
                        />
                        <RobotsElementCollapse onClick={this.toggleBlockTest} robot_name={'Robot  Name'}
                                               coin_name={'ETH'} coin_class={'coin_icon_eth'}
                                               exchange={'OKEX'} initial_capital={'13.87365489'}
                                               initial_capital_old={'13.87365489'}
                                               robot_balance={'13.87365489'} robot_balance_old={'13.87365489'}
                                               performance_val={'- 3,90%'} performance_val_old={'- 3,90%'}
                                               performance_class={'red_info'}
                                               started={'18/17/2019'} started_day={'24 Days Active'}
                                               button_type={''}
                                               button_checkbox={'checked'}
                                               data={this.data}
                                               color={this.colorScaleRed} color2={this.colorScale2Red}
                        />
                        <RobotsElementCollapse onClick={this.toggleBlockTest} robot_name={'Robot  Name'}
                                               coin_name={'BTC'} coin_class={'coin_icon_bitcoin'}
                                               exchange={'OKEX'}
                                               initial_capital={'1.19673897'} initial_capital_old={'1.19673897'}
                                               robot_balance={'1.19673897'} robot_balance_old={'1.19673897'}
                                               performance_val={'+ 3,90%'} performance_val_old={'+ 3,90%'}
                                               performance_class={'green_info'}
                                               started={'18/17/2019'} started_day={'24 Days Active'}
                                               button_type={''}
                                               button_checkbox={''}
                                               data={this.data}
                                               color={this.colorScale} color2={this.colorScale2}
                        />
                        <RobotsElementCollapse onClick={this.toggleBlockTest} robot_name={'Robot  Name'}
                                               coin_name={'XRP'} coin_class={'coin_icon_RIPPLE'}
                                               exchange={'BITFINEX'}
                                               initial_capital={'0.87235789'} initial_capital_old={'0.78365479'}
                                               robot_balance={'0.87235789'} robot_balance_old={'0.78365479'}
                                               performance_val={'- 3,90%'} performance_val_old={'- 3,90%'}
                                               performance_class={'red_info'}
                                               started={'18/17/2019'} started_day={'24 Days Active'}
                                               button_type={'text'}
                                               button_checkbox={'checked'}
                                               data={this.data}
                                               color={this.colorScaleRed} color2={this.colorScale2Red}
                        />
                    </div>
                </div>

            )
        } else {
            return (
                <div className={'detail_robot'}>
                    <RobotsPageTableTabs toggleBlockTest={this.toggleBlockTest} elem={this.state.elementStat}/>
                    <RobotsInfoTabs/>

                </div>
            )
        }
    }
}