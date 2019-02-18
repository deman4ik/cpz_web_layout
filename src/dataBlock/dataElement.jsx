import React from 'react';
import {Row, Col} from 'reactstrap';






export default class dataElement extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div onClick={this.props.onClickElem} className="col-12 balance_line_container">
                <div className="row">
                    <div className={"col-1_5 data_page_content_icon " + this.props.crypto_balance_icon}>
                        <span className={'crypto_balance_name crypto_balance_name_top crypto_balance_name'}>{this.props.balance_name}</span>
                        <span>{this.props.balance_dollar}</span>
                    </div>
                    <div className="col-1">
                        <span className={'green_info'}>{this.props.change_proc}</span>
                        <span>{this.props.change_val}</span>
                    </div>
                    <div className="col-2">
                        <span>{this.props.market_cap_dollar}</span>
                        <span className={'data_page_blue_text'}>{this.props.market_cap_value}</span>
                    </div>
                    <div className="col-2">
                        <span>{this.props.volume_24h_dollar}</span>
                        <span className={'data_page_blue_text'}>{this.props.volume_24h_val}</span>
                    </div>
                    <div className="col-2">
                        <span>{this.props.circulating_supply_dollar}</span>
                        <span className={'data_page_blue_text'}>{this.props.circulating_supply_val}</span>
                    </div>
                    <div className="col-2">
                        <span>{this.props.max_supply_dollar}</span>
                        <span className={'data_page_blue_text'}>{this.props.max_supply_val}</span>
                    </div>
                    <div className="col-1 col-1_5 d-flex align-items-center justify-content-flex-start">
                        <div className="row ">
                            <span>{this.props.balance}</span>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}