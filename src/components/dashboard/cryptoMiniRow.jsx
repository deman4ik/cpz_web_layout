import React from 'react';
import { throws } from 'assert';

export default class CryptoMiniRow extends React.Component {
    constructor(props) {
        super(props);
        this.crypto = this.props.crypto;
    }
    render() {
        return (
            <div className=" row crypto_balance">
                <div className={this.crypto.class}>
                    <span className={'crypto_balance_name ' + (this.crypto.grouth.percent.search(/\+/) > -1 ? 'crypto_balance_name_top' : 'crypto_balance_name_bottom')}>{this.crypto.name}</span>
                    <span>{this.crypto.dollar}</span>
                </div>
                <div className="col-4">
                    <span className={this.crypto.grouth.percent.search(/\+/) > -1 ? 'currency_growth' : 'currency_fall'}>{this.crypto.grouth.percent}</span>
                    <span>{this.crypto.grouth.dollar}</span>
                </div>
                <div className="col-4 align-self-center text-right">
                    <span>{this.crypto.crypto}</span>
                </div>
            </div>
        )
    }
}
