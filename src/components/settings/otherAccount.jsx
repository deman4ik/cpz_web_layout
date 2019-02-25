import React from 'react';

import EditExchange from './EditExchange.jsx';
import DeleteExchange from './deleteAccount.jsx';
import { AccountInfoBlock } from './infoBlockWidget.jsx';
import { AccountInfoLine } from './settingsBricks.jsx';


export default class OtherAccount extends React.Component {
    /* It may be a statefull widget */
    getElementColor(elem){
        switch (elem) {
            case 'Verified':
                return 'account_info_value_green';
            case 'Wrong Keys':
                return  'account_info_value_red';
            case 'None':
                return 'account_info_value_grey';
        }
    }
    render() {
        return (
            <div className="col-3 other_account_card_container">
                <div className="col-12 other_account_card">
                    <div className="account_info row">
                        <div className="account_info_block ">
                            <AccountInfoBlock title1={"Account name"} class1={'account_info_value'} value1={this.props.account_name}
                                              title2={"Exchange"} class2={'account_info_value'} value2={this.props.exchange}/>
                        </div>
                        <div className="account_info_block ">
                            <AccountInfoBlock title1={"Main keys status"} class1={this.getElementColor(this.props.main_keys_status)} value1={this.props.main_keys_status}
                                              title2={"Spared status keys"} class2={this.getElementColor(this.props.spared_status_keys)} value2={this.props.spared_status_keys}/>
                        </div>
                        <div className="account_info_block_bottom ">
                            <AccountInfoLine title={'Currency'} class={'account_info_value'} value={this.props.currency}/>
                        </div>
                    </div>
                    <EditExchange/>
                    <DeleteExchange/>
                </div>
            </div>
        )
    }
}
