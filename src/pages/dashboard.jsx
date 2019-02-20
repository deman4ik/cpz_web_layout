import React from 'react';

import BalanceBlock from '../components/dashboard/balanceBlock.jsx';
import ChartComponent from "../components/totalPerformance/totalPerfomance.jsx";
import CryptoMiniRow from "../components/dashboard/cryptoMiniRow.jsx";
import RobotsBlock from '../components/dashboard/robots.jsx';
import CounDropdowns from '../components/dashboard/counDropdowns.jsx';


export default class SettingsPage extends React.Component {
    render() {
        return (
            <div className="row dashboard_container">
                <div className="col-6 balance_block">
                    <div className="row">
                        <div className="col-3 balance_block_title balance_block_title_icon">
                            <span>Balance</span>
                        </div>
                        <div className="col-9 balance_block_title_name">
                            <CounDropdowns/>
                        </div>
                    </div>
                    <div id="balance_block">
                        <BalanceBlock valueName1="Bitfinex:" value1="67.12" valueName2="Okex:" value2="32.88"/>
                    </div>
                    <div className="row crypto_balance_title">
                        <div className="col-4">Name/Price</div>
                        <div className="col-4">24h change</div>
                        <div className="col-4 text-right">Balance</div>
                    </div>
                    <div className="col-12">
                        {this.props.balance.map(crypto => (
                            <CryptoMiniRow key={crypto.name}
                                crypto={crypto}
                            />
                        ))}
                    </div>
                </div>

                <div className="col-6 total_performance_container">
                    <div className="col-12 total_performance_title total_performance_icon">
                        <span>Total performance</span></div>
                    <div id="total_performance">
                        <ChartComponent onClickElemStatus = {this.props.tableValue}
                            coin_name={'BTC'}
                        />
                    </div>
                </div>
                <div id={'robots_container'}>

                  <RobotsBlock
                    robots={this.props.robots}
                  />
                </div>
            </div>

        )
    }
}