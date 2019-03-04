import React from 'react';

import '../../common/button/button.css';
import './verify.css';

export const ButtonVerify = props => (
    <button className={'btn_common settings__button-verify ' + props.btnClass} onClick={props.onClick}>{props.btnName}</button>
);