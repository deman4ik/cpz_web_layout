import React from 'react';
import { throws } from 'assert';

export default class NewsLine extends React.Component {
    render() {
        return (
            <div className="news_line">
                <div className="d-flex justify-content-start ">
                    <div>
                                <img src={this.props.singleNew.image} alt=""/>
                    </div>
                    <div className={'news_text_container'}>
                        <div className={'col-12'}>
                            <div className="row">
                                <span className={'news_title'}>{this.props.singleNew.title}</span>
                                <span className={'news_date'}>{this.props.singleNew.date}</span>
                            </div>
                        </div>
                        <div className={'col-12'}>
                            <div className="row">
                                <span className={'news_text'}>{this.props.singleNew.text}</span>
                            </div>
                        </div>
                        <div className={'col-12'}>
                            <div className="row">
                                <p className={'news_content'}>{this.props.singleNew.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}