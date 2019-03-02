import React from 'react';


export default class ChartHeader extends React.Component {
    constructor(props) {
        super(props);
        this.select = {openSelectElem: '6m'};
        this.buttonSelectTime = this.buttonSelectTime.bind(this);
    }

    buttonSelectTime(e) {
        this.setState(select => ({
            openSelectElem: e
        }));
        this.select = {openSelectElem: e};
    }

    render () {
        return (
            <div className="col-sm-12 d-flex justify-content-between align-items-center table_header">
                <div>{this.props.coin_name}/USD</div>
                <div>
                    <ul className="float-left data_table">
                        <li className={"float-left  " + (this.select.openSelectElem === '1m' ? 'active' : '')}
                            onClick={this.buttonSelectTime.bind(this, '1m')}>1m
                        </li>
                        <li className={"float-left  " + (this.select.openSelectElem === '3m' ? 'active' : '')}
                            onClick={this.buttonSelectTime.bind(this, '3m')}>3m
                        </li>
                        <li className={"float-left  " + (this.select.openSelectElem === '6m' ? 'active' : '')}
                            onClick={this.buttonSelectTime.bind(this, '6m')}>6m
                        </li>
                        <li className={"float-left  " + (this.select.openSelectElem === '1y' ? 'active' : '')}
                            onClick={this.buttonSelectTime.bind(this, '1y')}>1y
                        </li>
                        <li className={"float-left  " + (this.select.openSelectElem === 'All' ? 'active' : '')}
                            onClick={this.buttonSelectTime.bind(this, 'All')}>All
                        </li>
                    </ul>
                    <div className="float-left">
                        <span>From</span><span className={'table_data'}>Oct 13, 2017</span></div>
                    <div className="float-left"><span
                        className="float-left">To</span><span className="float-left table_data">Jan 13, 2018</span>
                    </div>
                </div>
            </div>
        )
    }
}
