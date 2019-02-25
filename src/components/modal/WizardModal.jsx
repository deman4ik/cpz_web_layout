import React from 'react';
import {Modal, ModalBody} from 'reactstrap';
// import  SelectElement  from '../selectElement.jsx';
import { FullWidthField, HalfWidthField, WizardCheckbox, 
         CtrlButtons, ValueEnterWidget, ModalSelectWidget } from './modalBricks.jsx';

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
                <button className='float-left button_add add_white' onClick={this.toggle}>Add</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className='modal_container'>
                    <a href={'javascript:void(0)'} className='close_window close_icon' onClick={this.toggle}></a>
                    <ModalBody>
                        <p className='modal_title'>Robot Wizard</p>
                        <div className="col-12 input_container">
                            <FullWidthField type={'text'} title={'Robot name*'} placeholder={'Robot name #1'}/>
                            <ModalSelectWidget title={'Exchange Account*'} btnName={'Add'} descr={'Some long text with tip description for this block.'}/>
                            <div className="row">
                                <HalfWidthField title={"Trading currency"} placeholder={"BTC"}/>
                                <HalfWidthField title={"Available balance"} placeholder={"2.983666335"}/>
                            </div>
                        </div>

                        <div className="col-12 input_container">
                            <FullWidthField type={'text'} title={'Trading volume (order size) for robot'} placeholder={'Typing... 0.78365479 BTC'}/>
                            <CtrlButtons btn1Name={'Save'} btn2Name={'Cancel'} />
                            <FullWidthField type={'number'} 
                                            className={'number_input'} 
                                            title={'Subscription time, Months'} 
                                            placeholder={'8'}/>
                        </div>
                        <ValueEnterWidget title={'Your Price'} type={'text'} value={'0.067 BTC'}/>
                        <div className={'modal_text_for_title modal_text_for_title_for_radio'}>
                            <span> Select payment method </span>
                        </div>
                        <div className={'justify-content-between align-self-center d-flex'}>
                            <WizardCheckbox title={'Cryptuoso Account'}/>
                            <WizardCheckbox title={'Cryptuoso Account'}/>
                            <WizardCheckbox title={'Cryptuoso Account'}/>
                        </div>
                        <div className="button_run_modal col-12">
                            <button type="submit" value={''}><span className={'button_run_icon'}>Run</span></button>
                        </div>
                    </ModalBody>

                </Modal>
            </div>
        )
    }
}
