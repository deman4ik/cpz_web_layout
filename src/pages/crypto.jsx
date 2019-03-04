/*
* Таб с таблицей криптовалют. В свернутом виде в таблице отражены криптовалюты,
* с которыми ведется работа. В развернутом состоянии показывается график изменения
* курса криптовалюты и 
*/

import React from 'react';

import DataElementCollapse from "../components/crypto/dataElementCollapse.jsx";
import { NoticedSearchWidget } from "../components/common/searchWidget";
import { CryptoHeader } from "../components/common/commonBricks";
import { ContainerName } from "../components/common/commonBricks";

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
                    <NoticedSearchWidget/>
                </div>
                <div className="col-12 data_page_content">
                    <ContainerName className={'data_page_title'} name={'Data'}/>
                    <div className="col-12 data_page_tables_header">
                        <CryptoHeader/>
                    </div>
                    {this.props.crypto.map(coin => (
                        <DataElementCollapse key={coin.id}
                            balance_name={coin.balance.name} balance_dollar={coin.balance.dollar} balance={coin.balance.current}
                            crypto_balance_icon={coin.balance.icon}
                            change_proc={coin.change.proc} change_val={coin.change.val}
                            market_cap_dollar={coin.market_cap.dollar} market_cap_value={coin.market_cap.value}
                            volume_24h_dollar={coin.volume_24h.dollar} volume_24h_val={coin.volume_24h.dollar}
                            circulating_supply_dollar={coin.circulating_supply.dollar} 
                            circulating_supply_val={coin.circulating_supply.value}
                            max_supply_dollar={coin.max_supply.dollar} 
                            max_supply_val={coin.max_supply.value}
                            news={coin.news}
                            code={coin.code}
                        />
                    ))}
                </div>
            </div>
        )
    }
}