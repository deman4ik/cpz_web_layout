import React from 'react';
import { DoubleUniField, SingleUniField } from '../../common/commonBricks.jsx';

export default class CryptoMiniRow extends React.Component {
    constructor(props) {
        super(props);
        this.crypto = this.props.crypto;
    }

    render() {
        return(
            <div className=" row crypto_balance">
                <DoubleUniField className={this.crypto.class}
                          spanClassName1={'crypto_balance_name ' + (this.crypto.grouth.percent.search(/\+/) > -1 ? 
                                          'crypto_balance_name_top' : 'crypto_balance_name_bottom')} 
                          value1={this.crypto.name}
                          value2={this.crypto.dollar}/>
                <DoubleUniField className={'col-4'}
                          spanClassName1={this.crypto.grouth.percent.search(/\+/) > -1 ? 'green_info' : 'red_info'}
                          value1={this.crypto.grouth.percent}
                          value2={this.crypto.grouth.dollar}/>
                <SingleUniField className={'col-4 align-self-center text-right'}
                                value={this.crypto.crypto}/>
            </div>
        )
    }
}
