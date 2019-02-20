import React from 'react';
import { Row } from 'reactstrap';

import RobotsMiniTable from '../../components/robotsMiniTable.jsx';


export default class RobotsElement extends React.Component {
    data;

    constructor(props) {
        super(props);
        this.data = this.props.data;
    }

    render() {
        return (

            <div className={'col-12 robots_content_line'}>
                <Row>
                    <div className="col-1 align-self-center">
                        <Row>
                            <span>{this.props.robot_name}</span>
                        </Row>
                    </div>
                    <div className="col-1 align-self-center">
                        <Row>
                            <span className={'coin_icon ' + this.props.coin_class}>{this.props.coin_name}</span>
                        </Row>
                    </div>
                    <div className="col-1 align-self-center">
                        <span>{this.props.exchange}</span>
                    </div>
                    <div className="col-2 align-self-center">
                        <span>{this.props.initial_capital} {this.props.coin_name}</span>
                        <span className={'old_coin_value'}>{this.props.initial_capital_old}</span>
                    </div>
                    <div className="col-2 align-self-center">
                        <span>{this.props.robot_balance} {this.props.coin_name}</span>
                        <span className={'old_coin_value'}>{this.props.initial_capital_old}</span>
                    </div>
                    <div className="col-2 col-2_5 align-self-center">
                        <div className=" d-flex justify-content-start flex-row align-items-center">
                            <div>
                                <RobotsMiniTable data={this.data} color={this.props.color} color2={this.props.color2}/>
                            </div>
                            <div className={'table_robot_value'}>
                                <span className={this.props.performance_val.search(/\+/) > -1 ? 'green_info' : 'red_info'}>{this.props.performance_val}</span>
                                <span
                                    className={(this.props.performance_val_old.search(/\+/) > -1 ? 'green_info' : 'red_info') + ' old_coin_value'}>{this.props.performance_val_old}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 col-2_5 align-self-center">

                            <div className="row d-flex align-self-center justify-content-between flex-row robots_container_for_button">
                                <div className="align-self-center">

                                        <span>{this.props.started}</span>
                                        <span className={'old_coin_value'}>{this.props.started_day}</span>

                                </div>
                                <div className="d-flex align-self-center button_container">
                                    <Row>
                                        <button className={this.props.button_class}>{this.props.button_val}</button>
                                    </Row>
                                </div>
                            </div>

                    </div>
                </Row>
                <a href="#"></a>

            </div>

        )
    }
}