import React from "react";
import {getData} from "../common/utils";
import {TypeChooser} from "react-stockcharts/lib/helper/index";
import ChartTP from "./Chart";

import ChartHeader from '../common/chartHeader.jsx';
import { DoubleUniField } from '../common/commonBricks';


/*
*   Интерактивный график для отображения данных об изменении стоимости криптовалют
*   за выбранный период времени.
*/
export default class ChartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        getData().then(data => {
            this.setState({data})
        })
    }

    render() {
        if (this.state == null) {
            return <div>Loading...</div>
        }
        if (this.props.onClickElemStatus) {
            return (
                <div className={'total_table_container '}>
                    <ChartHeader coin_name={this.props.coin_name}/>
                    <DoubleUniField className={'percent_container d-flex justify-content-end align-items-center table_header col-12'}
                                    spanClassName1={'green_info'} value1={'+ 3,90%'}
                                    value2={'$ 1,198.93'}/>
                    <TypeChooser>
                        {type => <ChartTP data={this.state.data}/>}
                    </TypeChooser>
                </div>
            )

        } else {
            return <div>Loading...</div>
        }

    }
}