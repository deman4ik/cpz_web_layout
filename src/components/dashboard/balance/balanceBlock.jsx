import React from 'react';
import * as d3 from "d3";
import { PieChart} from 'react-d3-components';
import {DoubleUniField} from '../../common/commonBricks';

export default class BalanceBlock extends React.Component {

    constructor(props) {
        super(props);

        this.data = {
            label: 'somethingA',
            values: [{x: '1', y: this.props.value1}, {x: '2', y: this.props.value2}],
        };

        this.sort = null;
        this.colorScale = d3.scaleOrdinal()
            .domain([0,0])
            .range(['#40DDFF','#9B51E0']);
    }
    render(){
        return (
            <div className="row">
                <div className="col-3">
                    <PieChart data={this.data} width={105} height={105} outerRadius={50} innerRadius={35} colorScale={this.colorScale} margin={{ top: 0, bottom: 0, left: 0, right: 0 }} sort={this.sort} />
                </div>
                <div className="col-9">
                    <DoubleUniField className={'balance_block_total_title'}
                                    spanClassName1={'balance_block_value_name'} value1={'Total'}
                                    spanClassName2={'balance_block_value'} value2={'2.23845521 BTC'}/>
                    <div id="balance_block_elem">
                        <DoubleUniField className={'balance_block_elem_title'}
                                    spanClassName1={'balance_block_value_name balance_block_value_name_blue'} value1={this.props.valueName1}
                                    spanClassName2={'balance_block_value'} value2={this.props.value1 + '%'}/>
                        <DoubleUniField className={'balance_block_elem_title'}
                                    spanClassName1={'balance_block_value_name balance_block_value_name_violet'} value1={this.props.valueName2}
                                    spanClassName2={'balance_block_value'} value2={this.props.value2 + '%'}/>
                    </div>

                </div>
            </div>
        )
    }
}