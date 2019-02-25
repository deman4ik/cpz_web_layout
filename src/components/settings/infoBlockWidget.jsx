import React from 'react';
import { AccountInfoLine } from './settingsBricks.jsx';

export const AccountInfoBlock = props => (
    <div>
        <AccountInfoLine title={props.title1} class={props.class1} value={props.value1}/>
        <AccountInfoLine title={props.title2} class={props.class2} value={props.value2}/>
    </div>
)