import React from 'react';

import { ContainerName } from '../common/commonBricks';
import { FieldWidget, ExtraCheckBox } from './settingsBricks.jsx';
import OtherAccount from "./otherAccount.jsx";
import AddAccount from "./addAccount.jsx";
import ExtraSettingsElement from "./extraSettingsElement.jsx";

export const ProfileContainer = props => (
    <div className={"content_container"}>
        <ContainerName className={'settings_title profile_icon'} name={'Profile'}/>
        <form className={"profile_form col-12"} action="">
            <FieldWidget fieldName={"Username*"} placeholder={"John Smith"} onChange={props.handleChange} />
            <div className={"justify-content-end  buttons_save_and_cancel_container " + props.elemStatus}>
                <span className="button_save_green">Save</span>
                <span className="button_cancel">Cancel</span>
            </div>
            <FieldWidget fieldName={"E-mail*"} placeholder={"johnsmithmail@mail.ru"} />
            <FieldWidget fieldName={"Telegram username"} placeholder={"Enter your name"} />
            <div className="form_button_container">
                <a href="#">Password</a>
                <button className={'standard_button'}>Change Password</button>
            </div>
        </form>
    </div>
)

export const AccountBalanceContainer = props => (
    <div>
        <div className="row">
            <ContainerName className={'settings_title balance_icon'} name={'Cryptuoso Account Balance'}/>
        </div>
        {props.account.balances.map(balance => (
            <div className="col-12 profile_balance_line" key={props.account.balances.indexOf(balance)}>
                <span className={"profile_balance_name"}>{balance.name}</span>
                <span className={"profile_balance_value"}>{balance.value}</span>
            </div>
        ))}
        <button className={'standard_button'}>Deposit</button>
        <p>
            We assure you that your payment can be securely made in accordance
            with the international standards of online payment.
          </p>
    </div>
)

export const AccountsContainer = props => (
    <div className="col-12 content_container">
        <div className="row">
            <ContainerName className={'settings_title account_icon'} name={'Accounts'}/>  
            <div className="col-12 other_account_card_container_main">
                <div className="row">
                    {props.account.accounts.map(account => (
                        <OtherAccount
                            key={props.account.accounts.indexOf(account)}
                            account_name={account.name}
                            exchange={account.exchange}
                            main_keys_status={account.main_keys_st}
                            spared_status_keys={"None"}
                            currency={"BTC, ETC"}
                        />
                    ))}
                    <AddAccount />
                </div>
            </div>
        </div>
    </div>
)

export const ExtraSettingsContainer = () => (
    <div className="col-12 content_container">
        <div className="row">
            <ContainerName className={'settings_title settings_icon'} name={'Extra'}/>
            <ExtraSettingsElement />
            <ExtraSettingsElement />
            <ExtraSettingsElement />
        </div>
        <ExtraCheckBox checkBoxName={"Balance Display"}
            checkBoxText={"Generate and specify a spare key pair to avoid connection problems with the exchange."} />
        <ExtraCheckBox checkBoxName={"Additional checkbox ON"}
            checkBoxText={"Access to all notification features"} />
        <ExtraCheckBox checkBoxName={"Additional checkbox OFF"}
            checkBoxText={"Generate and specify a spare key pair."} />
    </div>
)