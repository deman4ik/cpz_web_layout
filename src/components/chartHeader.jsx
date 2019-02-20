import React from 'react';


export default class ChartHeader extends React.Component {
    render () {
        return (
            <div className="d-flex justify-content-between align-items-center table_header col-12">
                <div>{this.props.coin_name}/USD</div>
                <div>
                    <ul className="float-left data_table">
                        <li className="float-left">1m</li>
                        <li className="float-left">3m</li>
                        <li className="float-left active">6m</li>
                        <li className="float-left">1y</li>
                        <li className="float-left">All</li>
                    </ul>
                    <div className="float-left">
                        <span>From</span><span className={'table_data'}>Oct 13, 2017</span>
                    </div>
                    <div className="float-left">
                        <span className="float-left">To</span><span className="float-left table_data">Jan 13, 2018</span>
                    </div>
                </div>
            </div>
        )
    }
}
