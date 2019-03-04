import React from 'react';

import '../../common/button/button.css';
import './button.css';

export const ButtonOrange = props => (
    <button className='btn_common settings__button-orange' onClick={props.onClick}>{props.btnName}</button>
);