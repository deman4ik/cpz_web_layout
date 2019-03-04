import React from 'react';
import {Row} from 'reactstrap';

import { SingleUniField, DoubleUniField, MiniChart, RoboCheckbox } from '../common/commonBricks.jsx';


/* 
*   Данные робота, распределенные по ячейкам табличной строки
*/
export default class robotsPageElement extends React.Component {
    buttonText;

    render() {
        return (

            <div className={'col-12 robots_content_line robots_page_content_line'} onClick={this.props.onClick}>
                <Row>
                    <SingleUniField className={'col-2 align-self-center'}
                                    value={this.props.robot_name}/>
                    <SingleUniField className={'col-1 align-self-center'}
                                    spanClassName={'coin_icon ' + this.props.coin_class}
                                    value={this.props.coin_name}/>
                    <SingleUniField className={'col-1 align-self-center'}
                                    value={this.props.exchange}
                                    noRow/>
                    <DoubleUniField className={"col-2 align-self-center"}
                                    spanClassName1={this.props.initial_capital} value1={this.props.coin_name}
                                    spanClassName2={'old_coin_value'} value2={this.props.initial_capital_old}/>
                    <DoubleUniField className={"col-2 align-self-center"}
                                    spanClassName1={this.props.robot_balance} value1={this.props.coin_name}
                                    spanClassName2={'old_coin_value'} value2={this.props.initial_capital_old}/>
                    <MiniChart data={this.props.data} color={this.props.color} color2={this.props.color2}
                               performance_val={this.props.performance_val}
                               performance_val_old={this.props.performance_val_old}
                               col_class={"col-3"}
                    />
                    <div className="col-1 align-self-center">
                        <RoboCheckbox type={this.props.button_type}
                                      started={this.props.started}
                                      button_checkbox={this.props.button_checkbox}
                        />
                    </div>
                </Row>
            </div>

        )
    }
}