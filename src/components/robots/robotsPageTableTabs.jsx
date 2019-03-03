import React from 'react';

import { RetButton } from './robotsBricks';

import WizardModal from "../modal/WizardModal.jsx";
import { NavPanelWidget, TabPaneWidget } from './tabWidget';
import { DoubleUniField } from '../common/commonBricks';


export default class RobotsPageTableTabs extends React.Component {
    elem;

    constructor(props) {
        super(props);
        this.elem =  this.props.elem;
        this.state = {
            activeTab: '1'
        };
        this.elementStat = {elementStat: this.elem};
        this.toggle = this.toggle.bind(this);
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
                <RetButton handler={this.props.toggleBlockTest.bind(this, false)}/>
                <div className={'coin_icon float-left ' + this.elementStat.elementStat.coin_class}>
                    <div className={'robot_name_detail'}>{this.elementStat.elementStat.robot_name}</div>
                    <DoubleUniField spanClassName1={'name_detail'} value1={this.elementStat.elementStat.coin_name}
                                    spanClassName2={'exchange_detail'} value2={this.elementStat.elementStat.exchange}/>
                </div>
                <div className={'float-left initial_container'}>
                    <DoubleUniField spanClassName1={'initial_name'} value1={'Initial Capital'}
                                    spanClassName2={'initial_value'} value2={this.elementStat.elementStat.initial_capital}/>
                    <DoubleUniField spanClassName1={'initial_name'} value1={'Started'}
                                    spanClassName2={'initial_value'} value2={this.elementStat.elementStat.started}/>
                </div>
                <WizardModal />
                <div className={'robots_container robots_page_container robots_table_container'}>
                    <div>
                        <NavPanelWidget toggle={this.toggle}
                                        activeTab={this.state.activeTab}/>
                        <TabPaneWidget activeTab={this.state.activeTab}
                           coin_name={this.elementStat.elementStat.coin_name}/>
                    </div>
                </div>
            </div>
        )
    }
}
