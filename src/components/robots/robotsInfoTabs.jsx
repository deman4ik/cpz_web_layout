import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import StatisticWidget from './statisticWidget/statisticWidget';
import { RoboLink, RoboHeader } from './robotsBricks';


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
    render() {
        return (
            <div className={'robots_tabs_container'}>
                <div className="col-12">
                    <Nav tabs>
                        <RoboLink activeTab={this.state.activeTab} toggle={this.toggle} name={'Statistics'} tabNum={"1"}/>
                        <RoboLink activeTab={this.state.activeTab} toggle={this.toggle} name={'Signals'} tabNum={"2"}/>
                        <RoboLink activeTab={this.state.activeTab} toggle={this.toggle} name={'Public Statistics'} tabNum={"3"}/>
                        <RoboLink activeTab={this.state.activeTab} toggle={this.toggle} name={'My Statistics'} tabNum={"4"}/>
                        <RoboLink activeTab={this.state.activeTab} toggle={this.toggle} name={'Trading History'} tabNum={"5"}/>
                    </Nav>
                </div>
                <div className="col-12">
                    <RoboHeader/>
                </div>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <StatisticWidget statistic={this.props.elem.statistic}/>
                    </TabPane>
                    <TabPane tabId="2">
                        <StatisticWidget statistic={this.props.elem.statistic}/>
                    </TabPane>
                    <TabPane tabId="3">
                        <StatisticWidget statistic={this.props.elem.statistic}/>
                    </TabPane>
                    <TabPane tabId="4">
                        <StatisticWidget statistic={this.props.elem.statistic}/>
                    </TabPane>
                    <TabPane tabId="5">
                        <StatisticWidget statistic={this.props.elem.statistic}/>
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}
