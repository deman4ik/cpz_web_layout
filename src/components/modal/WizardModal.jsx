import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { FullWidthField, SelectWidgetWithAdd, WizardCheckbox, ValueEnterWidget } from './modalBricks';
import { DoubleUniField, SingleUniField } from '../common/commonBricks';

export default class robotsOpenedElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <button className={'float-left button_add add_white'} onClick={this.toggle}>Add</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={'modal_container'}>
                    <a href={'javascript:void(0)'} className={'close_window close_icon'} onClick={this.toggle}></a>
                    <ModalBody>
                        <p className={'modal_title'}>Robot Wizard</p>
                        <div className="col-12 input_container">
                            <FullWidthField title={'Robot name*'} placeholder={'Robot name #1'}/>
                            <SelectWidgetWithAdd title={'Exchange Account*'} 
                                                 descr={'Some long text with tip description for this block.'}/>

                            <div className="row">
                                <FullWidthField className={'col-6'} title={'Trading currency'}
                                                placeholder={'BTC'}/>
                                <FullWidthField className={'col-6'} title={'Available balance'}
                                                placeholder={'2.983666335'}/>
                            </div>
                        </div>
                        <div className="col-12 input_container">
                            <FullWidthField title={'Trading volume (order size) for robot'}
                                            placeholder={'Typing... 0.78365479 BTC'}/>
                            <DoubleUniField className={'justify-content-end d-flex buttons_save_and_cancel_container'}
                                            spanClassName1={'button_save_green standard_button'} value1={'Save'}
                                            spanClassName2={'button_cancel standard_button'} value2={'Cancel'}/>
                            <FullWidthField title={'Subscription time, Months'}
                                            placeholder={'8'}/>
                        </div>
                        <ValueEnterWidget title={'Your Price'} type={'text'} value={'0.067 BTC'}/>
                        <SingleUniField noRow className={'modal_text_for_title modal_text_for_title_for_radio'}
                                        value={'Select payment method'}/>
                        <div className={'justify-content-between align-self-center d-flex'}>
                            <WizardCheckbox title={'Cryptuoso Account'}/>
                            <WizardCheckbox title={'Cryptuoso Account'}/>
                            <WizardCheckbox title={'Cryptuoso Account'}/>
                        </div>
                        <div className="button_run_modal col-12">
                            <button className={'standard_button'} type="submit"  value={''}> <span className={'button_run_icon'}>Run</span>  </button>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}