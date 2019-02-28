import React from 'react';

import DataElementCollapse from "./dataElementCollapse.jsx";

export default class dataBlock extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {collapse: false};
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    render() {
        return (

            <div className="row search_container">




                <div className="col-12">
                    <div className="row">
                        <div className="col-8">
                            <div className="row input_container_for_data_page">
                                <input type="text" placeholder={'Search…'}/>
                                <button className={'search_button button_search_icon'}></button>
                            </div>
                        </div>
                        <div className="col-4">
                            <button className={'search_button_down arrow_data_down'}></button>
                           <span className={'search_text'}>
                               List of coins for which we have robots currently. New listings will be published here.
                           </span>
                        </div>
                    </div>
                </div>
                <div className="col-12 data_page_content">
                    <div className="data_page_title">
                        <span>Data</span>
                    </div>
                    <div className="col-12 data_page_tables_header">
                        <div className="row">
                            <div className="col-2 col-1_5">Coin</div>
                            <div className="col-1">24h Change</div>
                            <div className="col-2">Market Cap</div>
                            <div className="col-2">Volume 24h</div>
                            <div className="col-2">Circulating Supply</div>
                            <div className="col-2">Max Supply</div>
                            <div className="col-1 col-1_5">
                                <div className="row">
                                    Balance
                                </div>
                            </div>
                        </div>
                    </div>


                    <DataElementCollapse balance_name={'Bitcoin'} balance_dollar={'$ 6,312.31'}
                                         crypto_balance_icon={'crypto_balance_icon_bitcoin'}
                                         change_proc={'+ 12,23%'} change_val={'+ 12,23%'}
                                         market_cap_dollar={'$ 6,312.31'} market_cap_value={'0.78365479 BTC'}
                                         volume_24h_dollar={'$ 6,312.31'} volume_24h_val={'0.78365479 BTC'}
                                         circulating_supply_dollar={'$ 6,312.31'}
                                         circulating_supply_val={'0.78365479 BTC'}
                                         max_supply_dollar={'$ 6,312.31'} max_supply_val={'0.78365479 BTC'}
                                         balance={'3.87235789 BTC'}/>


                    <DataElementCollapse balance_name={'Etherium'} balance_dollar={'$ 1,422.11'}
                                         crypto_balance_icon={'crypto_balance_icon_etherium'}
                                         change_proc={'+ 1,53%'} change_val={'+ 40,75 $'}
                                         market_cap_dollar={'$ 1,876.14'} market_cap_value={'0.78365479 ETH'}
                                         volume_24h_dollar={'$ 1,287.16'} volume_24h_val={'0.78365479 ETH'}
                                         circulating_supply_dollar={'$ 1,876.14'}
                                         circulating_supply_val={'0.78365479 ETH'}
                                         max_supply_dollar={'$ 1,287.16'} max_supply_val={'0.78365479 ETH'}
                                         balance={'1.98362546 ETH'}/>

                    <DataElementCollapse balance_name={'Ripple'} balance_dollar={'$ 37.11'}
                                         crypto_balance_icon={'crypto_balance_icon_RIPPLE'}
                                         change_proc={'+ 10,16%'} change_val={'+ 40,75 $'}
                                         market_cap_dollar={'$ 48,15'} market_cap_value={'0.78365479 ETH'}
                                         volume_24h_dollar={'$ 43,11'} volume_24h_val={'0.78365479 ETH'}
                                         circulating_supply_dollar={'$ 48,15'} circulating_supply_val={'0.78365479 ETH'}
                                         max_supply_dollar={'$ 43,11'} max_supply_val={'0.78365479 ETH'}
                                         balance={'3.87235789 XRP'}/>

                    <DataElementCollapse balance_name={'Litecoin'} balance_dollar={'$ 48.74'}
                                         crypto_balance_icon={'crypto_balance_icon_litecoin'}
                                         change_proc={'+ 8,78%'} change_val={'+ 40,75 $'}
                                         market_cap_dollar={'$ 48,98'} market_cap_value={'0.78365479 ETH'}
                                         volume_24h_dollar={'$ 43,11'} volume_24h_val={'0.78365479 ETH'}
                                         circulating_supply_dollar={'$ 48,15'} circulating_supply_val={'0.78365479 ETH'}
                                         max_supply_dollar={'$ 43,11'} max_supply_val={'0.78365479 ETH'}
                                         balance={'1.98362546 LTC'}/>


                    <DataElementCollapse balance_name={'Dash'} balance_dollar={'$ 48.74'}
                                         crypto_balance_icon={'crypto_balance_icon_dash'}
                                         change_proc={'+ 8,78%'} change_val={'+ 40,75 $'}
                                         market_cap_dollar={'$ 467,18'} market_cap_value={'0.78365479 DASH'}
                                         volume_24h_dollar={'$ 489,18'} volume_24h_val={'0.78365479 DASH'}
                                         circulating_supply_dollar={'$ 467,18'}
                                         circulating_supply_val={'0.78365479 DASH'}
                                         max_supply_dollar={'$ 489,18'} max_supply_val={'0.78365479 DASH'}
                                         balance={'3.87235789 DASH'}/>


                    <DataElementCollapse balance_name={'Eth. Classic'} balance_dollar={'$ 789,15'}
                                         crypto_balance_icon={'crypto_balance_icon_ETH_Classic'}
                                         change_proc={'+ 2,19%'} change_val={'+ 40,75 $'}
                                         market_cap_dollar={'$ 765, 16'} market_cap_value={'0.78365479 ETC'}
                                         volume_24h_dollar={'$ 789,15'} volume_24h_val={'0.78365479 ETC'}
                                         circulating_supply_dollar={'$ 1,876.14'}
                                         circulating_supply_val={'0.78365479 v'}
                                         max_supply_dollar={'$ 765, 16'} max_supply_val={'0.78365479 ETC'}
                                         balance={'3.87235789 ETC'}/>


                </div>
            </div>


        )
    }

}