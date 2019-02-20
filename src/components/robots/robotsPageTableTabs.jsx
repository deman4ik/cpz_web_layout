import React from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';

import MovingAverage from "./MovingAverage/MovingAverage.jsx";
import ChartComponent from "../totalPerformance/totalPerfomance.jsx";

import WizardModal from "../WizardModal.jsx";

export default class RobotsPageTableTabs extends React.Component {
    elem;

    constructor(props) {
        super(props);
        this.elem =  this.props.elem;
        this.state = {
            activeTab: '1'
        };
        this.elementStat = {elementStat: this.elem};
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
            console.log(this.elementStat.elementStat);
            return (
                <div className={'robots_tables_container'}>
                    <button className={'float-left button_back'} onClick={this.props.toggleBlockTest.bind(this, false)}> {'<'} </button>
                    <div className={'coin_icon float-left ' + this.elementStat.elementStat.coin_class}>
                        <div className={'robot_name_detail'}>{this.elementStat.elementStat.robot_name}</div>
                        <div>

                            <span className={'name_detail'}>
                                 {this.elementStat.elementStat.coin_name}
                            </span>
                            <span className={'exchange_detail'}>
                                 {this.elementStat.elementStat.exchange}
                            </span>
                        </div>
                    </div>
                    <div className={'float-left initial_container'}>
                        <div>
                            <span className={'initial_name'}>Initial Capital</span>
                            <span className={'initial_value'}>{this.elementStat.elementStat.initial_capital}</span>
                        </div>
                        <div>
                            <span className={'initial_name'}>Started</span>
                            <span className={'initial_value'}>{this.elementStat.elementStat.started}</span>
                        </div>
                    </div>

                    <WizardModal/>
                    <div className={'robots_container robots_page_container robots_table_container'}>
                        <div>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={() => { this.toggle('1'); }}>
                                        Trading
                                        <div className={'tabs_value_title'}>$ 1,422.11</div>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '2' })}
                                        onClick={() => { this.toggle('2'); }}>
                                        Balance
                                        <div className={'tabs_value_title'}>
                                            <span className={'top_value'}>+ 7,41%</span>
                                            <span className={'bottom_value'}>+ 3,90%</span>
                                        </div>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '3' })}
                                        onClick={() => { this.toggle('3'); }}>
                                        Drawdawn
                                        <div className={'tabs_value_title'}>
                                            <span className={'top_value'}>$ 1,198.93</span>
                                            <span className={'bottom_value'}>+ 2,87%</span>
                                        </div>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                   <MovingAverage activeElem={this.state.activeTab}
                                                  coin_name={this.elementStat.elementStat.coin_name}
                                    />
                                </TabPane>
                                <TabPane tabId="2">
                                    <ChartComponent onClickElemStatus={this.state.activeTab==2}
                                                    coin_name={this.elementStat.elementStat.coin_name}
                                    />
                                </TabPane>
                                <TabPane tabId="3">
                                    <ChartComponent onClickElemStatus={this.state.activeTab==3}
                                                    coin_name={this.elementStat.elementStat.coin_name}
                                    />
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>

                </div>
            )
        }
    }
