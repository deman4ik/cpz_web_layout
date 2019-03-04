import React from 'react';
import {Row} from 'reactstrap';

import Menu from '../components/menu/menu.jsx';
import TabContainer from '../components/appTabs/tabContainer.jsx';
import { Robots, Crypto, Balance, Account } from '../demo_data/demo.jsx';

/* 
*   Это корневой компонент приложения. В нем расположено основное разделение на два контейнера.
*   Контейнер Menu предназначен для отрисовки элементов меню.
*   Контейнер TabContainer предназначен для отрисовки содержимого страниц.    
*/

export default class Root extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            robots: Robots,
            crypto: Crypto,
            balance: Balance,
            account: Account
        };
        this.activeMenu = false;
        this.colMenu = 'col-2'
        this.colContent = 'col-10'
        if (window.innerWidth < 767) {
            this.colMenu = 'col-1'
            this.colContent = 'col-11'
            this.activeMenu = true;
        }
    }
    toggle(tab) {
        // Переключение между страницами
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    closeMenu() {
        // Сворачивание меню
        if (this.activeMenu) {
            this.activeMenu = false;
            this.setState({
                activeMenu: false
            });
            this.colMenu = 'col-2'
            this.colContent = 'col-10'
        } else {
            this.activeMenu = true;
            this.setState({
                activeMenu: true
            });
            this.colMenu = 'col-1'
            this.colContent = 'col-11'
        }
    }
    render() {
        return (
            <Row>
                <Menu activeMenu={this.activeMenu} colMenu={this.colMenu}
                      activeTab={this.state.activeTab}
                      closeMenu={this.closeMenu.bind(this)}
                      toggle={this.toggle.bind(this)}/>
                <TabContainer colContent={this.colContent} activeTab={this.state.activeTab}
                              tableValue={this.state.activeTab == 1}
                              robots={this.state.robots}
                              balance={this.state.balance}
                              crypto={this.state.crypto}
                              account={this.state.account}/>
            </Row>
        );
    }
}
