import React from "react";
import {getData} from "./utils";
import {TypeChooser} from "react-stockcharts/lib/helper/index";
import AreaChart from "./Chart.jsx";
import { Row, Col } from 'reactstrap';
import ChartHeader from '../../components/chartHeader.jsx';

export default class ChartComponent extends React.Component {
    addClass;
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
                <Row>
                    <Col>
                        <div className={'total_table_container '}>
                            <ChartHeader coin_name={this.props.coin_name}/>
                            <div className="percent_container d-flex justify-content-end align-items-center table_header col-12">
                                <span className={'green_info'}>
                                    + 3,90%
                                </span>
                                <span>
                                    $ 1,198.93
                                </span>
                            </div>
                            <TypeChooser  >
                                {type => <AreaChart data={this.state.data}/>}
                            </TypeChooser>
                        </div>
                    </Col>
                </Row>
            )

        }else{
            return <div>Loading...</div>
        }

    }
}
