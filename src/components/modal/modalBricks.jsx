import React from 'react';
import SelectElement  from '../selectElement.jsx';

export const FullWidthField = props => (
    <div>
        <span>{props.title}</span>
        <input type="text" placeholder={props.placeholder}/>
    </div>
)

export const HalfWidthField = props => (
    <div className="col-6">
        <span>{props.title}</span>
        <input type={props.type} placeholder={props.placeholder}
               className={props.className}/>
    </div>
)

export const WizardCheckbox = props => (
    <label className="control control--checkbox">{props.title}
        <input type="checkbox"/>
        <div className="control__indicator"></div>
    </label>
)

export const CtrlButtons = props => (
    <div className={'justify-content-end d-flex buttons_save_and_cancel_container'}>
        <span className={'button_save_green'}>{props.btn1Name}</span>
        <span className={'button_cancel'}>{props.btn2Name}</span>
    </div>
)

export const ValueEnterWidget = props => (
    <div>
        <p className={'modal_title'}>{props.title}</p>
        <div className={'modal_text_for_title'}>
            <span> 2% </span>
            &times;
            <span>  Trading Volume </span>
            &times;
            <span> Time </span>
        </div>
        <div className="col-12 input_container justify-content-center  align-self-center d-flex robot_wizard_input_run_container">
            <div className="col-6">
                <input className={'robot_wizard_input_run'} type={props.type} value={props.value} />
            </div>
        </div>
    </div>
)

export const ModalSelectWidget = props => (
    <div className="col-12 select_modal_container">
        <div className="row justify-content-between align-items-center ">
            <span>{props.title}</span>
            <SelectElement />
            <button className={'select_modal_button_add add_white'}>{props.btnName}</button>
        </div>
        <p>{props.descr}</p>
    </div>
)