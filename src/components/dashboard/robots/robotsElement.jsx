import React from 'react';
import {Row} from 'reactstrap';

import { SingleUniField, DoubleUniField, MiniChart, RoboButton } from '../../common/commonBricks.jsx';


/*
*   Строка сводной таблицы роботов для дэшборда
*       robot_name - наименование робота
*       coin_name - криптовалюта
*       coin_class - икона криптовалюты
*       exchange - обмен
*       initial_capital, initial_capital_old - начальный капитал
*       robot_balance - текущий баланс робота
*       data, color, color2 - данные для миниграфика
*       started, started_day - данные о дате запуска робота
*       button_class, button_val - данные для отображения кнопки
*/
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
                    <SingleUniField className={'col-1 align-self-center'}
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
                    <MiniChart data={this.data} color={this.props.color} color2={this.props.color2}
                               performance_val={this.props.performance_val}
                               performance_val_old={this.props.performance_val_old}
                               col_class={"col-2 col-2_5"}/>
                    <div className="col-2 col-2_5 align-self-center">
                        <div className="row d-flex align-self-center justify-content-between flex-row robots_container_for_button">
                            <DoubleUniField className={'align-self-center'}
                                      value1={this.props.started} 
                                      spanClassName2={'old_coin_value'} value2={this.props.started_day}
                            />
                            <RoboButton button_class={this.props.button_class} button_val={this.props.button_val}/>
                        </div>
                    </div>
                </Row>
                <a href="#"></a>
            </div>
        )
    }
}