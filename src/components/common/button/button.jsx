import React from 'react';

import './button.css';

export const ButtonCommon = props => (
    <button className='btn_common' onClick={props.onClick}>{props.btnName}</button>
);