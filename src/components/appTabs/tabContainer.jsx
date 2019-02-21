import React from 'react';
import {TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';

import Dashboard from '../../pages/dashboard.jsx';
import DataBlock from '../../pages/crypto.jsx';
import RobotsPage from '../../pages/robots.jsx';
import SettingsPage from '../../pages/settings.jsx';

const TabContainer = props => (
    <div id="content" className={classnames(props.colContent)}>
        <TabContent activeTab={props.activeTab}>
            <TabPane tabId="1">
                <Dashboard tableValue={props.tableValue}
                           robots={props.robots}
                           balance={props.balance}/>
            </TabPane>
            <TabPane tabId="2" id={'dataBlock'}>
                <DataBlock crypto={props.crypto}/>
            </TabPane>
            <TabPane tabId="3" id={'robotsPage'}>
                <RobotsPage robots={props.robots} />
            </TabPane>
            <TabPane tabId="4" id={'settingsPage'}>
                <SettingsPage account={props.account}/>
            </TabPane>
        </TabContent>
    </div>
)

export default TabContainer;