import React from 'react';
import ChartComponent from "../../totalPerformance/totalPerfomance.jsx";

const TotalPerfContainer = props => (
    <div>
        <div className="col-12 total_performance_title total_performance_icon">
            <span>Total performance</span></div>
            <div id="total_performance">
                <ChartComponent onClickElemStatus = {props.tableValue}
                                coin_name={'BTC'}/>
        </div>
    </div>
)

export default TotalPerfContainer;