import React from 'react';
import { Row } from 'reactstrap';

import { Coin, CoinInfoCell, InfoCell, MiniChart, RoboButton, RoboName, Exchange } from '../tableRowBricks.jsx';


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
                    <RoboName col_class={'col-1'} robot_name={this.props.robot_name}/>
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
                    <MiniChart data={this.data} color={this.props.color} color2={this.props.color2}
                               performance_val={this.props.performance_val}
                               performance_val_old={this.props.performance_val_old}
                               col_class={"col-2 col-2_5"}/>
                    <div className="col-2 col-2_5 align-self-center">
                        <div className="row d-flex align-self-center justify-content-between flex-row robots_container_for_button">
                            <InfoCell top_value={this.props.started} 
                                      divClassName={'align-self-center'}
                                      spanClassName={'old_coin_value'}
                                      bottom_value={this.props.started_day}/>
                            <RoboButton button_class={this.props.button_class} button_val={this.props.button_val}/>
                        </div>
                    </div>
                </Row>
                <a href="#"></a>

            </div>

        )
    }
}
