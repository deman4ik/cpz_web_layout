import React from 'react';

export default class StatisticLine extends React.Component {
    render () {
        return (
            <div className={"robots_tabs_table row"}>
                <div className="col-3">{this.props.line.name}</div>
                <div className="col-3">{this.props.line.trades.all}</div>
                <div className="col-3">{this.props.line.trades.long}</div>
                <div className="col-3">{this.props.line.trades.short}</div>
            </div>
        )
    }
}
