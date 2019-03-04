import React from 'react';

import '../../common/button/button.css';
import './save.css';

export const ButtonSave = props => (
    <button className='btn_common settings__button-save' onClick={props.onClick}>{props.btnName}</button>
);