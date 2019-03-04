import React from 'react';
import { DoubleUniField } from '../common/commonBricks';

export const AccountInfoBlock = props => (
    <div>
        <DoubleUniField spanClassName1={'account_info_name'} value1={props.title1}
                        spanClassName2={props.class1} value2={props.value1}/>
        <DoubleUniField spanClassName1={'account_info_name'} value1={props.title2}
                        spanClassName2={props.class2} value2={props.value2}/>
    </div>
)