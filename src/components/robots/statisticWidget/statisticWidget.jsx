import React from "react";
import StatisticLine from './statisticLineWidget.jsx';

export default class StatisticWidget extends React.Component {
  render() {
    return (
      <div className="col-12">
        <div className="col-12">
          <div className="col-12 robots_table_title">Profit</div>
        </div>
        {this.props.statistic.filter(line=> line.state === 'profit').map(res_line => (
            <StatisticLine key={res_line.id} line={res_line} />
        ))}
        <div className="col-12">
          <div className="col-12 robots_table_title">Winners</div>
        </div>
        {this.props.statistic.filter(line=> line.state === 'winner').map(res_line => (
            <StatisticLine key={res_line.id} line={res_line} />
        ))}
        <div className="col-12">
          <div className="col-12 robots_table_title">Losses</div>
        </div>
        {this.props.statistic.filter(line=> line.state === 'lost').map(res_line => (
            <StatisticLine key={res_line.id} line={res_line} />
        ))}
      </div>
    );
  }
}
