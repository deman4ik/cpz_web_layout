import React from 'react';
import { DoubleUniField, SingleUniField } from '../common/commonBricks';


/* 
*   Отдельная строка новости по криптовалюте
*/
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
                            <DoubleUniField className={'row'} 
                                            spanClassName1={'news_title'} 
                                            value1={this.props.singleNew.title}
                                            spanClassName2={'news_date'} 
                                            value2={this.props.singleNew.date}/>
                        </div>
                        <div className={'col-12'}>
                            <SingleUniField spanClassName={'news_text'}
                                            value={this.props.singleNew.text}/>
                        </div>
                        <div className={'col-12'}>
                            <SingleUniField spanClassName={'news_content'}
                                            value={this.props.singleNew.content}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
