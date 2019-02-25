import React from 'react';
import {Modal, ModalBody} from 'reactstrap';
import SelectElement from "../../components/selectElement";


export default class addAccount extends React.Component {
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
            <div className="col-3 other_account_card_container add_other_account_container">
                <div className="col-12 other_account_card">
                    <a href="javascript:void(0)" onClick={this.toggle}
                       className={'d-flex align-items-center justify-content-center flex-dir flex-column'}>
                        <span className="add_icon">
                        </span>
                        <span>
                            Add New
                        </span>
                    </a>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={'modal_container'}>
                    <a href={'javascript:void(0)'} className={'close_window close_icon'}  onClick={this.toggle}></a>
                    <ModalBody>
                        <p className={'modal_title'}>New Exchange</p>
                        <div className="col-12 input_container">
                            <span>
                            Account name*
                             </span>
                            <input type="text" placeholder={'My Bitfinex ETH 001'}/>
                            <div className="col-12 select_modal_container">
                                <div className="row justify-content-between align-items-center ">
                                    <span>Exchange*</span>
                                    <SelectElement class={'long_select'}/>
                                </div>
                                <p>Some long text with tip description for this block.</p>
                            </div>
                            <div className="col-12 select_modal_container">
                                <div className="row justify-content-between align-items-center ">
                                    <span>Currency*</span>
                                    <SelectElement class={'long_select'}/>
                                </div>
                                <p>Another long text with description for this block.</p>
                            </div>

                        </div>


                        <div className="col-12 input_container">
                            <div className="row">
                                <div className="col-6">
                                    <span>Main Public key*</span>
                                    <textarea placeholder={'1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t'}/>
                                </div>
                                <div className="col-6">
                                    <span>Main Private key*</span>
                                    <textarea placeholder={'1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t'}/>
                                </div>
                            </div>


                            <div className="button_container">
                                <a className={'red_info'} href="">Wrong Keys</a>
                            </div>

                        </div>


                        <div className="col-12 input_container border_none">
                            <p>Generate and specify a spare key pair to avoid connection problems with the exchange.</p>
                            <div className="row">
                                <div className="col-6">
                                    <span>Spare Public key*</span>
                                    <textarea placeholder={'1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t'}/>
                                </div>
                                <div className="col-6">
                                    <span>Spare Private key*</span>
                                    <textarea placeholder={'1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t'}/>
                                </div>
                            </div>


                            <div className="button_container">
                                <a className={'green_info'} href="">Verified</a>
                            </div>
                        </div>

                        <div className="button_save col-12">
                            <input type="submit" value={'Save changes'}/>
                        </div>
                    </ModalBody>

                </Modal>
            </div>
        )
    }
}
