import React from 'react';
import {Modal, ModalBody} from 'reactstrap';


/*
*   Виджет удаления биржевого счета
*/
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

                <a href="javascript:void(0)" onClick={this.toggle} className={'trash_icon account_trash_icon'}></a>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={'modal_container'}>
                    <a href={'javascript:void(0)'} className={'close_window close_icon'} onClick={this.toggle}></a>
                    <ModalBody>
                        <p className={'modal_title'}>Do you really want to delete
                            <span>“My Bitfinex ETC 001”</span>
                            exchange</p>
                        <div className="button_container  delete_button">
                            <a href="" className={'delete_button_cancel standard_button'}>Cancel</a>
                            <a href="" className={'delete_button_confirm standard_button'}>Confirm</a>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default EditExchange;