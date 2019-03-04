/*
*   Компоненты разбивки, которые могут быть использованы в различных частях проекта
*/

import React from 'react';
import { Row } from 'reactstrap';

import RobotsMiniTable from './robotsMiniTable.jsx';

/* 
*   Универсальное многоцелевое поле с двумя строчными элементами
*   Вид определяется параметрами, переданными в имя класса
*   для div и span. Имя класса не обязательно.
*       className - имя класса div.
*       spanClassName1 и spanClassName2 - имя класса первого и второго
*           строчных элементов соответственно.
*       value1 и value2 - текст, отображаемый в первом и втором
*           строчных элементах.
*/
export const DoubleUniField = (props) => (
    <div className={props.className}>
        <span className={props.spanClassName1}>{props.value1}</span>
        <span className={props.spanClassName2}>{props.value2}</span>
    </div>
)

/* 
*   Универсальное многоцелевое поле с одним строчным элементом.
*   Вид определяется именами класса для div и span.
*       className - имя класса div.
*       spanClassName - имя класса span.
*       value - текстовое содержимое span.
*       noRow - проперти для отключения Row в поле. Влияет на
*           положение текста в span.
*/
export class SingleUniField extends React.Component{
    render () {
        if (this.props.noRow) {
            return (
                <div className={this.props.className}>
                    <span className={this.props.spanClassName}>{this.props.value}</span>
                </div>
            )
        }
        else {
            return (
                <div className={this.props.className}>
                    <Row>
                        <span className={this.props.spanClassName}>{this.props.value}</span>
                    </Row>
                </div>
            )
        }
    }
}

/* 
*   Мини-график, использующийся в таблицах.
*       className - класс div;
*       data - данные для отрисовки графика
*       color, color2 - цвета для отрисовки графика.
*           Зависят от изменений в данных (красный при 
*           негативных изменениях, зеленый - при позитивных).
*       perfomance_val, perfomance_val_old - текущее и последнее
*           предыдущее зафиксированное изменение
*/
export const MiniChart = (props) => (
    <div className={props.col_class + " align-self-center"}>
        <div className=" d-flex justify-content-start flex-row align-items-center">
            <div>
                <RobotsMiniTable data={props.data} color={props.color} color2={props.color2}/>
            </div>
            <DoubleUniField className={'table_robot_value'}
                            spanClassName1={props.performance_val.search(/\+/) > -1 ? 
                                      'green_info' : 'red_info'} value1={props.performance_val}
                            spanClassName2={(props.performance_val_old.search(/\+/) > -1 ? 'green_info' : 'red_info') + ' old_coin_value'}
                            value2={props.performance_val_old}
            />
        </div>
    </div>
)

/* 
*   Табличная кнопка робота.
*   className - класс кнопки
*   button_val - наименование кнопки
*/
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

/*
*   Многофункциональное поле
*       type - если text - текстовое поле с датой начала активности
*       started - дата начала функционирования робота
*       button_checkbox - состояние чекбокса по-умолчанию (type не text!)
*/
export class RoboCheckbox extends React.Component {
    render () {
        if (this.props.type === 'text') {
            return (
                <div>
                    <DoubleUniField className={'row'}
                      spanClassName1={'buttonText_value'} value1={'Active'}
                      spanClassName2={'old_buttonText_value'} value2={this.props.started}/>
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

/* Хедер таблицы криптовалюты */
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

/*
*   Заголовок контейнеров
*       className - стиль заколовка + икона
*       name - наименование контейнера
*/
export const ContainerName = props => (
    <div className={props.className}>
        <span>{props.name}</span>
    </div>
)