import React from 'react';
import { CoinState, CoinChange, Balance } from '../tableRowBricks.jsx';

export default class CryptoMiniRow extends React.Component {
    constructor(props) {
        super(props);
        this.crypto = this.props.crypto;
    }
    render() {
        return (
            <div className=" row crypto_balance">
                <CoinState crypto_balance_icon={this.crypto.class}
                           change_proc={this.crypto.grouth.percent}
                           balance_dollar={this.crypto.dollar}
                           balance_name={this.crypto.name}/>
                <CoinChange coinChangeClass={'col-4'}
                            change_proc={this.crypto.grouth.percent}
                            change_val={this.crypto.grouth.dollar}/>
                <Balance balanceClassName={"col-4 align-self-center text-right"}
                         balance={this.crypto.crypto}/>
            </div>
        )
    }
}
