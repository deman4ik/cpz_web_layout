import React from 'react';
import SelectElement  from '../common/selectElement.jsx';

export const FullWidthField = props => (
    <div className={props.className}>
        <span>{props.title}</span>
        <input type="text" placeholder={props.placeholder}/>
    </div>
)

export const HalfWidthField = props => (
    <div className="col-6">
        <span>{props.title}</span>
        <textarea placeholder={props.placeholder}
                  className={props.className}/>
    </div>
)

export const WizardCheckbox = props => (
    <label className="control control--checkbox">{props.title}
        <input type="checkbox"/>
        <div className="control__indicator"></div>
    </label>
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
            <SelectElement class={'long_select'}/>
        </div>
        <p>{props.descr}</p>
    </div>
)

export const SelectWidgetWithAdd = props => (
    <div className="col-12 select_modal_container">
        <div className="row justify-content-between align-items-center ">
            <span>{props.title}</span>
            <SelectElement />
            <button className={'select_modal_button_add add_white'}>Add</button>
        </div>
        <p>{props.descr}</p>
    </div>
)

export const HrefButton = props => (
    <div className={props.className}>
        <a className={props.buttonClass} href="">{props.name}</a>
    </div>
)

export const SimpleButton = props => (
    <div className={props.className}>
        <button className={props.buttonClass}>{props.name}</button>
    </div>
)

export const KeyVerifyContainer = props => (
    <div className={props.className}>
        <p>{props.descr}</p>
        <div className="row">
            <HalfWidthField title={props.title1} placeholder={props.placeholder1} />
            <HalfWidthField title={props.title2} placeholder={props.placeholder2} />
        </div>
        <HrefButton className={'button_container'}
            buttonClass={props.buttonClass} name={props.btnName} />
    </div>
)