import React from 'react';

// import {Collapse, Button, CardBody, Card} from 'reactstrap';


//import DataElement from "./dataElement.jsx";
//import DataElementTable from "./dataElementTable.jsx";
import DataElementCollapse from "../components/crypto/dataElementCollapse.jsx";

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
                            <div className="row">
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
                        />
                    ))}
                </div>
            </div>


        )
    }

}