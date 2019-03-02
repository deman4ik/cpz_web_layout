/*
*   Компоненты разбивки, которые могут быть использованы в различных частях проекта
*/

import React from 'react';
import { Row } from 'reactstrap';

import RobotsMiniTable from './robotsMiniTable.jsx';

export const CoinState = (props) => (
    <div className={props.cryptoBalanceIcon}>
        <span className={'crypto_balance_name ' + (props.changePerc.search(/\+/) > -1 ? 'crypto_balance_name_top' : 'crypto_balance_name_bottom')}>{props.balanceName}</span>
        <span>{props.balanceDollar}</span>
    </div>
)

export const CoinChange = (props) => (
    <div className={props.coinChangeClass ? props.coinChangeClass : 'col-1'}>
        <span className={props.change_proc.search(/\+/) > -1 ? 'green_info' : 'red_info'}>{props.change_proc}</span>
        <span>{props.change_val}</span>
    </div>
)

export const Balance = (props) => (
    <div className={props.balanceClassName ? props.balanceClassName : "col-1 col-1_5 d-flex align-items-center justify-content-flex-start"}>
        <div className="row ">
            <span>{props.balance}</span>
        </div>
    </div>
)

export const Exchange = (props) => (
    <div className="col-1 align-self-center">
        <span>{props.exchange}</span>
    </div>
)

// TODO - проверить возможность преобразования RoboName и Coin в один элемент
export const RoboName = (props) => (
    <div className={props.col_class + " align-self-center"}>
        <Row>
            <span>{props.robot_name}</span>
        </Row>
    </div>
)

export const Coin = (props) => (
    <div className="col-1 align-self-center">
        <Row>
            <span className={'coin_icon ' + props.coin_class}>{props.coin_name}</span>
        </Row>
    </div>
)

// TODO - проверить возможность преобразования CoinInfoCell и InfoCell в один элемент
export const CoinInfoCell = (props) => (
    <div className="col-2 align-self-center">
        <span>{props.capital} {props.coin_name}</span>
        <span className={'old_coin_value'}>{props.capital_old}</span>
    </div>
)

export const InfoCell = (props) => (
    <div className={props.divClassName}>
        <span>{props.top_value}</span>
        <span className={props.spanClassName}>{props.bottom_value}</span>
    </div>
)

export const MiniChart = (props) => (
    <div className={props.col_class + " align-self-center"}>
        <div className=" d-flex justify-content-start flex-row align-items-center">
            <div>
                <RobotsMiniTable data={props.data} color={props.color} color2={props.color2}/>
            </div>
            <div className={'table_robot_value'}>
                <span className={props.performance_val.search(/\+/) > -1 ? 'green_info' : 'red_info'}>{props.performance_val}</span>
                <span className={(props.performance_val_old.search(/\+/) > -1 ? 'green_info' : 'red_info') + ' old_coin_value'}>{props.performance_val_old}</span>
            </div>
        </div>
    </div>
)

export class RoboButton extends React.Component {
    render () {
        return(
            <div className="d-flex align-self-center button_container">
                <Row>
                    <button className={this.props.button_class}>{this.props.button_val}</button>
                </Row>
            </div>
        )
    }
}

export class RoboCheckbox extends React.Component {
    render () {
        if (this.props.type === 'text') {
            return (
                <div>
                    <div className="row">
                        <span className={'buttonText_value '}>Active</span>
                        <span className="old_buttonText_value">{this.props.started}</span>
                    </div>
                </div>
            )
        }
        else {
            return (
                <Row>
                    <div className="col-12 d-flex align-self-right justify-content-end button_container ">
                        <input defaultChecked={this.props.button_checkbox} type="checkbox" id="test1"/>
                        <label htmlFor="test1"> </label>
                    </div>
                </Row>
            )
        }
    }
}

export const CryptoHeader = () => (
    <div className="row">
        <div className="col-2 col-1_5">Coin</div>
        <div className="col-1">24h Change</div>
        <div className="col-2">Market Cap</div>
        <div className="col-2">Volume 24h</div>
        <div className="col-2">Circulating Supply</div>
        <div className="col-2">Max Supply</div>
        <div className="col-1 col-1_5">
            <div className="row">
                Balance
            </div>
        </div>
    </div>
)

export const ContainerName = props => (
    <div className={props.className}>
        <span>{props.name}</span>
    </div>
)