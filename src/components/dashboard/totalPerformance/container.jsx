import React from 'react';
import ChartComponent from "../../totalPerformance/totalPerfomance.jsx";
import { ContainerName } from '../../common/commonBricks';


/*
*   Контейнер с графиком изменения курса криптовалют.
*       tableValue - данные для отображения в графике
*/
const TotalPerfContainer = props => (
    <div className='total_performance_container_background'>
        <ContainerName className={'col-12 total_performance_title total_performance_icon'}
                       name={'Total performance'}/>
        <div id="total_performance">
            <ChartComponent onClickElemStatus={props.tableValue}
                            coin_name={'BTC'} />
        </div>
    </div>
)

export default TotalPerfContainer;