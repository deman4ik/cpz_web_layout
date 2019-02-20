import React from 'react';

import EditExchange from './EditExchange.jsx';
import DeleteExchange from './deleteAccount.jsx';


export default class OtherAccount extends React.Component {
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

                            <span className={'account_info_name'}>Account name</span>
                            <span className={'account_info_value'}>{this.props.account_name}</span>

                            <span className={'account_info_name'}>Exchange</span>
                            <span className={'account_info_value'}>{this.props.exchange}</span>
                        </div>

                        <div className="account_info_block ">
                            <span className={'account_info_name'}>Main keys status</span>
                            <span className={this.getElementColor(this.props.main_keys_status)}>{this.props.main_keys_status}</span>

                            <span className={'account_info_name'}>Spared status keys</span>
                            <span className={this.getElementColor(this.props.spared_status_keys)}>{this.props.spared_status_keys}</span>
                        </div>

                        <div className="account_info_block_bottom ">
                            <span className={'account_info_name'}>Currency</span>
                            <span className={'account_info_value'}>{this.props.currency}</span>
                        </div>
                    </div>

                    <EditExchange/>
                    <DeleteExchange/>

                </div>
            </div>
        )
    }

}