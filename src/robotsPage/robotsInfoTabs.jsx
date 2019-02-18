import React from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap';
import classnames from 'classnames';

import MoveingAverage from "../tables/MovingAverage/MovingAverage.jsx";


import TotalPerfomance from "../tables/totalPerformance/totalPerfomance.jsx"

export default class RobotsInfoTabs extends React.Component {


    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
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
            <div className={'robots_tabs_container'}>
                <div className="col-12">
                    <Nav tabs>
                        <NavItem>
                            <div
                                className={'tabs_link_container ' + classnames({active: this.state.activeTab === '1'})}>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === '1'})}
                                    onClick={() => {
                                        this.toggle('1');
                                    }}
                                >

                                    Statistics
                                </NavLink>
                            </div>
                        </NavItem>

                        <NavItem>
                            <div
                                className={'tabs_link_container ' + classnames({active: this.state.activeTab === '2'})}>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === '2'})}
                                    onClick={() => {
                                        this.toggle('2');
                                    }}
                                >
                                    Signals
                                </NavLink>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div
                                className={'tabs_link_container ' + classnames({active: this.state.activeTab === '3'})}>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === '3'})}
                                    onClick={() => {
                                        this.toggle('3');
                                    }}
                                >
                                    Public Statistics
                                </NavLink>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div
                                className={'tabs_link_container ' + classnames({active: this.state.activeTab === '4'})}>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === '4'})}
                                    onClick={() => {
                                        this.toggle('4');
                                    }}
                                >
                                    My Statistics
                                </NavLink>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div
                                className={'tabs_link_container ' + classnames({active: this.state.activeTab === '5'})}>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === '5'})}
                                    onClick={() => {
                                        this.toggle('5');
                                    }}
                                >
                                    Trading History
                                </NavLink>
                            </div>
                        </NavItem>
                    </Nav>
                </div>
                <div className="col-12">
                    <div className="col-12">
                        <div className={'robots_tabs_header row'}>
                            <div className="col-3">Robot Name</div>
                            <div className="col-3">All Trades</div>
                            <div className="col-3">Long Trades</div>
                            <div className="col-3">Short Trades</div>
                        </div>
                    </div>
                </div>


                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">

                        <div className="col-12">
                            <div className="col-12">
                                <div className="col-12 robots_table_title">Profit</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className="col-12">
                                <div className="col-12 robots_table_title">Winners</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>


                            <div className="col-12">
                                <div className="col-12 robots_table_title">Losses</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                        </div>

                    </TabPane>
                    <TabPane tabId="2">
                        <div className="col-12">
                            <div className="col-12">
                                <div className="col-12 robots_table_title">Profit</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className="col-12">
                                <div className="col-12 robots_table_title">Winners</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>


                            <div className="col-12">
                                <div className="col-12 robots_table_title">Losses</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tabId="3">
                        <div className="col-12">
                            <div className="col-12">
                                <div className="col-12 robots_table_title">Profit</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className="col-12">
                                <div className="col-12 robots_table_title">Winners</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>


                            <div className="col-12">
                                <div className="col-12 robots_table_title">Losses</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tabId="4">
                        <div className="col-12">
                            <div className="col-12">
                                <div className="col-12 robots_table_title">Profit</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className="col-12">
                                <div className="col-12 robots_table_title">Winners</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>


                            <div className="col-12">
                                <div className="col-12 robots_table_title">Losses</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tabId="5">
                        <div className="col-12">
                            <div className="col-12">
                                <div className="col-12 robots_table_title">Profit</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className="col-12">
                                <div className="col-12 robots_table_title">Winners</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>


                            <div className="col-12">
                                <div className="col-12 robots_table_title">Losses</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Bars Held</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                                <div className="col-3">10</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Number of Trades</div>
                                <div className="col-3">63</div>
                                <div className="col-3">37</div>
                                <div className="col-3">26</div>
                            </div>
                            <div className={'robots_tabs_table row'}>
                                <div className="col-3">Average Net Profit</div>
                                <div className="col-3">295.09</div>
                                <div className="col-3">229.54</div>
                                <div className="col-3">388.38</div>
                            </div>
                        </div>
                    </TabPane>

                </TabContent>
            </div>
        )
    }
}
