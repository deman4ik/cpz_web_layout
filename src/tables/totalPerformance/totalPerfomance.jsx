import React from "react";
import {getData} from "./utils";
import {TypeChooser} from "react-stockcharts/lib/helper/index";
import ChartTP from "./Chart";

export default class ChartComponent extends React.Component {
    addClass;
    constructor(props) {
        super(props);
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
        if(this.props.onClickElemStatus) {

            return (
                <div className={'total_table_container '}>
                    <div className="d-flex justify-content-between align-items-center table_header col-12">
                        <div>BTC/USD</div>
                        <div>
                            <ul className="float-left data_table">
                                <li className="float-left">1m</li>
                                <li className="float-left">3m</li>
                                <li className="float-left active">6m</li>
                                <li className="float-left">1y</li>
                                <li className="float-left">All</li>
                            </ul>
                            <div className="float-left"><span>From</span><span className={'table_data'}>Oct 13, 2017</span></div>
                            <div className="float-left"><span className="float-left">To</span>
                                <span className="float-left table_data">Jan 13, 2018</span></div>
                        </div>
                    </div>
                    <div className="percent_container d-flex justify-content-end align-items-center table_header col-12">
                        <span className={'green_info'}>
                            + 3,90%
                        </span>
                        <span>
                            $ 1,198.93
                        </span>
                    </div>
                    <TypeChooser  >
                        {type => <ChartTP  data={this.state.data}/>}
                    </TypeChooser>
                </div>
            )

        }else{
            return <div>Loading...</div>
        }

    }
}