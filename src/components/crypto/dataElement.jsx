import React from 'react';
import { CoinState, CoinChange, InfoCell, Balance } from '../tableRowBricks.jsx';

export default class dataElement extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClickElem} className="col-12 balance_line_container">
                <div className="row">
                    <CoinState cryptoBalanceIcon={"col-1_5 data_page_content_icon " + this.props.crypto_balance_icon}
                               changePerc={this.props.change_proc}
                               balanceDollar={this.props.balance_dollar}
                               balanceName={this.props.balance_name}/>
                    <CoinChange change_proc={this.props.change_proc}
                                change_val={this.props.change_val}/>
                    <InfoCell divClassName={"col-2"}
                              spanClassName={'data_page_blue_text'}
                              top_value={this.props.market_cap_dollar}
                              bottom_value={this.props.market_cap_value}
                              />
                    <InfoCell divClassName={"col-2"}
                              spanClassName={'data_page_blue_text'}
                              top_value={this.props.volume_24h_dollar}
                              bottom_value={this.props.volume_24h_val}
                              />
                    <InfoCell divClassName={"col-2"}
                              spanClassName={'data_page_blue_text'}
                              top_value={this.props.circulating_supply_dollar}
                              bottom_value={this.props.circulating_supply_val}
                              />
                    <InfoCell divClassName={"col-2"}
                              spanClassName={'data_page_blue_text'}
                              top_value={this.props.max_supply_dollar}
                              bottom_value={this.props.max_supply_val}
                              />
                    <Balance balance={this.props.balance}/>
                </div>
            </div>

        )
    }
}
