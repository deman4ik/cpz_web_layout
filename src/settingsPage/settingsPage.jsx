import React from 'react';
// import {Row, Col} from 'reactstrap';

import OtherAccount from './otherAccount.jsx';
import AddAccount from './addAccount.jsx';
import ExtraSettingsElement from './extraSettingsElement.jsx';


export default class SettingsPage extends React.Component {
    elemStatus;

    constructor(props) {
        super(props);


        this.handleChange = this.handleChange.bind(this);
        this.state = {value: ''};
        this.elemStatus = 'hidden_element'
    }

    handleChange(e) {
        this.setState({value: e.target.value});
        if (e.target.value !== '') {
            this.elemStatus = 'd-flex';
        }
    }

    render() {
        return (
            <div className={'row'}>
                <div className="col-6 ">
                    <div className={'content_container'}>
                        <div className="settings_title profile_icon">Profile</div>
                        <form className={'profile_form col-12'} action="">

                            <label>
                                <span>Username*</span>
                                <input type="text" placeholder={'John Smith'} onChange={this.handleChange}/>

                            </label>
                            <div className={" justify-content-end  buttons_save_and_cancel_container "+this.elemStatus}>
                                <span className="button_save_green">Save</span>
                                <span className="button_cancel">Cancel</span>
                            </div>
                            <label>
                                <span>E-mail*</span>
                                <input type="text" placeholder={'johnsmithmail@mail.ru'}/>
                            </label>
                            <label>
                                <span>Telegram username</span>
                                <input type="text" placeholder={'Enter your name'}/>
                            </label>
                            <div className="form_button_container">
                                <a href="#">Password</a>
                                <input type="submit" value={'Change Password'}/>

                            </div>

                        </form>
                    </div>


                </div>
                <div className="col-6  content_container profile_balance">
                    <div className="row">
                        <div className="settings_title balance_icon">Cryptuoso Account Balance</div>
                    </div>

                    <div className="col-12 profile_balance_line">
                        <span className={'profile_balance_name'}>BTC</span>
                        <span className={'profile_balance_value'}>2.23845521 BTC</span>
                    </div>


                    <div className="col-12 profile_balance_line">
                        <span className={'profile_balance_name'}>USD</span>
                        <span className={'profile_balance_value'}>$ 6,537.13</span>
                    </div>
                    <div className="col-12 profile_balance_line">
                        <span className={'profile_balance_name'}>EUR</span>
                        <span className={'profile_balance_value'}>€ 6,537.13</span>
                    </div>

                    <a href="#"> Deposit</a>
                    <p>We assure you that your payment can be securely made in accordance with the international
                        standards of online payment.</p>
                </div>
                <div className="col-12  other_accounts">
                    <div className="col-12 content_container">
                        <div className="row">
                            <div className="settings_title account_icon ">Accounts</div>
                            <div className="col-12 other_account_card_container_main">
                                <div className="row">

                                    <OtherAccount account_name={'My Bitfinex ETH 001'} exchange={'BITFINEX'}
                                                  main_keys_status={'Verified'} spared_status_keys={'None'}
                                                  currency={'BTC, ETC'}/>


                                    <OtherAccount account_name={'My Bitfinex ETH 002'} exchange={'OKEX'}
                                                  main_keys_status={'Wrong Keys'} spared_status_keys={'Verified'}
                                                  currency={'BTC'}/>


                                    <OtherAccount account_name={'My Bitfinex ETH 003'} exchange={'BITFINEX'}
                                                  main_keys_status={'Verified'} spared_status_keys={'Wrong Keys'}
                                                  currency={'ETC'}/>


                                    <AddAccount/>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12  extra_settings">
                    <div className="col-12 content_container">
                        <div className="row">
                            <div className="settings_title settings_icon ">Extra</div>


                            <ExtraSettingsElement/>
                            <ExtraSettingsElement/>
                            <ExtraSettingsElement/>

                        </div>
                        <div className="extra_checkbox">
                            <label className="control control--checkbox">Balance Display
                                <input type="checkbox"/>
                                <div className="control__indicator"></div>
                                <span>Generate and specify a spare key pair to avoid connection problems with the exchange.</span>

                            </label>
                        </div>

                        <div className="extra_checkbox">
                            <label className="control control--checkbox">Additional checkbox ON
                                <input type="checkbox"/>
                                <div className="control__indicator"></div>
                                <span>Access to all notification features</span>

                            </label>
                        </div>

                        <div className="extra_checkbox">
                            <label className="control control--checkbox">Additional checkbox OFF
                                <input type="checkbox"/>
                                <div className="control__indicator"></div>
                                <span>Generate and specify a spare key pair.</span>

                            </label>
                        </div>
                    </div>


                </div>
            </div>

        )
    }
}