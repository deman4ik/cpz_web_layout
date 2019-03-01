import React from 'react';
import {Row} from 'reactstrap';


import RobotsMiniTable from '../robotsMiniTable.jsx';
import { Coin, CoinInfoCell, MiniChart, RoboCheckbox, RoboName, Exchange } from '../tableRowBricks.jsx';

export default class robotsPageElement extends React.Component {
    buttonText;

    render() {
        return (

            <div className={'col-12 robots_content_line robots_page_content_line'} onClick={this.props.onClick}>
                <Row>
                    <RoboName col_class={'col-2'} robot_name={this.props.robot_name}/>
                    <Coin coin_class={this.props.coin_class} coin_name={this.props.coin_name} />
                    <Exchange exchange={this.props.exchange}/>
                    <CoinInfoCell capital={this.props.initial_capital}
                                  coin_name={this.props.coin_name}
                                  capital_old={this.props.initial_capital_old}
                    />
                    <CoinInfoCell capital={this.props.robot_balance}
                                  coin_name={this.props.coin_name}
                                  capital_old={this.props.initial_capital_old}
                    />
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