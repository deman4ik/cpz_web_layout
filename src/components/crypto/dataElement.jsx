import React from 'react';
import { DoubleUniField, SingleUniField } from '../common/commonBricks.jsx';


/*
*   Табличная строка криптовалюты с размещенными по ячейкам данными
*/
export default class dataElement extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClickElem} className="col-12 balance_line_container">
                <div className="row">
                    <DoubleUniField className={"col-1_5 data_page_content_icon " + this.props.crypto_balance_icon}
                              spanClassName1={'crypto_balance_name ' + (this.props.change_proc.search(/\+/) > -1 ? 
                                              'crypto_balance_name_top' : 'crypto_balance_name_bottom')}
                              value1={this.props.balance_name} value2={this.props.balance_dollar}/>
                    <DoubleUniField className={'col-1'}
                              spanClassName1={this.props.change_proc.search(/\+/) > -1 ? 'green_info' : 'red_info'}
                              value1={this.props.change_proc} value2={this.props.change_val}/>
                    <DoubleUniField className={'col-2'}
                              value1={this.props.market_cap_dollar}
                              spanClassName2={'data_page_blue_text'} value2={this.props.market_cap_value}/>
                    <DoubleUniField className={'col-2'}
                              value1={this.props.volume_24h_dollar}
                              spanClassName2={'data_page_blue_text'} value2={this.props.volume_24h_val}/>
                    <DoubleUniField className={'col-2'}
                              value1={this.props.circulating_supply_dollar}
                              spanClassName2={'data_page_blue_text'} value2={this.props.circulating_supply_val}/>
                    <DoubleUniField className={'col-2'}
                              value1={this.props.max_supply_dollar}
                              spanClassName2={'data_page_blue_text'} value2={this.props.max_supply_val}/>
                    <SingleUniField className={'col-1 col-1_5 d-flex align-items-center justify-content-flex-start'}
                                value={this.props.balance}/>
                </div>
            </div>

        )
    }
}
