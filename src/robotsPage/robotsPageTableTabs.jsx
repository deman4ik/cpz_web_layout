import React from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap';
import classnames from 'classnames';

import MoveingAverage from "../tables/MovingAverage/MovingAverage.jsx";


import TotalPerfomance from "../tables/totalPerformance/totalPerfomance.jsx"


import WizardModal from "../elements/WizardModal.jsx";
export default class RobotsPageTableTabs extends React.Component {
    elem;


    constructor(props) {
        super(props);

        this.elem =  this.props.elem;

        this.state = {
            activeTab: '1'
        };



        this.elementStat = {elementStat: this.elem};



        // this.setState(state => ({
        //     elementStat: this.elem
        // }));
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {

            return (
                <div className={'robots_tables_container'}>
                    <button className={'float-left button_back'} onClick={this.props.toggleBlockTest.bind(this, false)}> {'<'} </button>
                    <div className={'coin_icon float-left ' + this.elementStat.elementStat.coin_class}>
                        <div className={'robot_name_detail'}>Robot Name</div>
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
                            <span className={'initial_value'}>13.87365489 </span>
                        </div>
                        <div>
                            <span className={'initial_name'}>Started</span>
                            <span className={'initial_value'}>18/17/2019</span>
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
                                    <Row>
                                        <Col sm="12">
                                            <div className="col-sm-12 d-flex justify-content-between align-items-center table_header">
                                                <div>BTC/USD</div>
                                                <div>
                                                    <ul className="float-left data_table">
                                                        <li className="float-left">1m</li>
                                                        <li className="float-left">3m</li>
                                                        <li className="float-left active">6m</li>
                                                        <li className="float-left">1y</li>
                                                        <li className="float-left">All</li>
                                                    </ul>
                                                    <div className="float-left">
                                                        <span>From</span><span className={'table_data'}>Oct 13, 2017</span></div>
                                                    <div className="float-left"><span
                                                        className="float-left">To</span><span className="float-left table_data">Jan 13, 2018</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="total_table_container">

                                                <MoveingAverage activeElem={this.state.activeTab}/>

                                            </div>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <TotalPerfomance onClickElemStatus={this.state.activeTab==2}/>
                                </TabPane>
                                <TabPane tabId="3">

                                    <TotalPerfomance onClickElemStatus={this.state.activeTab==3}/>
                                </TabPane>
                            </TabContent>

                        </div>
                    </div>

                </div>
            )
        }
    }
