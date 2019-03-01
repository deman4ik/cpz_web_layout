import React from 'react';
import {Modal, ModalBody} from 'reactstrap';
import {FullWidthField, } from '../modal/modalBricks';
import {KeyFieldWidget, StateField} from './settingsBricks';

class EditExchange extends React.Component {
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
                <a href="javascript:void(0)" onClick={this.toggle} className={'edit_icon account_edit_icon'}></a>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={'modal_container'}>
                    <a href={'javascript:void(0)'} className={'close_window close_icon'}  onClick={this.toggle}></a>
                    <ModalBody>

                        <p className={'modal_title'}>Edit Exchange</p>

                        <div className="col-12 input_container">
                            <FullWidthField title={'Account name*'} placeholder={'My Bitfinex ETH 001'}/>
                        </div>

                        <div className="col-12 input_container">
                            <div className="row">
                                <KeyFieldWidget title={'Main Public key*'} placeholder={'1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t'}/>
                                <KeyFieldWidget title={'Main Private key*'} placeholder={'1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t'}/>
                            </div>
                            <StateField className={'red_info'} value={'Wrong Keys'}/>
                        </div>

                        <div className="col-12 input_container border_none">
                            <p>Generate and specify a spare key pair to avoid connection problems with the exchange.</p>

                            <div className="row">
                                <KeyFieldWidget title={'Spare Public key*'} placeholder={'1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t'}/>
                                <KeyFieldWidget title={'Spare Private key*'} placeholder={'1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t'}/>
                            </div>
                            <StateField className={'green_info'} value={'Verified'}/>
                        </div>

                        <div className="button_save col-12">
                            <input type="submit" value={'Save changes'}/>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default EditExchange;
