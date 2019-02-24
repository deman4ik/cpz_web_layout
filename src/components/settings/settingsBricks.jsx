import React from 'react';

export const FieldWidget = props => (
    <label>
        <span>{props.fieldName}</span>
        <input type="text"
               placeholder={props.placeholder}
               onChange={props.onChange}
        />
    </label>
)    

export const ExtraCheckBox = props => (
    <div className="extra_checkbox">
        <label className="control control--checkbox">
                {props.checkBoxName}
            <input type="checkbox" />
            <div className="control__indicator" />
            <span>
            {props.checkBoxText}
            </span>
        </label>
    </div>
)

export const AccountInfoLine = props => (
    <div>
        <span className={'account_info_name'}>{props.title}</span>
        <span className={props.class}>{props.value}</span>
    </div>
)

export const ExtraSettingsLine = props => (
    <div>
        <p className='extra_settings_title'>{props.title}</p>
        <p className='extra_settings_text'>{props.value}</p>
    </div>
)