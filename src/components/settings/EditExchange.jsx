import React from 'react';
import {Modal, ModalBody} from 'reactstrap';

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
                            <span>
                            Account name*
                             </span>
                            <input type="text" placeholder={'My Bitfinex ETH 001'}/>
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
        );
    }
}

export default EditExchange;