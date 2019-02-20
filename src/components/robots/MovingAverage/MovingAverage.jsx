import React from 'react';
import Chart from './Chart';
import { getData } from "./utils";
import { Row, Col } from 'reactstrap';

import { TypeChooser } from "react-stockcharts/lib/helper";
import ChartHeader from '../../chartHeader.jsx';


export default class MovingAverage extends React.Component {
    componentDidMount() {
        getData().then(data => {
            this.setState({ data })
        });
    }
    render() {
        if (this.state == null || this.props.activeElem != 1) {
            return <div>Loading...</div>
        }
        return (
            <Row>
                <Col sm="12">
                    <div className={'total_table_container '}>
                        <ChartHeader coin_name={this.props.coin_name}/>
                        <TypeChooser>
                            {type => <Chart data={this.state.data} />}
                        </TypeChooser>
                    </div>
                </Col>
            </Row>
        )
    }
}

