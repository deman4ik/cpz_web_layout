import React from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';

import DataElement from "./dataElement.jsx";
import DataElementTable from "./dataElementTable.jsx";


export default class dataElementCollapse extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    render() {
        return (
            <div className={'data_line_main_container'}>
                <DataElement onClickElem={this.toggle}  balance_name={this.props.balance_name} balance_dollar={this.props.balance_dollar} crypto_balance_icon={this.props.crypto_balance_icon}
                             change_proc={this.props.change_proc} change_val={this.props.change_val}
                             market_cap_dollar={this.props.market_cap_dollar} market_cap_value={this.props.market_cap_value}
                             volume_24h_dollar={this.props.volume_24h_dollar} volume_24h_val={this.props.volume_24h_val}
                             circulating_supply_dollar={this.props.circulating_supply_dollar} circulating_supply_val={this.props.circulating_supply_val}
                             max_supply_dollar={this.props.max_supply_dollar} max_supply_val={this.props.max_supply_val}
                             balance={this.props.balance}/>

                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            <DataElementTable  
                                onClickElemStatus={this.state.collapse}
                                coin_name={this.props.balance_name}
                                news={this.props.news}
                            />
                        </CardBody>
                    </Card>
                </Collapse>
            </div>

        )
    }
}