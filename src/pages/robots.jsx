import React from 'react';
import * as d3 from "d3";


import RobotsElementCollapse from '../components/robots/robotsElementCollapse.jsx';
import RobotsPageTableTabs from '../components/robots/robotsPageTableTabs.jsx';
import RobotsInfoTabs from '../components/robots/robotsInfoTabs.jsx';
import { RoboCollapsedHeader } from '../components/robots/robotsBricks';
import { ContainerName } from '../components/common/commonBricks';

export default class RobotsPage extends React.Component {
    elem;

    constructor(props) {
        super(props);
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
        this.state = {elementStat: false};
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
                    <div className={'search_container search_robots_container'}>
                        <input type="text" placeholder={'Search…'}/>
                        <button className="search_button button_search_icon"></button>
                        <button className="search_button_down arrow_data_down"></button>
                    </div>
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
                            <ContainerName className={'col-12 robots_title'} name={'Robots'}/>
                        </div>
                        <div className={'col-12 robots_line'}>
                            <RoboCollapsedHeader/>
                        </div>
                        {this.props.robots.map(robot => (
                            <RobotsElementCollapse key={robot.id}
                                onClick={this.toggleBlockTest} robot_name={robot.robot_name}
                                coin_name={robot.coin_name} coin_class={robot.coin_class}
                                exchange={robot.exchange} 
                                initial_capital={robot.initial_capital.current}
                                initial_capital_old={robot.initial_capital.old}
                                robot_balance={robot.robot_balance.current} 
                                robot_balance_old={robot.robot_balance.old}
                                performance_val={robot.performance_val.current}
                                performance_val_old={robot.performance_val.old}
                                started={robot.started} started_day={robot.started_day}
                                button_type={robot.button_type}
                                button_checkbox={robot.button_checkbox}
                                data={robot.data}
                                color={robot.performance_val.current.search(/\+/) > -1 ? this.colorScale: this.colorScaleRed} 
                                color2={robot.performance_val.current.search(/\+/) > -1 ? this.colorScale2: this.colorScale2Red} 
                                statistic={robot.statistic}
                            />
                        ))}
                    </div>
                </div>
            )
        } else {
            return (
                <div className={'detail_robot'}>
                    <RobotsPageTableTabs toggleBlockTest={this.toggleBlockTest} elem={this.state.elementStat}/>
                    <RobotsInfoTabs elem={this.state.elementStat}/>
                </div>
            )
        }
    }
}