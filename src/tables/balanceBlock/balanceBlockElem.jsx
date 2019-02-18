import React from 'react';
import {render} from "react-dom";

export default class BalanceBlockElem extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){

        return (

                <div className={'balance_block_elem_title'}><span
                    className={'balance_block_value_name balance_block_value_name_blue'}>{this.props.valueName}</span> <span
                    className={'balance_block_value'}>67,12 %</span></div>



        )
    }

}