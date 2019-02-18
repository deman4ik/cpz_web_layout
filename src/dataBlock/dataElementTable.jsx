import React from 'react';
import {Row, Col} from 'reactstrap';


import ChartTP from '../tables/totalPerformance/Chart.jsx';
import {getData} from "../tables/totalPerformance/utils"
import ChartComponent from "../tables/totalPerformance/totalPerfomance.jsx"
import {render} from "react-dom";


export default class DataElementTable extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>
                <div>

                    <ChartComponent onClickElemStatus={this.props.onClickElemStatus}/>


                </div>
                <div className={'news_container'}>
                    <div className="page_title">
                        <span>   Latest News on Bitcoin</span>
                    </div>
                    <div className="news_line">
                        <div className="d-flex justify-content-start ">
                            <div>
                                <img src="/image/Bitmap.png" alt=""/>
                            </div>
                            <div className={'news_text_container'}>
                                <div className={'col-12'}>
                                    <div className="row">
                                        <span className={'news_title'}>CNN</span>
                                        <span className={'news_date'}>19 min ago</span>
                                    </div>
                                </div>
                                <div className={'col-12'}>
                                    <div className="row">
                                        <span className={'news_text'}>As Bitcoin's Slide Continues, Prices Look Towards $8K</span>
                                    </div>
                                </div>
                                <div className={'col-12'}>
                                    <div className="row">
                                        <p className={'news_content'}>Bitcoin Price Leads Crypto Comeback after Market
                                            Briefly Dips Below $250
                                            Billion.
                                            Slump Begone: What’s Next For Cryptocurrencies? Bitcoin's Price Drops Below
                                            $10,000 for First Time Since Early December</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="news_line">
                        <div className="d-flex justify-content-start ">
                            <div>
                                <img src="/image/Bitmap1.png" alt=""/>
                            </div>
                            <div className={'news_text_container'}>
                                <div className={'col-12'}>
                                    <div className="row">
                                        <span className={'news_title'}>CRYPTOSTUFF</span>
                                        <span className={'news_date'}>Jan 17, 2018</span>
                                    </div>
                                </div>
                                <div className={'col-12'}>
                                    <div className="row">
                                        <span className={'news_text'}>Bitcoin Price Leads Crypto Comeback after Market Briefly Dips Below $250 Billion</span>
                                    </div>
                                </div>
                                <div className={'col-12'}>
                                    <div className="row">
                                        <p className={'news_content'}>Bitcoin's Price Drops Below $10,000 for First Time
                                            Since Early December. As Bitcoin's Slide Continues, Prices Look Towards $8K.
                                            Israel Releases Draft Plan for Taxing ICOs</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="news_line">
                        <div className="d-flex justify-content-start ">
                            <div>
                                <img src="/image/Bitmap2.png" alt=""/>
                            </div>
                            <div className={'news_text_container'}>
                                <div className={'col-12'}>
                                    <div className="row">
                                        <span className={'news_title'}>CNN</span>
                                        <span className={'news_date'}>19 min ago</span>
                                    </div>
                                </div>
                                <div className={'col-12'}>
                                    <div className="row">
                                        <span className={'news_text'}>As Bitcoin's Slide Continues, Prices Look Towards $8K</span>
                                    </div>
                                </div>
                                <div className={'col-12'}>
                                    <div className="row">
                                        <p className={'news_content'}>Bitcoin Price Leads Crypto Comeback after Market
                                            Briefly Dips Below $250
                                            Billion.
                                            Slump Begone: What’s Next For Cryptocurrencies? Bitcoin's Price Drops Below
                                            $10,000 for First Time Since Early December</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>




                    <div className="news_line">
                        <div className="d-flex justify-content-start ">
                            <div>
                                <img src="/image/Bitmap3.png" alt=""/>
                            </div>
                            <div className={'news_text_container'}>
                                <div className={'col-12'}>
                                    <div className="row">
                                        <span className={'news_title'}>CRYPTOSTUFF</span>
                                        <span className={'news_date'}>Jan 15, 2018  </span>
                                    </div>
                                </div>
                                <div className={'col-12'}>
                                    <div className="row">
                                        <span className={'news_text'}>Bitcoin Price Leads Crypto Comeback after Market Briefly Dips Below $250 Billion</span>
                                    </div>
                                </div>
                                <div className={'col-12'}>
                                    <div className="row">
                                        <p className={'news_content'}>Bitcoin's Price Drops Below $10,000 for First Time
                                            Since Early December. As Bitcoin's Slide Continues, Prices Look Towards $8K.
                                            Israel Releases Draft Plan for Taxing ICOs</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



                    <div className="news_line">
                        <div className="d-flex justify-content-start ">
                            <div>
                                <img src="/image/Bitmap4.png" alt=""/>
                            </div>
                            <div className={'news_text_container'}>
                                <div className={'col-12'}>
                                    <div className="row">
                                        <span className={'news_title'}>CNN</span>
                                        <span className={'news_date'}>Jan 12, 2018</span>
                                    </div>
                                </div>
                                <div className={'col-12'}>
                                    <div className="row">
                                        <span className={'news_text'}>As Bitcoin's Slide Continues, Prices Look Towards $8K</span>
                                    </div>
                                </div>
                                <div className={'col-12'}>
                                    <div className="row">
                                        <p className={'news_content'}>Bitcoin Price Leads Crypto Comeback after Market
                                            Briefly Dips Below $250
                                            Billion.
                                            Slump Begone: What’s Next For Cryptocurrencies? Bitcoin's Price Drops Below
                                            $10,000 for First Time Since Early December</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                    <div className="show_more">Show more</div>

                </div>
            </div>

        )
    }
}