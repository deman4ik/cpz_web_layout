import React from 'react';
import * as d3 from "d3";

import RobotsElement from './robotsElement.jsx';
import { RobotsHeader } from '../dashBoardBricks.jsx';


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
    }

    render() {
        return (
            <div className="robots_container">
                <div className="col-12 robots_title">
                    Robots
                </div>
                <RobotsHeader/>
                {this.props.robots.map(robot => (
                    <RobotsElement key={robot.id} 
                        color={robot.performance_val.current.search(/\+/) > -1 ? this.colorScale: this.colorScaleRed} 
                        color2={robot.performance_val.current.search(/\+/) > -1 ? this.colorScale2: this.colorScale2Red} 
                        robot_name={robot.robot_name}
                        coin_name={robot.coin_name} coin_class={robot.coin_class}
                        exchange={robot.exchange} 
                        initial_capital={robot.initial_capital.current} initial_capital_old={robot.initial_capital.old}
                        robot_balance={robot.robot_balance.current} robot_balance_old={robot.robot_balance.old}
                        performance_val={robot.performance_val.current} performance_val_old={robot.performance_val.old}
                        started={robot.started} started_day={'24 Days Active'} 
                        button_val={robot.button_val} button_class={robot.button_class}
                        data={robot.data}
                     />
                ))}
            </div>)
    }
}
