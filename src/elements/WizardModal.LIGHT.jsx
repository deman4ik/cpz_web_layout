import React from 'react';
import {Modal, ModalBody} from 'reactstrap';
import  SelectElement  from '../elements/selectElement.jsx';

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
                            <span>
                           Robot name*
                             </span>
                            <input type="text" placeholder={'Robot name #1'}/>


                            <div className="col-12 select_modal_container">
                                <div className="row justify-content-between align-items-center ">

                                    <span>Exchange Account*</span>
                                    <SelectElement/>
                                    <button className={'select_modal_button_add add_blue'}>Add</button>
                                </div>
                                <p>Some long text with tip description for this block.</p>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <span>Trading currency</span>
                                    <input type={'text'} placeholder={'BTC'}/>
                                </div>
                                <div className="col-6">
                                    <span>Available balance</span>
                                    <input type={'text'} placeholder={'2.983666335'}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 input_container">
                            <span>Trading volume (order size) for robot</span>
                            <input type={'text'} placeholder={'Typing... 0.78365479 BTC'}/>
                            <div
                                className={' justify-content-end d-flex buttons_save_and_cancel_container'}>
                                <span className={'button_save_green standard_button'}>Save</span>
                                <span className={'button_cancel standard_button'}>Cancel</span>
                            </div>
                            <span>Subscription time, Months</span>
                            <input type={'number'} className={'number_input'} placeholder={'8'}/>

                        </div>
                        <p className={'modal_title'}>Your Price</p>
                        <div className={'modal_text_for_title'}>

                            <span> 2% </span>
                            &times;
                            <span>  Trading Volume   </span>
                            &times;
                            <span> Time   </span>


                        </div>
                        <div className="col-12 input_container justify-content-center  align-self-center d-flex robot_wizard_input_run_container">
                            <div className="col-6">
                                <input className={'robot_wizard_input_run'} type={'text'} value={'0.067 BTC'}/>
                            </div>
                        </div>

                        <div className={'modal_text_for_title modal_text_for_title_for_radio'}>
                            <span> Select payment method </span>

                        </div>
                        <div className={'justify-content-between align-self-center d-flex'}>
                            <label className="control control--checkbox">Cryptuoso Account
                                <input type="checkbox"/>
                                <div className="control__indicator"></div>
                            </label>
                            <label className="control control--checkbox">Cryptuoso Account
                                <input type="checkbox"/>
                                <div className="control__indicator"></div>
                            </label>
                            <label className="control control--checkbox">Cryptuoso Account
                                <input type="checkbox"/>
                                <div className="control__indicator"></div>
                            </label>
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