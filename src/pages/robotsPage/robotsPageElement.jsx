import React from 'react';
import {Row, Col} from 'reactstrap';

// import * as d3 from "d3";

// import * as ReactD3 from "react-d3-components";
import RobotsMiniTable from '../../elements/robotsMiniTable.jsx';

// var AreaChart = ReactD3.AreaChart;


export default class robotsPageElement extends React.Component {
    buttonText;

    constructor(props) {
        super(props);

        this.data = this.props.data;


        if (this.props.button_type == 'text') {
                this.buttonText =
                <div>
                    <div className="row">
                        <span className={'buttonText_value '}>Active</span>
                        <span className="old_buttonText_value">{this.props.started}</span>
                    </div>
                </div>

        }else {
            this.buttonText = <Row>

                <div className="col-12 d-flex align-self-right justify-content-end button_container ">

                    <input checked = {this.props.button_checkbox} type="checkbox" id="test1"/>
                    <label htmlFor="test1"> </label>

                </div>
            </Row>
        }

    }

    render() {
        return (

            <div className={'col-12 robots_content_line robots_page_content_line'} onClick={this.props.onClick}>
                <Row>
                    <div className="col-2 align-self-center">
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
                    <div className="col-3 align-self-center">
                        <div className="d-flex justify-content-start flex-row align-items-end">
                            <div>

                                <RobotsMiniTable data={this.data} color={this.props.color} color2={this.props.color2} />

                            </div>
                            <div className="table_robot_value">
                                <span className={this.props.performance_class}>{this.props.performance_val}</span>
                                <span
                                    className={this.props.performance_class + ' old_coin_value'}>{this.props.performance_val_old}</span>
                            </div>


                        </div>
                    </div>
                    <div className="col-1 align-self-center">
                        {this.buttonText}
                    </div>
                </Row>
            </div>

        )
    }
}