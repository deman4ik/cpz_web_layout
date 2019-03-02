import React from 'react';

import { RetButton, InfoField } from './robotsBricks';

import WizardModal from "../modal/WizardModal.jsx";
import { NavPanelWidget, TabPaneWidget } from './tabWidget';


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
                    <InfoField titleClass={'name_detail'} 
                               title={this.elementStat.elementStat.coin_name}
                               valueClass={'exchange_detail'}
                               value={this.elementStat.elementStat.exchange}
                    />
                </div>
                <div className={'float-left initial_container'}>
                    <InfoField titleClass={'initial_name'} 
                               title={'Initial Capital'}
                               valueClass={'initial_value'}
                               value={this.elementStat.elementStat.initial_capital}
                    />
                    <InfoField titleClass={'initial_name'} 
                               title={'Started'}
                               valueClass={'initial_value'}
                               value={this.elementStat.elementStat.started}
                    />
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
