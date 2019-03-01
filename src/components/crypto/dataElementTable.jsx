import React from 'react';

import ChartComponent from "../totalPerformance/totalPerfomance.jsx";
import NewsLine from '../../components/newsLine.jsx';


export default class DataElementTable extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <ChartComponent onClickElemStatus={this.props.onClickElemStatus}
                        coin_name={this.props.coin_name}
                    />
                </div>
                <div className={'news_container'}>
                    <div className="page_title">
                        <span>Latest News on {this.props.name}</span>
                    </div>
                    {this.props.news.map(singleNew => (
                        <NewsLine key={singleNew.id}
                            singleNew={singleNew}
                        />
                    ))}
                    <div className="show_more">Show more</div>
                </div>
            </div>

        )
    }
}
