import React from 'react';
import {Row, Col} from 'reactstrap';

import BalanceBlock from '../../tables/balanceBlock/balanceBlock.jsx';
import ChartComponent from "../../tables/totalPerformance/totalPerfomance.jsx"

import RobotsBlock from './robots.jsx';
import CounDropdowns from './counDropdowns.jsx';


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
                        <div className=" row crypto_balance">

                            <div className="col-4 crypto_balance_icon crypto_balance_icon_bitcoin">
                                                <span
                                                    className={'crypto_balance_name crypto_balance_name_top'}>Bitcoin</span>
                                <span>$ 6,422.11</span>

                            </div>
                            <div className="col-4">
                                <span className="currency_growth">+ 12,23%</span>
                                <span>+ 40,75 $</span>

                            </div>
                            <div className="col-4 align-self-center text-right">
                                <span> 1.23845521 BTC</span>
                            </div>
                        </div>
                        <div className="row crypto_balance ">
                            <div className="col-4 crypto_balance_icon crypto_balance_icon_etherium">
                                                <span
                                                    className={'crypto_balance_name crypto_balance_name_bottom'}>Etherium</span>
                                <span>$ 421,21</span>
                            </div>
                            <div className="col-4">
                                <span className="currency_fall">− 18,27%</span>
                                <span>− 24,12 $</span>
                            </div>
                            <div className="col-4 align-self-center text-right">
                                <span>  134.28762974 ETH</span>

                            </div>
                        </div>
                        <div className=" row crypto_balance ">
                            <div className="col-4 crypto_balance_icon crypto_balance_icon_RIPPLE">
                                                <span
                                                    className={'crypto_balance_name crypto_balance_name_top'}>Ripple</span>
                                <span>$ 64,41</span>
                            </div>
                            <div className="col-4">
                                <span className="currency_growth">+ 8,13%</span>
                                <span>+ 13,89 $</span>
                            </div>
                            <div className="col-4 align-self-center text-right">
                                <span>160.29867236 XRP</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 total_performance_container">
                    <div className="col-12 total_performance_title total_performance_icon">
                        <span>Total performance</span></div>
                    <div id="total_performance">
                    <ChartComponent onClickElemStatus = {this.props.tableValue}/>
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