import React from 'react';

import RobotsBlock from '../components/dashboard/robots/robots.jsx';
import BalanceContainer from '../components/dashboard/balance/container.jsx';
import TotalPerfContainer from '../components/dashboard/totalPerformance/container.jsx';

export default class SettingsPage extends React.Component {
    render() {
        return (
            <div className="row dashboard_container">
                <div className="col-6 balance_block">
                    <BalanceContainer balance={this.props.balance}/>
                </div>
                <div className="col-6 total_performance_container">
                    <TotalPerfContainer tableValue={this.props.tableValue}/>
                </div>
                <div id='robots_container'>
                    <RobotsBlock robots={this.props.robots} />
                </div>
            </div>

        )
    }
}
