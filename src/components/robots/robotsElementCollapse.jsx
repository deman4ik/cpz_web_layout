import React from 'react';

import RobotsPageElement from "./robotsPageElement.jsx";

/*
*   Табличная строка по конкретному роботу
*       robot_name - наименование робота
*       coin_name, coin_class - наименование и икона криптовалюты
*       exchange - обмен
*       initial_capital, initial_capital_old - начальный капитал (текущий, старый)
*       robot_balance, robot_balance_old - баланс робота (текущий, старый)
*       performance_val, performance_val_old - оборот (текущий, старый)
*       performance_class - состояние оборота
*       button_type, button_checkbox - информация для отображения чекбокса
*       data, color, color2 - данные для мини-чарта
*       statistic - статистика робота
*/
export default class dataElementCollapse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {elementStat: true};
    }

    render() {
        return (
            <div className={'robot_line_main_container'}>
                <RobotsPageElement onClick={this.props.onClick.bind(this, this.props)}  robot_name={this.props.robot_name}
                                   coin_name={this.props.coin_name} coin_class={this.props.coin_class}
                                   exchange={this.props.exchange} initial_capital={this.props.initial_capital}
                                   initial_capital_old={this.props.initial_capital_old}
                                   robot_balance={this.props.robot_balance}
                                   robot_balance_old={this.props.robot_balance_old}
                                   performance_val={this.props.performance_val}
                                   performance_val_old={this.props.performance_val_old}
                                   performance_class={this.props.performance_class}
                                   started={this.props.started} started_day={this.props.started_day}
                                   button_type={this.props.button_type}
                                   button_checkbox={this.props.button_checkbox}
                                   data={this.props.data}
                                   color={this.props.color}  color2={this.props.color2}
                                   statistic={this.props.statistic}
                />
            </div>
        )
    }
}
