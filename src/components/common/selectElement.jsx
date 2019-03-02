import React from 'react';


export default class robotsOpenedElement extends React.Component {
    constructor(props) {
        super(props);

        this.state = {openSelectElem: false, selectValue: 'BTC, USD'};

        this.toggleSelect = this.toggleSelect.bind(this);
        this.changeSelectValue = this.changeSelectValue.bind(this);
        this.selectClass = 'select_element '
    }


    toggleSelect(){
        this.setState(state => ({
            openSelectElem: !this.state.openSelectElem
        }));
        if(this.state.openSelectElem){
            this.selectClass  = 'select_element '
        }else {
            this.selectClass  = 'select_element is-open '
        }
    }
    changeSelectValue(element){

        this.setState(state => ({
            selectValue: element
        }));

    }

    render() {
        return (
            <div>
                <div className={this.selectClass + this.props.class} onClick={this.toggleSelect}>
                    <span className="placeholder">{this.state.selectValue}</span>
                    <ul>
                        <li data-value="es" onClick={this.changeSelectValue.bind(this, 'BTC, USD')}>BTC, USD</li>
                        <li data-value="en" onClick={this.changeSelectValue.bind(this, 'Telegram')}>Telegram</li>
                        <li data-value="fr" onClick={this.changeSelectValue.bind(this, 'View list')}>View list</li>
                    </ul>
                    <input type="hidden" name="changeme"/>
                </div>
            </div>
        )
    }
}