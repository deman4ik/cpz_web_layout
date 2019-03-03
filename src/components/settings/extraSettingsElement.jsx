import React from 'react';

import  SelectElement  from '../common/selectElement.jsx';
import { ExtraSettingsLine } from './settingsBricks.jsx';
import { DoubleUniField } from '../common/commonBricks';


export default class robotsPageElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {openSelectElem: false, selectValue: 'BTC, USD'};
        this.toggleSelect = this.toggleSelect.bind(this);
        this.changeSelectValue = this.changeSelectValue.bind(this);
        this.selectClass = 'select_element';
    }

    toggleSelect(){
        this.setState(state => ({
            openSelectElem: !this.state.openSelectElem
        }));
        if(this.state.openSelectElem){
            this.selectClass  = 'select_element';
        }else {
            this.selectClass  = 'select_element is-open';
        }
    }

    changeSelectValue(element){
        this.setState(state => ({
            selectValue: element
        }));
    }

    render() {
        return (
            <div className="col-12 extra_settings_info">
                <div className="row extra_settings_info_container">
                    <div className="col-7">
                        <ExtraSettingsLine title={"Balance Display"}
                                           value={'Generate and specify a spare key pair to avoid connection problems with the exchange.'}/>
                    </div>
                    <div className="col-5">
                        <SelectElement/>
                    </div>
                </div>
            </div>
        )
    }
}
