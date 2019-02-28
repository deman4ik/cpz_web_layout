import React from "react";
import {getData} from "./utils";
import {TypeChooser} from "react-stockcharts/lib/helper/index";
import ChartTP from "./Chart";

export default class ChartComponent extends React.Component {

    constructor(props) {
        super(props);

        this.select = {openSelectElem: '6m'};
        this.buttonSelectTime = this.buttonSelectTime.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }


    buttonSelectTime(e) {
        this.setState(select => ({
            openSelectElem: e
        }));
        this.select = {openSelectElem: e};

    }

    componentDidMount() {
        getData().then(data => {
            this.setState({data})
        })


    }

    render() {
        if (this.state == null) {
            return <div>Loading...</div>
        }
        if (this.props.onClickElemStatus) {

            return (
                <div className={'total_table_container '}>
                    <div className=" table_header col-12 total_table_header">
                        <div className="float-left ">BTC/USD</div>
                        <div className="float-right">
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


                        </div>
                        <div className="float-right total_table_data_container">
                            <div className="float-left"><span>From</span><span
                                className={'table_data'}>Oct 13, 2017</span></div>
                            <div className="float-left"><span className="float-left">To</span>
                            </div>
                            <span className="float-left table_data">Jan 13, 2018</span>
                        </div>
                    </div>
                    <div
                        className="percent_container d-flex justify-content-end align-items-center table_header col-12">
                        <span className={'green_info'}>
                            + 3,90%
                        </span>
                        <span>
                            $ 1,198.93
                        </span>
                    </div>
                    <TypeChooser>
                        {type => <ChartTP data={this.state.data}/>}
                    </TypeChooser>
                </div>
            )

        } else {
            return <div>Loading...</div>
        }

    }
}