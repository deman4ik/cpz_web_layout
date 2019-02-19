import React from 'react';
import {TabContent, TabPane, Row,
    // Card, Button, CardTitle, CardText, Col
} from 'reactstrap';
import classnames from 'classnames';

import Dashboard from '../pages/dashboard.jsx';

import DataBlock from '../pages/crypto.jsx';

import RobotsPage from '../pages/robots.jsx';

import SettingsPage from '../pages/settings.jsx';
// import {Chart, ChartCanvas} from "react-stockcharts";

import { Robots, Crypto, Balance } from '../demo_data/demo.jsx';


export default class ExampleMenu extends React.Component {
    deviceWidth;

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            robots: Robots,
            crypto: Crypto,
            balance: Balance
        };

        this.activeMenu = false;
        this.colMenu = 'col-2';
        this.colContent = 'col-10';

        console.log(window.innerWidth);
        if (window.innerWidth < 767) {
            this.colMenu = 'col-1';
            this.colContent = 'col-11';
            this.activeMenu = true;
        }
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    closeMenu() {
        if (this.activeMenu) {
            this.activeMenu = false;
            this.setState({
                activeMenu: false
            });
            this.colMenu = 'col-2';
            this.colContent = 'col-10';
        } else {
            this.activeMenu = true;
            this.setState({
                activeMenu: true
            });
            this.colMenu = 'col-1';
            this.colContent = 'col-11';
        }

    }

    render() {
        return (
            <Row>
                <div id="left-column" className={classnames({'close_menu': this.activeMenu}, this.colMenu)}>
                    <div className="left-column-container">
                        <div className="logo_container">
                            <a href="#" className="logo_title"></a>
                            <a href="#" className="logo_item"></a>

                            <div className={'menu_container'}>
                                <div className="row">
                                    <ul>
                                        <li className={classnames({active: this.state.activeTab === '1'}, 'menu_tab menu_tab_1')}>
                                            <a
                                                href="javascript:void(0)" onClick={() => {
                                                this.toggle('1');
                                            }}><span>Dashboard</span> </a>
                                        </li>
                                        <li className={classnames({active: this.state.activeTab === '2'}, 'menu_tab menu_tab_2')}>
                                            <a
                                                href="javascript:void(0)" onClick={() => {
                                                this.toggle('2');
                                            }}><span>Data</span></a>
                                        </li>
                                        <li className={classnames({active: this.state.activeTab === '3'}, 'menu_tab menu_tab_3')}>
                                            <a
                                                href="javascript:void(0)" onClick={() => {
                                                this.toggle('3');
                                            }}><span>Robots</span></a>
                                        </li>
                                        <li className={classnames({active: this.state.activeTab === '4'}, 'menu_tab menu_tab_4')}>
                                            <a
                                                href="javascript:void(0)" onClick={() => {
                                                this.toggle('4');
                                            }}><span>Settings</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="log_out_container">
                            <Row>
                                <ul>
                                    <li className={'menu_tab'}>
                                        <a className={'log_out_image'} href=""><span>Log out</span> </a>
                                    </li>
                                </ul>
                                <div className="collapse_menu_container menu_tab">
                                    <a href="javascript:void(0)" className="collapse_menu" onClick={() => {
                                        this.closeMenu();
                                    }}><span>Collapse menu</span></a>
                                </div>
                            </Row>
                        </div>

                    </div>
                </div>
                <div id="content" className={classnames(this.colContent)}>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Dashboard 
                                tableValue={this.state.activeTab == 1}
                                robots={this.state.robots}
                                balance={this.state.balance}
                            />
                        </TabPane>
                        <TabPane tabId="2" id={'dataBlock'}>
                            <DataBlock
                                crypto={this.state.crypto}/>
                        </TabPane>
                        <TabPane tabId="3" id={'robotsPage'}>
                            <RobotsPage
                                robots={this.state.robots}
                            />
                        </TabPane>
                        <TabPane tabId="4" id={'settingsPage'}>
                            <SettingsPage/>
                        </TabPane>
                    </TabContent>
                </div>
            </Row>
        );
    }
}
