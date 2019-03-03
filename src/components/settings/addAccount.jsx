import React from 'react';
import {Modal, ModalBody} from 'reactstrap';
import { FullWidthField, ModalSelectWidget, SimpleButton, KeyVerifyContainer } from '../modal/modalBricks';

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
                        <span className="add_icon"></span>
                        <span>Add New</span>
                    </a>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={'modal_container'}>
                    <a href={'javascript:void(0)'} className={'close_window close_icon'}  onClick={this.toggle}></a>
                    <ModalBody>
                        <p className={'modal_title'}>New Exchange</p>
                        <div className="col-12 input_container">
                            <FullWidthField title={'Account name*'} placeholder={'My Bitfinex ETH 001'}/>
                            <ModalSelectWidget title={'Exchange*'}
                                               descr={'Some long text with tip description for this block.'}/>
                            <ModalSelectWidget title={'Currency*'}
                                               descr={'Another long text with description for this block.'}/>
                        </div>
                        <KeyVerifyContainer className={'col-12 input_container'}
                                            title1={'Main Public key*'} placeholder1={'1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t'}
                                            title2={'Main Private key*'} placeholder2={'1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t'}
                                            buttonClass={'standard_button red_info'} btnName={'Wrong Keys'}/>
                        <KeyVerifyContainer className={'col-12 input_container border_none'}
                                            descr={'Generate and specify a spare key pair to avoid connection problems with the exchange.'}
                                            title1={'Spare Public key*'} placeholder1={'1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t'}
                                            title2={'Spare Private key*'} placeholder2={'1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t'}
                                            buttonClass={'standard_button green_info'} btnName={'Verified'}/>
                        <SimpleButton className={"button_save col-12"} 
                                      buttonClass={'standard_button'} name={'Save changes'}/>
                    </ModalBody>

                </Modal>
            </div>


        )
    }

}