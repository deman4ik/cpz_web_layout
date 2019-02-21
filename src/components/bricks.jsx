import React from 'react';
import { Row } from 'reactstrap';

import RobotsMiniTable from './robotsMiniTable.jsx';

export const Coin = (props) => (
    <div className="col-1 align-self-center">
        <Row>
            <span className={'coin_icon ' + props.coin_class}>{props.coin_name}</span>
        </Row>
    </div>
)

export const CoinInfoCell = (props) => (
    <div className="col-2 align-self-center">
        <span>{props.capital} {props.coin_name}</span>
        <span className={'old_coin_value'}>{props.capital_old}</span>
    </div>
)

export const DateInfoCell = (props) => (
    <div className="align-self-center">
        <span>{props.started}</span>
        <span className={'old_coin_value'}>{props.started_day}</span>
    </div>
)

export const RoboName = (props) => (
    <div className={props.col_class + " align-self-center"}>
        <Row>
            <span>{props.robot_name}</span>
        </Row>
    </div>
)

export const Exchange = (props) => (
    <div className="col-1 align-self-center">
        <span>{props.exchange}</span>
    </div>
)

export const MiniChart = (props) => (
    // col-2 col-2_5
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